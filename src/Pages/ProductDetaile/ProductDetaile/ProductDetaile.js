import { Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";

const inputStyle = {

    padding: '8px',

    marginTop: '9px',
    width: '50%',
    outline: 'none'

}

const ProductDetaile = () => {
    const { productId } = useParams();
    const [detailProduct, setDetailProduct] = useState({});
    console.log(productId);
    const { user } = useAuth();
    const { register, handleSubmit, watch, reset } = useForm();

    const { name, description, price, img, } = detailProduct;
    const onSubmit = data => {
        data.productTitle = name;
        data.description = description;
        data.price = price;
        data.img = img;
        data.displayName = user?.displayName;
        data.status = 'Padding'


        fetch("https://afternoon-forest-44332.herokuapp.com/addProductOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result?.insertedId) {
                    alert('Purchase  successful');
                    reset();
                }
            })


        console.log(data);
    }




    useEffect(() => {
        fetch(`https://afternoon-forest-44332.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then(result => setDetailProduct(result))
    }, [])

    return (
        <div>

            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={12}>
                        <Card sx={{ minWidth: 275, boxShadow: 0 }}>
                            <CardContent>
                                <img style={{ width: '20%' }} src={detailProduct?.img} alt="" />

                                <Typography variant="h5" component="div">
                                    {detailProduct?.name}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {detailProduct?.description}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    ${detailProduct?.price}
                                </Typography>


                            </CardContent>

                        </Card>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                style={inputStyle}
                                defaultValue={user?.displayName}
                                {...register("name", { required: true })}
                                placeholder="Enter Your Name"

                            /> <br />
                            <input
                                style={inputStyle}
                                value={user?.email}
                                {...register("email", { required: true })}
                                placeholder="Enter Your Name"

                            /> <br />
                            <input
                                style={inputStyle}

                                {...register("address", { required: true })}
                                placeholder="Enter Your Address"

                            /><br />
                            <input
                                style={inputStyle}
                                {...register("time", { required: true })}
                                placeholder="Date"
                                type='date'

                            /><br />
                            <input
                                style={inputStyle}
                                value={detailProduct?.price}
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="number"

                            /><br />

                            <input
                                className='submitStyle'
                                value="Purchase Now "
                                type="submit"
                            />


                        </form>
                    </Grid>


                </Grid>
            </Container>
        </div>
    );
};

export default ProductDetaile;