import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import ADDForm from './ADDForm';
import { orange } from '@mui/material/colors';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box style={{ width : "600px" }}>
      <ADDForm/>
    </Box>
  );

  return (
    <div style={{display : "inline-block" , marginLeft:"12px"}}>
      
      <Button variant="text" style={{backgroundColor : orange[400] ,  color : "white" }} onClick={toggleDrawer("left", true)}>Create New Contact</Button>
          <SwipeableDrawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
      
    </div>
  );
}