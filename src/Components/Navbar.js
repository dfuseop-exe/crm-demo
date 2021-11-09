import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'

import React from 'react'
import { Link } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function Navbar(props) {
    return (
        <AppBar style={{backgroundColor : "#ffa500d1"}}>
          <Toolbar>
            <Typography variant="h5" style={{flexGrow : 1}}>Y&G - CRM</Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/Contact">Contact</Button>
            <IconButton onClick={props.togglemode}><Brightness4Icon style={{color : props.mode ==="white" ?"black":"white"}}/></IconButton>
            <Typography variant="subtitle1" style={{color : props.mode ==="white" ?"black":"white"}}>Theme</Typography>
          </Toolbar>
      </AppBar>
    )
}
