import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Kpass
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function SignIn() {
    const classes = useStyles();
    const useStateWithSessionStorage = sessionStorageKey=>{
                const [value, setValue] = React.useState(
                    sessionStorage.getItem(sessionStorageKey)||'');
                    return [value, setValue]
            };
            const [value, setValue] = useStateWithSessionStorage('token');
            const [isError, setIsError] = useState(false);
            const [isLoading, setIsLoading] = useState(true);
            const [isAuthError, setIsAuthError] = useState(false);
            const [isAuthenticating, setIsAuthenticating] = useState(false);
            const [inputUser, setInputUser] = useState('');
            const [inputPass, setInputPass] = useState('');
        
            useEffect(()=>{
                sessionStorage.setItem('token', value);
            }, [value]);
        
            const getToken = () => {
                const sendData = async () => {
                    setIsAuthenticating(true);
                    setIsError(false);
                    setIsAuthError(false);
                    try{                                                                                                                                                                            
                        const endpoint = 'http://localhost:5000/api/get_api_key'
                        const data = {
                            username: inputUser,
                            password: inputPass
                        }
                        const res = await axios.post(endpoint, data)
                        console.log(res.data.api)
                        if(res.data.api){
                            setValue(res.data.api)
                        }else{
                            setIsAuthError(true)
                        } 
                    }catch (error) {
                        console.log(error)
                        setIsError(true)
                    }
                    setIsAuthenticating(false)
                }
                sendData()
            };
            let timeReload = (timeTo)=>{
                // 
                setTimeout((function(){window.location="http://localhost:3000/passwords"}),timeTo)}
        
            let contents = null;
            if(!value){
                contents=(
                    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              onChange={e=>setInputUser(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e=>setInputPass(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={e=>{getToken(); e.preventDefault(); javascript:timeReload(1000)}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          {isError && <h3>processing error.</h3>}
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
                )
            }
  
    return (
      <div>
          {contents}
          
      </div>
    );
  }


















// const Login = ()=>{
    
//     
//     {
//         contents = (
//             <div>
//                 <form>
//                     <input type="text"  placeholder="Username"/>
//                     <input type="password"  placeholder="Password"/>
//                     <input type="button"  value="login"/>
//                 </form>
//                 
//                 {isAuthError && <h3>Please review your information.</h3> && timeReload(0) }
                
//             </div>
//         )
//     }
//     return(
//         <div>
            
//             {contents}
            
//         </div>
//     )
// }


// export default Login;