
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';

export default function MenuAppBar() {

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: '#5329CB' }}>
                <Box sx={{
                display: 'flex',
                width: '1200px',
                height: '230px',
                justifyContent: 'space-between', margin: '0 auto'
                }}>
                        <Box sx={{
                        width: '100%',
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        }}>
                            <Typography variant='h6'>Logo</Typography>
                        <div>
                            <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            >
                            <AccountCircle />
                            </IconButton>
                        </div>
                    </Box>
                </Box>
             </AppBar>
        </Box>
    );
}