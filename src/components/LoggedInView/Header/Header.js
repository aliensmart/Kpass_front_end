import React from 'react'
import './Header.css';
import Search from '../Password/Search'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(0),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));

const Header = ()=>{
    const classes = useStyles();
    const token = sessionStorage.getItem("token")
    return(
        <div className="Header">
            <div className="logo">Logo</div>
            <div className="profile">
              Your api key is: {token}
              <Search/>
            </div>
            
        </div>
    )
}
export default Header