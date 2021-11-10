import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Select , MenuItem , FormControl } from "@mui/material";





export default function Navbar(props) {


  return (
    <AppBar style={{ backgroundColor: `${props.theme}`}}>
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 , fontFamily : 'Comfortaa' , color : props.mode ==="white" ?"black":"white" }}>
          Y&G - CRM
        </Typography>
        <Button color="inherit" component={Link} to="/">
          <Typography
            variant="subtitle1"
            style={{ color: props.mode === "white" ? "black" : "white" , fontFamily : 'Comfortaa' }}
          >
            Home
          </Typography>
        </Button>
        <Button color="inherit" component={Link} to="/Contact">
        <Typography variant="subtitle1" style={{color : props.mode ==="white" ?"black":"white" , fontFamily : 'Comfortaa'}}>Contact</Typography>
        </Button>
        <IconButton onClick={props.togglemode}>
          <Brightness4Icon
            style={{ color: props.mode === "white" ? "black" : "white" , fontFamily : 'Comfortaa' }}
          />
        </IconButton>
        
        <FormControl variant="standard"> 

            
         <Select variant="standard" style={{width : "80px" , color : props.mode ==="white" ?"black":"white" , fontFamily : 'Comfortaa'}} onChange={props.HandleSelect}>

              <MenuItem style={{backgroundColor : props.mode ==="white" ?"white":"#14130c" , color : props.mode ==="white" ?"black":"white" , fontFamily : 'Comfortaa'}} value='#fb8c00'>Orange</MenuItem>
              <MenuItem style={{backgroundColor : props.mode ==="white" ?"white":"#14130c" , color : props.mode ==="white" ?"black":"white" , fontFamily : 'Comfortaa'}} value='#e53935'>Red</MenuItem>
              <MenuItem style={{backgroundColor : props.mode ==="white" ?"white":"#14130c" , color : props.mode ==="white" ?"black":"white" , fontFamily : 'Comfortaa'}} value='#8e24aa'>Purple</MenuItem>
              <MenuItem style={{backgroundColor : props.mode ==="white" ?"white":"#14130c" , color : props.mode ==="white" ?"black":"white" , fontFamily : 'Comfortaa'}} value='#3f51b5'>Indigo</MenuItem>
              <MenuItem style={{backgroundColor : props.mode ==="white" ?"white":"#14130c" , color : props.mode ==="white" ?"black":"white" , fontFamily : 'Comfortaa'}} value='#20B2AA'>LightSeaGreen</MenuItem>
            </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
}
