import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHomePage = () => {
    const dashboarBg = {
        background: 'url(https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11895566.jpg)',
        backgroundPosition: " center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        position: " relative",
    };
    const { user } = useAuth();
    return (
        <div style={{ ...dashboarBg, height: '800px' }}>

            <Typography variant="h3" style={{ fontWeight: 600, color: '#ECEEEF ' }}>Welcome {user?.displayName}</Typography>
        </div>
    );
};

export default DashboardHomePage;