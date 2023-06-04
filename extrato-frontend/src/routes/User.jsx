import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const dados = [
    { id: 1, nome: 'Elias', tipo: 'transferenciaRecebida', valor: '522.00', data: '20/03/2023' },
    { id: 2, nome: 'João', tipo: 'deposito', valor: '789.50', data: '15/04/2023' },
    { id: 3, nome: 'Maria', tipo: 'deposito', valor: '125.75', data: '10/05/2023' },
    { id: 4, nome: 'Ana', tipo: 'transferenciaRecebida', valor: '432.90', data: '03/06/2023' },
    { id: 5, nome: 'Pedro', tipo: 'deposito', valor: '237.20', data: '27/06/2023' },
    { id: 6, nome: 'Carla', tipo: 'deposito', valor: '632.15', data: '19/07/2023' },
    { id: 7, nome: 'Mariana', tipo: 'deposito', valor: '198.40', data: '12/08/2023' },
    { id: 8, nome: 'Lucas', tipo: 'deposito', valor: '421.80', data: '05/09/2023' },
    { id: 9, nome: 'Sara', tipo: 'transferenciaRecebida', valor: '317.60', data: '28/09/2023' },
    { id: 10, nome: 'Rafael', tipo: 'transferenciaRecebida', valor: '689.00', data: '21/10/2023' }
  ];

export default function User() {
    const [ tableData, setData ] = useState([]);

    useEffect(() => {
        setData(dados);
    }, []);

    let { userId } = useParams();

    // eslint-disable-next-line eqeqeq
    const userDados = tableData.filter(dadosDaTable => (dadosDaTable.id == userId));

    console.log(userId);

    return (
        <Box sx={{
            maxWidth: '750px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '-127px auto',
            fontFamily: 'Roboto, sans-serif',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
        }}>
            <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Data</TableCell>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Valor</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userDados.map(dadosDoUsuario => (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={dadosDoUsuario.id}>
                                <TableCell align="center">{dadosDoUsuario.data}</TableCell>
                                <TableCell align="center">{dadosDoUsuario.nome}</TableCell>
                                <TableCell align="center" className={dadosDoUsuario.tipo}>{new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        }).format(dadosDoUsuario.valor)}</TableCell>
                                <TableCell align="right"><Button variant="text"><Link style={{ textDecoration: 'none'}} to={"/"}>voltar</Link></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}