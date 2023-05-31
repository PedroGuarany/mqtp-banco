import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableRowComponent from './TableRowComponent';

const dados = [
    { id: 1, nome: 'Elias', valor: '522,00', data: '20/03/2023' },
    { id: 2, nome: 'João', valor: '789,50', data: '15/04/2023' },
    { id: 3, nome: 'Maria', valor: '125,75', data: '10/05/2023' },
    { id: 4, nome: 'Ana', valor: '432,90', data: '03/06/2023' },
    { id: 5, nome: 'Pedro', valor: '237,20', data: '27/06/2023' },
    { id: 6, nome: 'Carla', valor: '632,15', data: '19/07/2023' },
    { id: 7, nome: 'Mariana', valor: '198,40', data: '12/08/2023' },
    { id: 8, nome: 'Lucas', valor: '421,80', data: '05/09/2023' },
    { id: 9, nome: 'Sara', valor: '317,60', data: '28/09/2023' },
    { id: 10, nome: 'Rafael', valor: '689,00', data: '21/10/2023' }
  ];

  
  export default function TableContent() {
      
    const [ tableData, setData ] = useState([]);

    useEffect(() => {
        setData(dados);
    }, []);

    return (
        <Box sx={{
            maxWidth: '750px',
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
                        <TableCell align="left">Valor</TableCell>
                        <TableCell align="left">Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {tableData.map(dadosDaTable => (
                                <TableRowComponent key={dadosDaTable.id} nome={dadosDaTable.nome} valor={dadosDaTable.valor} data={dadosDaTable.data} />
                            ))}
            </TableBody>
      </Table>
    </TableContainer>
        </Box>
    );
}