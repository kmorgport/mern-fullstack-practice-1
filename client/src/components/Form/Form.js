import React, {useState} from 'react'

import { TextField, Button, Typography, Paper, DialogContentText} from '@material-ui/core'
import useStyles from './styles'

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const
    const classes = useStyles()
    const handleSubmit = (event) => {
        event.preventDefault()
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
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator"fullWidth value={postData.creator} onChange={onChangeCreatorHandler}/>
                <TextField name="title" variant="outlined" label="Creator"fullWidth value={postData.creator} onChange={onChangeTitleHandler}/>
                <TextField name="message" variant="outlined" label="Creator"fullWidth value={postData.creator} onChange={onChangeMessageHandler}/>
                <TextField name="tags" variant="outlined" label="Creator"fullWidth value={postData.creator} onChange={onChangeTagsHandler}/>
            </form>
        </Paper>
    )
}

export default Form