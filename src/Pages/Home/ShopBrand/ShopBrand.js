import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const buttonStyle = {
    bacgroundColor: 'red'
}
const ShopBrand = () => {
    return (
        <div>

            <Box sx={{ flexGrow: 1, my: 5 }}>
                <Container>
                    <Typography sx={{ margin: 5, fontWeight: 600, color: '#475151' }} variant="h4" component="div">
                        Latest Brand
                    </Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>


                        <Grid item xs={12} md={3} >

                            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/banner-9.png" alt="" />


                            <Button style={{ bacgroundColor: 'red', color: 'white', fontWeight: 600, marginTop: '-100px' }}>CASTUS FIESTA</Button>




                        </Grid>
                        <Grid item xs={12} md={3} >
                            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/cat-2.jpg" alt="" />

                            <Button style={{ bacgroundColor: 'red', color: 'white', fontWeight: 600, marginTop: '-100px' }}>DANIEL WELLINGTON</Button>



                        </Grid>
                        <Grid item xs={12} md={3} >
                            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/cat-4.png" alt="" />


                            <Button style={{ bacgroundColor: 'red', color: 'white', fontWeight: 600, marginTop: '-100px' }}>FOSSIL</Button>




                        </Grid>
                        <Grid item xs={12} md={3} >
                            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/cat-1.png" alt="" />

                            <Button style={{ bacgroundColor: 'red', color: 'white', fontWeight: 600, marginTop: '-100px' }}>MASETATI</Button>

                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default ShopBrand;