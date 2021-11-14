

import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [allPurchase, setProductPurchase] = useState([]);
    const [isChange, setIsChange] = useState(null)



    useEffect(() => {
        fetch("https://afternoon-forest-44332.herokuapp.com/allPurchase")
            .then(res => res.json())
            .then(result => setProductPurchase(result))
    }, [allPurchase, isChange])
    const handelDeleteProduct = (id) => {
        console.log('alm', id);
        console.log('delete oreder', id);
        fetch(`https://afternoon-forest-44332.herokuapp.com/manageProductCancel/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },

        })
            .then(res => res.json())
            .then(result => {
                if (result?.deletedCount > 0) {
                    setIsChange(true);
                    alert('Are Your Cancel This Order???')
                }
                else {
                    setIsChange(false);
                }



            })

    }

    const handelApprovedProduct = (id) => {
        console.log('approved', id);
        fetch(`https://afternoon-forest-44332.herokuapp.com/approvedProduct/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    setIsChange(true);
                    alert('Shipped the Product Successfully')
                }
                else {
                    setIsChange(false);
                }

                console.log(result)
            });

    }
    return (
        <div>
            <h1>Manage all  orders </h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Order Date</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status Bar</TableCell>
                            <TableCell align="right">Approved</TableCell>
                            <TableCell align="right">Cancel Order</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allPurchase.map((row, index) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{index}  {row?.email}
                                </TableCell>
                                <TableCell align="right">{row?.time}</TableCell>
                                <TableCell align="right">{row?.address}</TableCell>
                                <TableCell align="right">{row?.productTitle}</TableCell>
                                <TableCell align="right">{row?.price}</TableCell>
                                <TableCell align="right">{row?.status}</TableCell>
                                <TableCell align="right"><Button onClick={() => handelApprovedProduct(row?._id)} variant="outlined">Approved</Button></TableCell>
                                <TableCell align="right"><Button onClick={() => handelDeleteProduct(row?._id)} variant="outlined">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default ManageAllOrders;