import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
export default function Form() {


    return (
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
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: '100%' }}>
          <OutlinedInput placeholder="Destinatário" />
        </FormControl>
      </Box>
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: '100%' }}>
          <OutlinedInput type='number' placeholder="Valor" />
        </FormControl>
      </Box>
      </Box>
    );
}