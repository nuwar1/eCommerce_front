import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

export default function AuthNavbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KAShop
          </Typography>
          <Box sx={{display:"flex", gap:2}}>
            <Link component={RouterLink} to="/home" color='inherit' underline='none'>Home</Link>
            <Link component={RouterLink} to="" color='inherit' underline='none'>Shop</Link>
            <Link component={RouterLink} to="" color='inherit' underline='none'>Product</Link>
            <Link component={RouterLink} to="" color='inherit' underline='none'>Pages</Link>
            <Link component={RouterLink} to="" color='inherit' underline='none'>Blog</Link>
            <Link component={RouterLink} to="" color='inherit' underline='none'>Contact</Link>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  )
}