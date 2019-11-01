import React, {useState, useEffect} from 'react';
import axios from 'axios';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
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
            const [theError, setTheError] = useState('')
        
            useEffect(()=>{
                sessionStorage.setItem('token', value);
            }, [value]);
//-------------------------------------Password hid and show usestate--------------------------------------

            const [values, setValues] = React.useState({
              password: '',
              showPassword: false,
            });
//-------------------------------------End Password hid and show usestate--------------------------------------


            let timeReload = (timeTo)=>{
              // 
              setTimeout((function(){window.location="http://localhost:3000/passwords"}),timeTo)}

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
                        console.log(res.data)
                        if(res.data.api){
                            setValue(res.data.api)
                            javascript:timeReload(1000)
                        }else{
                            setTheError(res.data.error)
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
//-------------------------------------Password hid and show functions--------------------------------------
            const handleChange = prop => event => {
              setValues({ ...values, [prop]: event.target.value });
            };
          
            const handleClickShowPassword = () => {
              setValues({ ...values, showPassword: !values.showPassword });
            };
          
            const handleMouseDownPassword = event => {
              event.preventDefault();
            };
//-------------------------------------End ofPassword hid and show functions--------------------------------------

        
            let contents = null;
            if(!value){
                contents=(
                    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <span style={{color:"red"}}>{theError}</span>
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
              id="outlined-adornment-password"
              className={clsx(classes.margin, classes.textField)}
              type={values.showPassword ? 'text' : 'password'}
              label="Password"
              autoComplete="current-password"
              onChange={event=>{handleChange('password'); setInputPass(event.target.value)}}
              InputProps={{
              endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
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
              onClick={e=>{getToken(); e.preventDefault(); }}
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
                <Link href="/login/registrate" variant="body2">
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