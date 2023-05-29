import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableContent() {
    return (
        <Box sx={{
            maxWidth: '800px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '-127px auto',
            fontFamily: 'Roboto, sans-serif'
        }}>
            <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Nome</TableCell>
                        <TableCell colSpan={2} align="left">Valor</TableCell>
                        <TableCell align="left">Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="left">Elias</TableCell>
                        <TableCell sx={{ padding: '0 0 0 16px', width: '20px', color: '#34D3B5' }} align="left">R$</TableCell>
                        <TableCell sx={{ padding: '0', color: '#34D3B5'}} align="left">500,00</TableCell>
                        <TableCell align="left">20/05/2023</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="left">Elias</TableCell>
                        <TableCell sx={{ padding: '0 0 0 16px', width: '20px', color: '#F33C5B' }} align="left">R$</TableCell>
                        <TableCell sx={{ padding: '0', color: '#F33C5B'}} align="left">500,00</TableCell>
                        <TableCell align="left">20/05/2023</TableCell>
                        </TableRow>
                        
                </TableBody>
      </Table>
    </TableContainer>
        </Box>
    );
}