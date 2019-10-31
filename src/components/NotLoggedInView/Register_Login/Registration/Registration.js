import React, {useState, useEffect} from 'react';
import axios from 'axios'
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
import Copyright from '../Copyright'

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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function SignUp() {
    const classes = useStyles();

    const useStateWithSessionStorage = sessionStorageKey => {
                const [value, setValue] = React.useState(
                    sessionStorage.getItem(sessionStorageKey) || "" );
                    return [value, setValue]
            };
        
            const [value, setValue] = useStateWithSessionStorage('token');
            const [isError, setIsError] = useState(false);
            const [isLoading, setIsLoading] = useState(true);
            const [isAuthError, setIsAuthError] = useState(false)
            const [isAuthenticating, setIsAuthenticating] = useState(false)
            const [inputusername, setInputUsername] = useState('')
            const [inputpassword, setInputPassword] = useState('')
            const [inputConfirmPassword, setInputConfirmPassword] = useState('')
            const [inputEmail, setInputEmail] = useState('')
            const [theError, setTheError] = useState('')
            
            let timeReload = (timeTo)=>{
              // 
                setTimeout((function(){window.location="http://localhost:3000/passwords"}),timeTo)}

            useEffect(()=>{
                sessionStorage.setItem('token', value);
            }, [value])
        
            const getToken = ()=>{
                const sendData = async ()=>{
                    setIsAuthenticating(true);
                    setIsError(false);
                    setIsAuthError(false);
                    try{
                        const endPoint = 'http://localhost:5000/api/create';
                        const data = {
                            username: inputusername,
                            password: inputpassword,
                            password_confirmation: inputConfirmPassword,
                            email: inputEmail
                        }
                        const res = await axios.post(endPoint, data)
                        console.log(res.data.error)
                        if(res.data.api_key){
                            setValue(res.data.api_key)
                            javascript:timeReload(1000)

                        }else{
                            setTheError(res.data.error)
                            setIsAuthError(true)
                            
                        }
                    }catch(error){
                        console.log(error);
                        setIsError(true)
                    };
                    setIsAuthenticating(false)
                    
                }
                sendData()
            };
            // console.log(theError)
            let errorContent = null
            const registrate = (e)=>{
              
              if(isAuthError===true){
                errorContent = (
                  <h1>
                    Hello
                  </h1>
                )
              }else{
                

                e.preventDefault();
                
              }
            }

                
        
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
            Sign up
          </Typography>
          {theError}
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Username"
                  autoFocus
                  onChange={e=>setInputUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={e=>setInputEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e=>setInputPassword(e.target.value)}
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e=>setInputConfirmPassword(e.target.value)}
                />
                
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={e=>{ getToken(); e.preventDefault();  }}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>

                )
            }
  
    return (
      <div>
          {contents}
          {
            
          }

      </div>
    );
  }






// const Register = ()=>{

//     const useStateWithSessionStorage = sessionStorageKey => {
//         const [value, setValue] = React.useState(
//             sessionStorage.getItem(sessionStorageKey) || "" );
//             return [value, setValue]
//     };

//     const [value, setValue] = useStateWithSessionStorage('token');
//     const [isError, setIsError] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isAuthError, setIsAuthError] = useState(false)
//     const [isAuthenticating, setIsAuthenticating] = useState(false)
//     const [inputusername, setInputUsername] = useState('')
//     const [inputpassword, setInputPassword] = useState('')
//     const [inputConfirmPassword, setInputConfirmPassword] = useState('')
//     const [inputEmail, setInputEmail] = useState('')
    
//     useEffect(()=>{
//         sessionStorage.setItem('token', value);
//     }, [value])

//     const getToken = ()=>{
//         const sendData = async ()=>{
//             setIsAuthenticating(true);
//             setIsError(false);
//             setIsAuthError(false);
//             try{
//                 const endPoint = 'http://localhost:5000/api/create';
//                 const data = {
//                     username: inputusername,
//                     password: inputpassword,
//                     password_confirmation: inputConfirmPassword,
//                     email: inputEmail
//                 }
//                 const res = await axios.post(endPoint, data)
//                 console.log(res.data.api_key)
//                 if(res.data.api_key){
//                     setValue(res.data.api_key)
//                 }else{
//                     setIsAuthError(true)
//                 }
//             }catch(error){
//                 console.log(error);
//                 setIsError(true)
//             };
//             setIsAuthenticating(false)
            
//         }
//         sendData()
//     };

//     let timeReload = (timeTo)=>{
//         // 
//         setTimeout((function(){window.location="http://localhost:3000/passwords"}),timeTo)}

//     let contents = null;
//     if(!value){
//         contents=(
//             <div>
//                 <form>
//                 <input type="text"  placeholder="Username"/>
//                 <input type="email"  placeholder="email"/>
//                 <input type="password"  placeholder="password"/>
//                 <input type="password"  placeholder="Confirm Password"/>
//                 <input type="button"  value="Register"/>
//                 </form>
//             </div>
//         )
//     }

//     return(
//         <div>
//             {contents}
//         </div>
//     )
// }


// export default Register