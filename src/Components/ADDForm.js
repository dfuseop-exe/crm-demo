import './ADDForm.css';
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';



export default function ADDForm(props) {


  

  return (
    <div style={{ margin: "15% auto", width: "70%"  }}>
      <AppBar
        style={{
          position: "absolute",
          backgroundColor: `${props.theme}`,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <Typography variant="h5" textAlign="center" mt={2} mb={2} style={{fontFamily : 'Comfortaa' , color : props.mode ==="white" ?"black":"white" , flexGrow: 1}}>
            Create New Contact
          </Typography>
         
        </Toolbar>
      </AppBar>

      <div style={{ marginBottom: "20px"}}>
        <TextField
          
          style={{ marginBottom: "20px", marginTop: "30px"}}
          id="standard-basic"
          value={props.contact.Email}
          onChange={props.handleInput}
          name="Email"
          label="Email"
          variant="standard"
          fullWidth
          
        />
        <TextField
          style={{ marginBottom: "20px" }}
          id="standard-basic"
          value={props.contact.FirstName}
          onChange={props.handleInput}
          name="FirstName"
          label="FirstName"
          variant="standard"
          fullWidth
          
        />
        <TextField
          style={{ marginBottom: "20px" }}
          id="standard-basic"
          value={props.contact.LastName}
          onChange={props.handleInput}
          name="LastName"
          label="LastName"
          variant="standard"
          fullWidth
        />

        <TextField
          style={{ marginBottom: "20px" }}
          id="standard-basic"
          value={props.contact.phone}
          onChange={props.handleInput}
          name="phone"
          label="phone"
          variant="standard"
          fullWidth
          
        />

<Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          p: 1,
          m: 1,
        }}
      >
         <Button  variant="contained" size="medium" color="inherit" style={{color : props.mode ==="white" ?"black":"black" ,  fontFamily : 'Comfortaa'}} onClick={props.addData}>
          Create Contact
        </Button>


        <Button  variant="contained" size="medium" color="inherit" style={{color : props.mode ==="white" ?"black":"black" ,  fontFamily : 'Comfortaa' }}>
          Cancle
        </Button>
       
      </Box>

       

      </div>
    </div>
  );
}