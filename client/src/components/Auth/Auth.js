import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Grid, Container, TextField } from '@material-ui/core'
import { GoogleLogin} from 'react-google-login'
import Icon from './icon'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'

const Auth = () => {
    const [showPassword, setShowPassword ] = useState(false)
    const classes = useStyles()
    const [isSignUp, setIsSignUp] = useState(false)
    const handleShowPassword = ()=>{
        setShowPassword((prevShowPassword)=>!prevShowPassword)
    }
    const switchMode = ()=>{
        setIsSignUp( (previousSignUp)=> !previousSignUp )
        handleShowPassword(false)
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <GoogleLogin
                        clientId="GOOGLE ID"
                        render={(renderProps)=>{
                            <Button 
                                className={classes.googleButton} 
                                color="primary" 
                                fullWidth onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon/>} 
                                variant="contained">
                                    Google Sing In
                             </Button>
                        }}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignUp ? 'Already have an account? Sign in' : "Don't already have an account? Sign Up!"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth