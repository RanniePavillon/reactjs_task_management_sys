import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CstmTextField = styled(TextField)({
    "& .MuiFormLabel-root.Mui-error": {
        color: "#F3284B !important"
    },
    "& .MuiFormHelperText-root.Mui-error": {
        color: "#F3284B !important"
    },
    '& input:valid + fieldset': {
        borderRadius: '8px !important',
    },
    '& .Mui-disabled': {
        borderRadius: '8px !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '8px !important',
    }, 
    '.css-1ewifw0-MuiButtonBase-root-MuiChip-root':{
        backgroundColor:'#ECF4EF',
        borderRadius: '8px'
    }
}); 