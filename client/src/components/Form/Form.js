import React, {useState, useEffect} from 'react'
import Filebase from 'react-file-base64'
import { TextField, Button, Typography, Paper, DialogContentText} from '@material-ui/core'
import useStyles from './styles'
import createPost from '../../actions/posts'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({currentId, setCurrentId}) => {
    const post = useSelector((state)=> currentId ? state.posts.find(p=> p._id === currentId): null)
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    useEffect(()=> {
        if(post) setPostData(post);
    }, [post])

    const dispatch = useDispatch();
    const classes = useStyles()
   
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData))
        }else{
        dispatch(createPost(postData))
        }
        clear()
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
        setCurrentId(null)
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing': 'Creating'} a Memory</Typography>
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