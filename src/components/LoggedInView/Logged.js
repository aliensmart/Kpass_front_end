import React from 'react';
import Router from './Router'
import Sidebar from './SideBare/Sidebare'
import Header from './Header/Header'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(0),
  },
  paper: {

    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));



const Logged = () => {
    const token = sessionStorage.getItem('token');
    const classes = useStyles();
    const fullWidth = {
        minHeight:'100vh'
    }

    const color = {
        backgroundColor:"rgba(72, 0, 72, .9)",
        color:'#fff',
        minHeight:'100vh',
        borderRadius: '0px'
    }

    return (
        <div>
            <Header/>
            
        <Grid container spacing={0}>
        
        <Grid style={fullWidth} item xs={2}>
          <Paper style={color} className={classes.paper}><Sidebar/></Paper>
        </Grid>
        <Grid style={fullWidth} item xs={10}>
          <Paper style={fullWidth} className={classes.paper}><Router/></Paper>
        </Grid>
      </Grid>
            
            {/* <Sidebar/> */}
            
            {/* <Router/> */}
            

            
        </div>
    )
}

export default Logged