import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>

            <Container>


                <img style={{ width: '50%' }} src="https://cdn.dribbble.com/users/1408464/screenshots/6377404/404_illustration_4x.png" alt="" /><br />


                <Link style={{ textDecoration: 'none', fontWeight: 600 }} to={'/'}> <Button variant="outlined">Back TO Home</Button></Link>


            </Container>


        </div>
    );
};

export default Error;