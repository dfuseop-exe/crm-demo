import './ADDForm.css';
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";


export default function ADDForm(props) {


  

  return (
    <div style={{ margin: "15% auto", width: "70%"  }}>
      <AppBar
        style={{
          position: "absolute",
          backgroundColor: "#ffa500d1",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <Typography variant="h5" textAlign="center" mt={2} mb={2}>
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
          value={props.contact.Age}
          onChange={props.handleInput}
          name="Age"
          label="Age"
          variant="standard"
          fullWidth
          
        />

        <Button  variant="contained" size="medium" color="inherit" style={{color : props.mode ==="white" ?"black":"black"}} onClick={props.addData}>
          Create Contact
        </Button>
      </div>
    </div>
  );
}