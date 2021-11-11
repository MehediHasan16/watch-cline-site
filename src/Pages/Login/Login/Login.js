import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const { loginUser, isLoadingSpinara, user, error, singInwithGoogleAuthentication } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const currentLoginInfo = { ...loginInfo };
        currentLoginInfo[field] = value;
        setLoginInfo(currentLoginInfo)
        console.log(loginInfo);


    }

    const handleLoginForm = e => {
        loginUser(loginInfo.email, loginInfo.password, location, history);

        e.preventDefault();
    }
    const handleGoogleSingInAuth = () => {
        singInwithGoogleAuthentication(location, history)
    }

    return (
        <div>
            <Container>
                <Container>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={7} lg={5}>
                            <img style={{ width: '100%' }} src="https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} sx={{ mx: 5 }} >
                            <Typography variant="h3" style={{ fontWeight: 600, color: '#475151' }}>Login</Typography>

                            {!isLoadingSpinara && <form onSubmit={handleLoginForm}>
                                <TextField
                                    sx={{ width: 1, m: 1 }}
                                    id="standard-basic"
                                    type="email"
                                    name="email"
                                    onChange={handleOnChange}
                                    label="Enter Your Email"
                                    variant="standard" />
                                <br />
                                <TextField
                                    sx={{ width: 1, m: 1 }}
                                    id="standard-basic"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    label="Enter Your Passwords"
                                    variant="standard" />

                                <Button sx={{ m: 2 }} type="submit" variant="outlined">Login</Button><br />

                                <NavLink style={{ textDecoration: 'none' }} to='/register'> <Button sx={{ color: '#64BADA  ' }} variant="text">New User? Please Register</Button></NavLink>
                            </form>}
                            {isLoadingSpinara && <CircularProgress />}
                            {user?.email && <Alert severity="success">Created Account Successfully</Alert>}
                            {error && <Alert severity="error">{error}</Alert>}
                            <p>-------------or-------------</p>
                            {!isLoadingSpinara && <Button onClick={handleGoogleSingInAuth} sx={{ m: 2 }} type="submit" variant="outlined">Google Sign In</Button>}
                        </Grid>

                    </Grid>
                </Container>
            </Container>
        </div>
    );
};

export default Login;