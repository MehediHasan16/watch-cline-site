import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMakeAdminSubmit = (e) => {
        const user = { email };
        fetch("http://localhost:5000/usersData/admin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(result => {
                if (result?.modifiedCount) {
                    alert(' successfully add Admin role');

                }
            })

        e.preventDefault();
    }
    return (
        <Box sx={{ boxShadow: 2 }}>
            <h1>Make an admin</h1>
            <form onSubmit={handleMakeAdminSubmit}>
                <TextField sx={{ width: "55%", m: 3 }} onChange={handleOnChange} type="email" label="email" variant="filled" /><br />
                <Button type="submit" variant="outlined">Make Admin</Button>

            </form>
        </Box>
    );
};

export default MakeAdmin;