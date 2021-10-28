import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import { orange } from '@material-ui/core/colors'
import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar style={{backgroundColor : orange[400]}}>
          <Toolbar>
            <Typography variant="h5" style={{flexGrow : 1}}>Y&G - CRM</Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/Contact">Contact</Button>
            <Button color="inherit">Conversations</Button>
            <Button color="inherit">Marketing</Button>
            <Button color="inherit">Sales</Button>
            <Button color="inherit">Service</Button>
            <Button color="inherit">Automation</Button>
            <Button color="inherit">Reports</Button>
          </Toolbar>
      </AppBar>
    )
}
