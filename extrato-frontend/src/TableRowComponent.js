import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

export default function TableRowComponent(props) {
    
    const { nome, valor, data } = props;


    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell align="left">{nome}</TableCell>
            <TableCell align='left'><Typography variant='p' sx={{
                        fontFamily: 'Roboto, sans-serif',
                        paddingRight: '2px',
                        color: 'black'
                        }}>
                            R$
                        </Typography>{valor}</TableCell>
            <TableCell align="left">{data}</TableCell>
        </TableRow>
    );
}