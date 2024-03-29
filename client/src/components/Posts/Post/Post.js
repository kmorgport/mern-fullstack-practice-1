import React, {useState} from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyles from './styles'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/post'

const Post = ({post}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [ likes, setLikes ] = useState(post?.likes);

    const hasLikedPost = post.likes.find( like => like === userId)
    const userId = user?.result.googleId || user?.result?.id;

    const handleLike = async () => {
        dispatch(likePost(post._id));

        if(hasLikedPost){
            setLikes(post.likes.filter((id)=> id !== userId))
        }
    };

    const Likes = ()=>{
        if (post.likes.length > 0){
            return post.likes.find( like => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><ThumbUpAltIcon fontSize="small"/>&nbsp;{post.likes.length > 2? `You and ${post.likes.length-1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's': ''}`}</>
                ):(
                    <><ThumbUpAltOutlined fontSize="small">&nbsp;{post.likes.length}{post.likes.length === 1 ? 'Like': 'Likes'}</ThumbUpAltOutlined></>
                )
        }
        return <><ThumbUpAltOutlined fontSize="small"/>&nbsp;like</>
    }

    const openPost = ()=> {
        history.push(`/posts/${post._id}`)
    }
    
    return(
        <Card className={classes.card} raised elevation={6}>
        <ButtonBase className={classes.cardAction} onClick={openPost}>
            <CardMedia className={classes.media}
                image={post.selectedFile}
                title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator)&&(
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={()=>{}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            )}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
        </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                    <ThumbUpAltIcon fontSize="small"/>
                    <Likes/>
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator)&&(
                                <Button size="small" color="primary" onClick={()=> dispatch(deletePost(post._id))}>
                                    <DeleteIcon fontSize="small"/>
                                    Delete
                                </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Post