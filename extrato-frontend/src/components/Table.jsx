import * as React from 'react';
import { useParams } from 'react-router-dom';
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
import axios from 'axios';
import dayjs from 'dayjs';
import mqtt from 'precompiled-mqtt'


const client = mqtt.connect('ws://127.0.0.1:15675/ws', {
        username: 'user',
        password: 'password'
    })

export default function TableContent() {
    const [ tableData, setData ] = useState([]);
    let { userId } = useParams();

    useEffect(() => {
        let subscribeTo = userId ?? 'all';
        client.subscribe(subscribeTo)
        client.on('message', (topic, message) => {
            setData([...tableData, JSON.parse(message.toString())])
        })

        return () => {
            client.unsubscribe(subscribeTo)
        }
    }, [tableData, userId])
    
    useEffect(() => {
        axios.get('http://localhost:3000/user').then(users => {
            if (userId){
                setData(users.data.find(users => users.cpf === userId).transacoes)
            }
            else {
                let usersData = [];
                 users.data.forEach(user => {
                    usersData.push(...user.transacoes)
                 });
                setData(usersData)
            }
        });
    }, [userId])

    function getValueClass(destinatario){
        if(!userId)
            return '';

        return Number(destinatario) === Number(userId) ? 'transferenciaRecebida' : 'deposito'
    }
    
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
                                <TableCell align="center">Destinatário</TableCell>
                                <TableCell align="center">Data</TableCell>
                                <TableCell align="center">Valor</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((data, i) => (
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={i}>
                                    <TableCell align="center">{data.destinatario}</TableCell>
                                    <TableCell align="center">{dayjs(data.data).format('DD/MM/YYYY')}</TableCell>
                                    <TableCell align="center" className={getValueClass(data.destinatario)}>{new Intl.NumberFormat("pt-BR", {
                                                style: "currency",
                                                currency: "BRL"
                                            }).format(data.valor)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
    )
}