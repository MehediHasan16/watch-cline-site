import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';

import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useAuth from '../../../hooks/useAuth';

const Navigation2 = () => {
    const { user, userLogout } = useAuth();
    const theme = useTheme()
    const useStyle = makeStyles({
        navItemText: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            },
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            },
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: '#5B6569'
        }
    })
    const { navItemText, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle()
    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"

        >
            <List>

                <ListItem button>
                    <ListItemText  ><Link className={mobileNavItem} to='/'>Home</Link></ListItemText>

                </ListItem>
                {user?.email && <Box> <ListItem button>
                    <ListItemText  ><Link className={mobileNavItem} to='/exploreProducts'>Explore Products</Link></ListItemText>

                </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText  ><Link className={mobileNavItem} to='/dashboard'>Dashboard</Link></ListItemText>
                    </ListItem>
                    <Divider /></Box>}

                {user?.email ? <ListItem button onClick={userLogout}>
                    <Divider />
                    <ListItemText className={mobileNavItem}  >Logout</ListItemText>
                </ListItem>
                    :

                    <ListItem button>
                        <Divider />
                        <ListItemText  ><Link className={mobileNavItem} to='/login'>Login</Link></ListItemText>
                    </ListItem>
                }
                <Divider />
                <ListItem button>
                    <Divider />
                    <ListItemText  ><Link className={mobileNavItem} >{user?.displayName}</Link></ListItemText>
                </ListItem>
            </List>
            <Divider />

        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ padding: '10px', justifyContent: 'flex-start', backgroundColor: '#AAAEB0 ' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            Wrish
                        </Typography>
                        <Box className={navItemContainer} sx={{ display: 'inline-flex' }}>
                            <Link className={navItemText} to='/'><Button color="inherit">Home</Button></Link>
                            {user?.email && <Box>
                                <Link className={navItemText} to='/exploreProducts'><Button color="inherit">Explore Products</Button></Link>

                                <Link className={navItemText} to='/dashboard'><Button color="inherit">Dashboard</Button></Link>
                                <Link className={navItemText} ><Button color="inherit">{user?.displayName}</Button></Link>
                            </Box>}



                            {user?.email ? <Button onClick={userLogout} color="inherit">Logout</Button>

                                : <Link className={navItemText} to='/login'><Button color="inherit">Login</Button></Link>
                            }

                        </Box>

                    </Toolbar>
                </AppBar>

            </Box>
            <div>

                <React.Fragment >
                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>

    );
};

export default Navigation2;

