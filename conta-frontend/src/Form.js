import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Form() {


    return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'space-between'
        }}
        noValidate
        autoComplete="off"
      > 
      <TextField id="standard-basic" label="Destinatário" variant="standard" />
      <TextField type="number" id="standard-basic" label="Valor" variant="standard" />
      </Box>
    );
}