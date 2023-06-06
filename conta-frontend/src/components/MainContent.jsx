import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import mqtt from 'precompiled-mqtt'

const client = mqtt.connect('ws://127.0.0.1:15675/ws', {
        username: 'user',
        password: 'password'
    })

export default function MainContent() {
    const [user, setUser] = useState({});
    let { userId } = useParams();

    useEffect(() => {
        if (!userId)
            return;
        client.subscribe(userId)
        client.on('message', (topic, message) => {
            if(!user)
                return;
            let data = JSON.parse(message.toString())
            if (data.destinatario === userId)
                user.saldo += data.valor
            else
                user.saldo -= data.valor

            setUser({...user})
        })

        return () => {
            client.unsubscribe(userId)
        }
    }, [user, userId])

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}`).then(response => {
            setUser(response.data)
        });
    }, [userId])
    
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
                    Olá, {user.nome}
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
                        {user.saldo}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}