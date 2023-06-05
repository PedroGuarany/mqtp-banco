import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const dados = [
    { id: 1, nome: 'Elias', saldo: '522.00', data: '20/03/2023' },
    { id: 2, nome: 'João', saldo: '789.50', data: '15/04/2023' },
    { id: 3, nome: 'Maria', saldo: '125.75', data: '10/05/2023' },
    { id: 4, nome: 'Ana', saldo: '432.90', data: '03/06/2023' },
    { id: 5, nome: 'Pedro', saldo: '237.20', data: '27/06/2023' },
    { id: 6, nome: 'Carla', saldo: '632.15', data: '19/07/2023' },
    { id: 7, nome: 'Mariana', saldo: '198.40', data: '12/08/2023' },
    { id: 8, nome: 'Lucas', saldo: '421.80', data: '05/09/2023' },
    { id: 9, nome: 'Sara', saldo: '317.60', data: '28/09/2023' },
    { id: 10, nome: 'Rafael', saldo: '689.00', data: '21/10/2023' }
  ];


export default function MainContent() {
    const [ tableData, setData ] = useState([]);

    useEffect(() => {
        setData(dados);
    }, []);

    let { userId } = useParams();

    // eslint-disable-next-line eqeqeq
    const userDados = tableData.filter(dadosDaTable => (dadosDaTable.id == userId));


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
                borderRadius: '4px',
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
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
                    
                        {userDados.map(dadosDoUsuario => (
                            <Typography variant='p' sx={{
                                fontFamily: 'Roboto, sans-serif',
                                fontSize: '34px',
                                fontWeight: '500',
                                lineHeight: '45px',
                                color: 'black'
                                }} key={dadosDoUsuario.id}>
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    }).format(dadosDoUsuario.saldo)}
                                </Typography>
                        ))}
                    
                </Box>
            </Box>
        </Box>
    );
}