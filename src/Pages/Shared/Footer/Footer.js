import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Footer = () => {
    return (
        <div>

            <Box sx={{ backgroundColor: "#ECECEC" }}>
                <Grid container spacing={2} sx={{ my: 4, justifyContent: 'space-around', alignItems: 'center', height: '400px', }}>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                        <Typography variant="h4" gutterBottom component="div">
                            Wrish
                        </Typography>
                        <Box sx={{ display: 'inline-flex', }}>
                            <Typography variant="caption" display="block" gutterBottom>
                                privocy
                            </Typography>

                            <Typography sx={{ ml: 4 }} variant="caption" display="block" gutterBottom>
                                policy
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2}  >
                        <Box sx={{ width: '100%', display: 'inline-flex', justifyContent: 'center' }} >
                            <FacebookIcon sx={{ mr: 1, color: '#385898', fontSize: '40px' }} />
                            <TwitterIcon sx={{ mr: 1, color: '#1DA1F2', fontSize: '40px' }} />
                            <InstagramIcon sx={{ mr: 1, color: '#C82E2E', fontSize: '40px' }} />
                            <LinkedInIcon sx={{ mr: 1, color: '#37AAD9', fontSize: '40px' }} />
                            <GoogleIcon sx={{ mr: 1, color: '#F7D828', fontSize: '40px' }} />

                            <TelegramIcon sx={{ mr: 1, color: '#316FC9', fontSize: '40px' }} />
                        </Box>
                        <Box sx={{ width: '100%', display: 'inline-flex', justifyContent: 'center' }}>
                            <Typography variant="caption" display="block" gutterBottom>
                                Home
                            </Typography>

                            <Typography sx={{ ml: 4 }} variant="caption" display="block" gutterBottom>
                                Products
                            </Typography>
                            <Typography sx={{ ml: 4 }} variant="caption" display="block" gutterBottom>
                                About
                            </Typography>
                            <Typography sx={{ ml: 4 }} variant="caption" display="block" gutterBottom>
                                Blog
                            </Typography>
                            <Typography sx={{ ml: 4 }} variant="caption" display="block" gutterBottom>
                                Contact
                            </Typography>

                        </Box>

                    </Grid>

                </Grid>
                <hr />
                <p style={{ padding: '10px' }}><small> &#169;Copyright 2021 Wrish</small></p>
            </Box>
        </div>
    );
};

export default Footer;