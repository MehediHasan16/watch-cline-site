// import React from 'react';

// const ManageProduct = () => {
//     return (
//         <div>
//             <h1>this manage product</h1>
//         </div>
//     );
// };

// export default ManageProduct;


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


const ManageProduct = () => {
    const [products, setProducts] = useState();
    const [isCancel, setIsCancel] = useState(null)
    useEffect(() => {
        fetch("http://localhost:5000/exploreProducts")
            .then(res => res.json())
            .then(result => setProducts(result))
    }, [products, isCancel]);
    const handelDeleteProduct = (id) => {
        console.log('delete oreder', id);
        fetch(`http://localhost:5000/manageProductCancel/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },

        })
            .then(res => res.json())
            .then(result => {
                if (result?.deletedCount > 0) {
                    setIsCancel(true);
                    alert('Are Your Cancel This Order???')
                }
                else {
                    setIsCancel(false);
                }



            })

    }

    return (


        <Box sx={{ flexGrow: 1, my: 5 }}>

            <Container>
                <Typography style={{ fontWeight: 600, color: '#515353', margin: '30px' }} variant="h3" component="div">
                    Manage Products
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
                                    <Button onClick={() => handelDeleteProduct(product?._id)} variant="outlined">Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>


    );
};

export default ManageProduct;