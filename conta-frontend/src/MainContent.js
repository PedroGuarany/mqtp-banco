import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Form from './Form';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MainContent() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '24px 0'

        }}>
            <Box sx={{
                width: '500px',
                height: '150px',
                backgroundColor: 'rgb(30, 136, 229)',
                padding: '18px',
                borderRadius: '12px'
            }}>
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
                        color: '#fff'
                        }}>
                            R$
                        </Typography>
                    </Box>
                    <Typography variant='p' sx={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '34px',
                        fontWeight: '500',
                        lineHeight: '45px',
                        color: '#fff'
                        }}>
                        500,00
                    </Typography>
                </Box>
                <Typography variant='p' sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '22px',
                    color: 'rgb(144, 202, 249)'
                }}>
                    Saldo disponível
                </Typography>
            </Box>
            <Box sx={{
                width: '536px',
                margin: '20px 0'
            }}>
                <Box sx={{
                    width: '250px'
                }}>
                    <Button variant="text" onClick={handleOpen} sx={{
                        width: '100%',
                        padding: '30px 25px',
                        borderRadius: '12px',
                        border: '1px solid #98a0a773',
                        backgroundColor: 'white',
                        color: 'black'
                    }}>
                    Realizar transferência</Button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{
            margin: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Nova tranferência
              </Typography>
              <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Typography variant='p' sx={{
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '45px',
                        padding: '8px'
                    }}>
                        Saldo:
                    </Typography>
                    <Box>
                        <Typography variant='p' sx={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '45px',
                        color: 'black'
                        }}>
                            R$
                        </Typography>
                    </Box>
                    <Typography variant='p' sx={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '45px',
                        color: 'black'
                        }}>
                        500,00
                    </Typography>
                </Box>
          </Box>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
                     <Form />
                     <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        margin: '32px 0 0 0'
                     }}>
                        <Button variant="text" onClick={handleClose} sx={{
                            color: 'black',
                            marginRight: '12px'
                        }}>Cancelar</Button>
                        <Button variant="text">Continuar</Button>
                     </Box>
          </Box>
        </Box>
      </Modal>
                </Box>
            </Box>
        </Box>
    );
}