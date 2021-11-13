import React, {useEffect} from 'react'
import { Paper, Typography, CircularProgress, Divider} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useParams, useHistory } from 'react-router-dom'
import {getPost} from '../../actions/post'
import useStyles from './styles'

const PostDetails = () =>{
    const { post, posts, isLoading } = useSelector( state => state.posts);
    const dispatch = useDispatch()
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(()=>{
        dispatch(getPost(id))
    },[id])

    if(!post) return null

    if(isLoading){
        return <Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em"></CircularProgress>
        </Paper>
    }
    return (
        <Paper style={{padding: '20px', borderRadius: '15px'}} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">{post.title}</Typography>
                    <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags}</Typography>
                    <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                    <Typography variant="h6">Created By: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    <Divider style={{ margin="20px 0" }}/>
                    <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                    <Divider style={{ margin="20px 0" }}/>
                    <Typography variant="body1"><strong>Comments - coming soon</strong></Typography>
                    <Divider style={{ margin="20px 0" }}/>
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={post.selectedFile || ""}/>
                </div>
            </div>

        </Paper>
    )
}

export default PostDetails