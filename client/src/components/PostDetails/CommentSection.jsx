import React, {useState, useRef} from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { mergeClasses } from '@material-ui/styles';

const CommentSection = ({post}) => {
    const [comments, setComments ] = useState();
    return (
        <div>
            <div className={classes.commentsOuterSection}>
                <div className={classes.commentsInnerSection}>
                    <Typography gutterBottom variant="h6"></Typography>
                    {comments.map((c,i)=>(
                        <Typography key={i} gutterBottom variant="subtitle1">
                            Comment {i}
                        </Typography>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CommentSection