// import React from 'react';

// const ReviewInfo = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default ReviewInfo;

import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CardMedia, Container, Rating, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const ReviewInfo = () => {
    const [products, setProducts] = useState();
    const [value, setValue] = useState('');
    useEffect(() => {
        fetch("http://localhost:5000/reviewInfo")
            .then(res => res.json())
            .then(result => setProducts(result))
    }, [])
    return (


        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container>
                <Typography sx={{ margin: 5, fontWeight: 600, color: '#475151' }} variant="h4" component="div">
                    OUR Client Feedback
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {products?.map((product, index) => (
                        <Grid item xs={12} md={4} key={index}>

                            <img style={{ width: '20%', borderRadius: "50px", marginBottom: '-40px' }} src={product?.img} alt="" />


                            <Card sx={{ height: '350px' }}>
                                <CardContent>


                                    <Typography sx={{ margin: 5 }} variant="h6" component="div">
                                        {product?.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {product?.description}
                                    </Typography>
                                    <Typography>



                                        <Rating
                                            name="simple-controlled"
                                            value={product?.rating}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Typography>


                                </CardContent>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>


    );
};

export default ReviewInfo;