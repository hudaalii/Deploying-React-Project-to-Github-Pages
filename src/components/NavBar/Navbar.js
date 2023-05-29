import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import navLogo from './logoimage/navlogo.png';
import { Link } from "react-router-dom";

export default function Navbar() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: 'white' }} position="relative">
        <Toolbar sx={{ justifyContent: "space-between" }}>
           
            <Link to="/">
              <img src={navLogo} width="200px" alt=""/>
            </Link>
            <Link to="/dashboard">
              Dashboard
            </Link>
            <Button 
            style={{ textTransform: 'none', backgroundColor: "#2962FF", borderRadius: 2, color: 'white' }}
            variant="contained"
            component={Link}
            to="/login"
            >
                Login
            </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );

}
