import React, { useState } from "react";
import { Button, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "../styles";
import PropTypes from 'prop-types';
import DataTable from "../DataTable";
import ADDForm from "../ADDForm";
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


function Contact() {

  const classes = useStyles();

  const [value, setValue] = useState(0);



  //PROPS DATA----------------------
  const [contact, setcontact] = useState({
    Email : "",
    FirstName: " ",
    LastName: " "
  });


  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 21, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 22, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 23, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 24, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 25, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 26, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 27, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 28, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 29, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 31, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 32, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 33, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 34, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 35, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 36, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 37, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 38, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 39, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  
  const [Rows , setRows] = useState({rows})
 

  const handleInput = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setcontact({ ... contact, [name]:value });
    //setRows(rows.push(contact))
  };

  //--------------------

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  
  const addData = (event)=>{
    console.log("clicked")
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
              <Button variant="outlined" size="medium" sx={{ ml:3 }}>Actions</Button>
              <Button variant="outlined" size="medium" sx={{ ml:3 }}>Import</Button>
              
              <LeftDrawer addData={addData} handleInput={handleInput} contact={contact} setcontact={setcontact}/>
          </div>
        </Box>

        {
          //Tabs Section
        }
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="ALL Contacts" {...a11yProps(0)} />
            <Tab label="My Contacts" {...a11yProps(1)} />
            <Tab label="Unassigned Contacts" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <DataTable contact={contact} rows={rows}/>
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
