
import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CardMedia, Container, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const ExploreAllProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch("http://localhost:5000/exploreProducts")
            .then(res => res.json())
            .then(result => setProducts(result))
    }, [])
    return (


        <Box sx={{ flexGrow: 1, my: 5 }}>

            <Container>
                <Typography style={{ fontWeight: 600, color: '#515353', margin: '30px' }} variant="h3" component="div">
                    Explore Our Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products?.map((product, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <img style={{ width: '50%' }} src={product?.img} alt="" />
                                    <Typography sx={{ textAlign: 'left' }} variant="h6" component="div">
                                        ${product?.price}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {product?.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {product?.description}
                                    </Typography>


                                </CardContent>
                                <CardActions>
                                    <Link style={{ textDecoration: 'none' }} to={`/productDetaile/${product?._id}`}> <Button variant="outlined">Buy Now</Button> </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>


    );
};

export default ExploreAllProducts;