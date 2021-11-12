import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, userLogout } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ py: 2, backgroundColor: '#FBFCFC' }} >
                <Toolbar sx={{ justifyContent: 'space-between' }} >

                    <Typography style={{ fontWeight: 700, color: '#5B6569' }} variant="h6" component="div" >
                        User: {user?.email} or {user?.displayName}
                    </Typography>
                    {
                        user?.email ?
                            <Button style={{ fontWeight: 700, color: '#5B6569' }} onClick={userLogout} color="inherit">Logout</Button> :
                            <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569' }} to='/login'><Button color="inherit">Login</Button></NavLink>
                    }
                    <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569' }} to='/purchase'><Button color="inherit">Purchase Product</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569' }} to='/exploreProducts'><Button color="inherit">Explore Products</Button></NavLink>


                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;