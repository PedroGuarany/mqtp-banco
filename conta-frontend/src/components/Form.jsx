import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#33cc94d9'
  }
}))

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Form() {

    let { userId } = useParams();

    const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;


    const handleClose = () => {
      setState({ ...state, open: false });
    };

    const verifacaoValor = (newState) => () => {
      var valorTransferencia = document.getElementById('valorTransferencia');
      var destinatario = document.getElementById('destinatario');
    
      if (valorTransferencia.value < 0) {
          setState({ open: true, ...newState});
          valorTransferencia.value = 0; 
      }

      axios.post(`http://localhost:3000/user/${userId}/transferencia`, {
        destinatario: destinatario.value,
        valor: Number(valorTransferencia.value)
      });
      handleClose();
    }
    
    return (
      <>

        <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            This is an error message!
          </Alert>
        </Snackbar>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        noValidate
        autoComplete="off"
      > 
      <Box noValidate autoComplete="off">
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px', padding: '6px 0' }}>Destinatário:</label>
          <TextField id="destinatario" placeholder="123.456.789-10" />
        </Box>
      </Box>
      <Box noValidate autoComplete="off">
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px', padding: '6px 0' }}>Valor:</label>
          <TextField type="number" inputProps={{ min: 0 }} id="valorTransferencia" placeholder="R$ 1000"/>
        </Box>
        <Box sx={{ display: 'flex', margin: '32px 0 0 0' }}>
                        <ColorButton variant="contained" onClick={ verifacaoValor({vertical: 'top', horizontal: 'right'}) } sx={{
                          width: '100%',
                          padding: '16.5px',
                          background: '#33CC94',
                          color: '#FFF',
                          textTransform: 'capitalize',
                        }}>Continuar</ColorButton>
                     </Box>
      </Box>
      </Box>

      </>
    );
}