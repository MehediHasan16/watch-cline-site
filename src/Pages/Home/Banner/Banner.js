import { Container, Grid, Typography } from '@mui/material';
import React from 'react';



const Banner = () => {
    const bannerBg = {
        background: 'url(https://img.freepik.com/free-vector/gray-silver-wave-abstract-background_29865-1260.jpg?size=626&ext=jpg)'
    }
    return (
        <div style={bannerBg}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={4} lg={4} >
                        <Typography variant="h3" style={{ fontWeight: 600, color: '#475151' }}>Don't Miss The <br /> Moment</Typography>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                        <img style={{ width: '100%' }} src="https://cdn.shopify.com/s/files/1/0248/7114/1461/files/slide_2.jpg?v=1577085363" alt="" />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Banner;