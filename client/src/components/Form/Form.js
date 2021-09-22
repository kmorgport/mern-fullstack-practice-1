import React, {useState} from 'react'
import Filebase from 'react-file-base64'
import { TextField, Button, Typography, Paper, DialogContentText} from '@material-ui/core'
import useStyles from './styles'
import createPost from '../../actions/posts'
import { useDispatch } from 'react-redux'
const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const dispatch = useDispatch();
    const classes = useStyles()
   
    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(createPost(postData))
    }
    
    const onChangeCreatorHandler = e =>{
        setPostData({
            ...postData,
            creator: e.target.value
        })
    }

    const onChangeTitleHandler = e =>{
        setPostData({
            ...postData,
            title: e.target.value
        })
    }

    const onChangeMessageHandler = e =>{
        setPostData({
            ...postData,
            message: e.target.value
        })
    }

    const onChangeTagsHandler = e =>{
        setPostData({
            ...postData,
            tags: e.target.value
        })
    }

    const clear = ()=> {

    }
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={onChangeCreatorHandler}/>
                <TextField name="title" variant="outlined" label="Creator" fullWidth value={postData.title} onChange={onChangeTitleHandler}/>
                <TextField name="message" variant="outlined" label="Creator" fullWidth value={postData.message} onChange={onChangeMessageHandler}/>
                <TextField name="tags" variant="outlined" label="Creator" fullWidth value={postData.tags} onChange={onChangeTagsHandler}/>
                <div className={classes.fileInput}>
                    <Filebase
                    type="file"
                    multiple={false}
                    onDone={(base64)=> setPostData({...postData, selectedFile:base64})}
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                    >Submit</Button>
                <Button 
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                    >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form