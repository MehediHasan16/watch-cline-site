

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {

    Switch,
    Route,
    Link,

    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import DashboardHomePage from '../DashboardHomePage/DashboardHomePage';
import MyOrders from '../MyOrders/MyOrders';
import ReviewAdd from '../ReviewAdd/ReviewAdd';
import PayBill from '../PayBill/PayBill';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProducts from '../../Shared/AddProducts/AddProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';

const drawerWidth = 220;

function Dashboard(props) {
    let { path, url } = useRouteMatch();
    const { userLogout, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box sx={{ textAlign: 'left', my: 5, ml: 2 }}>
                <Link style={{ textDecoration: 'none', fontWeight: 500, color: '#5B6569' }} to='/home'><Button color="inherit">Home</Button></Link><br />

                <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569', textAlign: "left" }} to={`${url}`}><Button color="inherit">Dashboard</Button></NavLink><br />

                {!admin && <Box><NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569', textAlign: "left" }} to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></NavLink><br />

                    <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569', textAlign: "left" }} to={`${url}/reviewAdd`}><Button color="inherit">Review</Button></NavLink><br />
                    <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569', textAlign: "left" }} to={`${url}/payBill`}><Button color="inherit">Pay Bill</Button></NavLink><br /></Box>}



                {admin && <Box>
                    <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569', textAlign: "left" }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></NavLink><br />


                    <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569', textAlign: "left" }} to={`${url}/addProducts`}><Button color="inherit">Add To Porducts</Button></NavLink><br />

                    <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569', textAlign: "left" }} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></NavLink><br />

                    <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569', textAlign: "left" }} to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></NavLink><br />
                </Box>}
                <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#5B6569', textAlign: "left" }} to='/login'><Button onClick={userLogout} color="inherit">Logout</Button></NavLink><br />

            </Box>







        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHomePage></DashboardHomePage>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviewAdd`}>
                        <ReviewAdd></ReviewAdd>
                    </Route>
                    <Route path={`${path}/payBill`}>
                        <PayBill></PayBill>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </Route>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
