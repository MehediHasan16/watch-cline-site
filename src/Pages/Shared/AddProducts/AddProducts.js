import { Button } from '@mui/material';
import React from 'react';
import './AddProducts.css';

import { useForm } from "react-hook-form";
const inputStyle = {
    border: 'none',
    padding: '8px',
    borderBottom: '1px solid #646C6F',
    marginTop: '9px',
    width: '40%',
    outline: 'none'

}


const AddProducts = () => {



    const { register, handleSubmit, watch, reset } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/addToProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result?.insertedId) {
                    alert(' successfully add Products batabase');
                    reset();
                }
            })


        console.log(data);
    }

    console.log(watch("example"));
    return (
        <div>
            <h1>Please Add Your Products Services </h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                        style={inputStyle}
                        {...register("name", { required: true })}
                        placeholder="Product-Name"

                    /> <br />
                    <input
                        style={inputStyle}
                        {...register("description", { required: true })}
                        placeholder="Description"

                    /><br />
                    <input
                        style={inputStyle}
                        {...register("img", { required: true })}
                        placeholder="img-url"

                    /><br />
                    <input
                        style={inputStyle}
                        {...register("price", { required: true })}
                        placeholder="Price"
                        type="number"

                    /><br />

                    <input
                        className='submitStyle'
                        value="Add To Product"
                        type="submit"
                    />


                </form>
            </div>
        </div>
    );
};

export default AddProducts;