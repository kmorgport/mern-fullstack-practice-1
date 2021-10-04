import { AppBar, Typography } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import React from 'react'

import useStyles from './styles'

const Navbar = ()=> {
    const classes = useStyles();
    return (
            <AppBar className={classes.appBar}position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60"/>
            </AppBar>
    )
}

export default Navbar