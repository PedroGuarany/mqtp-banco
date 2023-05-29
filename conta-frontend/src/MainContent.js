import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function MainContent() {
   

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '-127px 0'

        }}>
            <Box sx={{
                width: '500px',
                height: '150px',
                backgroundColor: '#FFFFFF',
                padding: '18px',
                border: '1px solid #8f9aa533',
                borderRadius: '4px'
            }}>
                <Typography variant='p' sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '22px',
                    color: 'black'
                }}>
                    Saldo disponível
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '14px 8px 6px 0'
                }}>
                    <Box>
                        <Typography variant='p' sx={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '34px',
                        fontWeight: '500',
                        lineHeight: '45px',
                        color: 'black'
                        }}>
                            R$
                        </Typography>
                    </Box>
                    <Typography variant='p' sx={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '34px',
                        fontWeight: '500',
                        lineHeight: '45px',
                        color: 'black'
                        }}>
                        500,00
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}