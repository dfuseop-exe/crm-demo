import React, { useState } from "react";
import { Button, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "../styles";
import PropTypes from 'prop-types';
import DataTable from "../DataTable";
import LeftDrawer from "../LeftDrawer";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}> 
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Contact(props) {

  const classes = useStyles();

  const [value, setValue] = useState(0);



  //PROPS DATA----------------------
  const [contact, setcontact] = useState({
    Email : "",
    FirstName: "",
    LastName: "",
    Age : ""
  });



  const rowData = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  ];
 
  const [rows, setRows] = useState(rowData)

  const handleInput = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setcontact({ ...contact, [name]:value });
    //setRows(rows.push(contact))
  };

  //--------------------

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  
  const addData = (event)=>{
    const { Email , FirstName , LastName , Age} = contact
    const field = { id : (rows.length)+1 , lastName : LastName , firstName : FirstName , age : Age }
    console.log(field)
    let rowdata = rows.concat(field)
    setRows(rowdata)
    
  }

  return (
    <div style={{ marginTop :  "100px" }}>
      <main className={classes.container}>

        {
          //Heading Section
        }
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="h5">
            Contacts
          </Typography>
          <div>
              <Button variant="contained" size="medium" color="inherit" sx={{ ml:3 }}  style={{color : props.mode ==="white" ?"black":"black"}} >Actions</Button>
              <Button variant="contained" size="medium" color="inherit" sx={{ ml:3 ,mr :1 }} style={{color : props.mode ==="white" ?"black":"black"}}>Import</Button>
              
              <LeftDrawer addData={addData} handleInput={handleInput} contact={contact} setcontact={setcontact}  mode={props.mode}/>
          </div>
        </Box>

        {
          //Tabs Section
        }

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab label="ALL Contacts" {...a11yProps(0)} style={{color : props.mode ==="white" ?"black":"white"}}  />
            <Tab label="My Contacts" {...a11yProps(1)} style={{color : props.mode ==="white" ?"black":"white"}}/>
            <Tab label="Unassigned Contacts" {...a11yProps(2)} style={{color : props.mode ==="white" ?"black":"white"}} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <DataTable contact={contact} rows={rows} mode={props.mode}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          My Contacts
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </main>
    </div>
  );
}

export default Contact;