import { AppBar, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Toolbar, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { positions } from "@mui/system";
import React from "react";

export default function ADDForm() {
  return (
    <div  style={{margin : "15% auto" , width : "70%" }}>

        <AppBar style={{  position : "absolute" , backgroundColor : "orange" , display : "flex" , alignItems : "center" , }}>
          <Toolbar>
          <Typography variant="h5" textAlign="center" mt={2} mb={2}>Create New Contact</Typography>
          </Toolbar>
        </AppBar>

       <div style ={{marginBottom : "20px" }}>
       <TextField style={{marginBottom : "20px", marginTop : "30px"}} id="filled-basic" label="Email" variant="outlined" fullWidth/>
       <TextField style={{marginBottom : "20px"}} id="filled-basic" label="First Name" variant="outlined" fullWidth/>
       <TextField style={{marginBottom : "20px"}} id="filled-basic" label="Last Name" variant="outlined" fullWidth/>

       
      <FormControl fullWidth style={{marginBottom : "20px"}}>
        <InputLabel id="demo-simple-select-label">Contact Owner</InputLabel>
        <Select
          label="Contact Owner"
        >
          <MenuItem value={"owner1"}>Owner1</MenuItem>
          <MenuItem value={"owner2"}>Owner2</MenuItem>
          <MenuItem value={"owner3"}>Owner3</MenuItem>
        </Select>
      </FormControl>

      <TextField style={{marginBottom : "20px"}} id="filled-basic" label="Job Title" variant="outlined" fullWidth/>

      <TextField style={{marginBottom : "30px"}} id="filled-basic" label="Phone Number" variant="outlined" fullWidth/>

      <Button style={{backgroundColor : orange[400] , color : "white"}}>Create Contact</Button>

      </div>
    </div>
  );
}

      
