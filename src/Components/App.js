import React, { useState } from "react";
import { Button, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./styles";
import PropTypes from 'prop-types';
import DataTable from "./components/DataTable";
import SwipeableTemporaryDrawer from "./components/LeftDrawer";

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


function App() {

  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const rightDrawable = () =>{
    <SwipeableTemporaryDrawer drawer={'right'}/>
  }
  return (
    <div>
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
              <Button variant="contained" size="medium" sx={{ ml:3 }} onClick={rightDrawable}>Create Contact</Button>
          </div>
        </Box>

        {
          //Tabs Section
        }
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <DataTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </main>
      <SwipeableTemporaryDrawer />
    </div>
  );
}

export default App;
