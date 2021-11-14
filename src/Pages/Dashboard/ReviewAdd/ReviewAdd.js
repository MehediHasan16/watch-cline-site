// import React from 'react';

// const ReviewAdd = () => {
//     return (
//         <div>
//             <h1>this is Review add</h1>

//         </div>
//     );
// };

// export default ReviewAdd;

import { Button } from '@mui/material';
import React from 'react';



import { useForm } from "react-hook-form";
const inputStyle = {
    border: 'none',
    padding: '8px',
    borderBottom: '1px solid #646C6F',
    marginTop: '9px',
    width: '40%',
    outline: 'none'

}


const ReviewAdd = () => {



    const { register, handleSubmit, watch, reset } = useForm();
    const onSubmit = data => {
        fetch("https://afternoon-forest-44332.herokuapp.com/userReview", {
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
            <h1>Please Add Your Review Information  </h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                        style={inputStyle}
                        {...register("name", { required: true })}
                        placeholder="Enter Your Name"

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
                        {...register("rating", { required: true })}
                        placeholder="Rating min 0 max 5"
                        type="number"

                    /><br />

                    <input
                        className='submitStyle'
                        value="Add To Review"
                        type="submit"
                    />


                </form>
            </div>
        </div>
    );
};

export default ReviewAdd;