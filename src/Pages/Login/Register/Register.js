
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({});
    const { newRegisterUser, isLoadingSpinara, user, error } = useAuth();
    const history = useHistory();
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const currentLoginInfo = { ...registerInfo };
        currentLoginInfo[field] = value;
        setRegisterInfo(currentLoginInfo)
        console.log(registerInfo);


    }

    const handleRegisterForm = e => {
        if (registerInfo.password !== registerInfo.passwordAnother) {
            alert('Password did not Match');
            return
        }

        newRegisterUser(registerInfo.email, registerInfo.password, registerInfo.name, history);

        e.preventDefault();
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
                            <Typography variant="h3" style={{ fontWeight: 600, color: '#475151' }}>Register</Typography>

                            {!isLoadingSpinara && <form onSubmit={handleRegisterForm}>
                                <TextField
                                    sx={{ width: 1, m: 1 }}
                                    id="standard-basic"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    label="Enter Your Name"
                                    variant="standard" />

                                <TextField
                                    sx={{ width: 1, m: 1 }}
                                    id="standard-basic"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    label="Enter Your Email"
                                    variant="standard" />

                                <TextField
                                    sx={{ width: 1, m: 1 }}
                                    id="standard-basic"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    label="Enter Your Passwords"
                                    variant="standard" />
                                <TextField
                                    sx={{ width: 1, m: 1 }}
                                    id="standard-basic"
                                    type="password"
                                    name="passwordAnother"
                                    onBlur={handleOnBlur}
                                    label="Re-Type Your Passwords"
                                    variant="standard" />
                                <Button sx={{ m: 2 }} type="submit" variant="outlined">Register</Button><br />

                                <NavLink style={{ textDecoration: 'none' }} to='/login'> <Button sx={{ color: '#64BADA  ' }} variant="text">Already Registered? Please Register</Button></NavLink>
                            </form>}

                            {isLoadingSpinara && <CircularProgress />}
                            {user?.email && <Alert severity="success">Created Account Successfully</Alert>}
                            {error && <Alert severity="error">{error}</Alert>}
                        </Grid>

                    </Grid>
                </Container>
            </Container>
        </div>
    );
};

export default Register;