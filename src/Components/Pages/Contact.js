import React, { useState } from "react";
import { Button, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "../styles";
import PropTypes from 'prop-types';
import DataTable from "../DataTable";
import ADDForm from "../ADDForm";
import SwipeableTemporaryDrawer from "../LeftDrawer";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              
              <SwipeableTemporaryDrawer/>
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
          <DataTable />
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
