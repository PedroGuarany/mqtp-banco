import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Form from './Form';
import CloseIcon from '@mui/icons-material/Close';


import Typography from '@mui/material/Typography';

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



export default function MenuAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <Button onClick={ handleOpen } sx={{
                backgroundColor: '#6833FF',
                color: 'white',
                textTransform: 'capitalize',
                fontWeight: '400',
                fontSize: '14px',
              }}>Realizar transferência</Button>
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
                Nova tranferência!
              </Typography>
              <CloseIcon onClick={ handleClose } />
          </Box>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
                     <Form />
          </Box>
        </Box>
      </Modal>
            </Box>
        </Box>
      </AppBar>
    </Box>
  );
}