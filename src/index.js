import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { AppProvider } from './core/contexts/AppContext';
import { App } from './App'; 
import ReactDOM from 'react-dom';
import './assets/css/global.css';

const pageTheme = createTheme({
    palette: {
        background: {
            default: '#f6fbff'
        },
		primary: {
			dark:'#035827',
			light:'#F2F8F6',
			main: '#11783C',
			lighter: '#f8f9fa',
		},
		secondary: {
			light: '#ffffff',
			main: '#165320',
			dark: '#f2f5fa',
		},
		error: {
			main: '#d32f2f',
		},
		warning: {
			main: '#DA4B1B',
		},
		info: {
			light: '#0a2d33',
			main: '#15616D',
		},
		success: {
			main: '#4caf50',
		},
    },
    typography: {
		button: {
			textTransform: 'none'
		},
		fontFamily: [
		  '-apple-system',
		  '"Poppins"',
		].join(','),
	},
});

ReactDOM.render(<ThemeProvider theme= { pageTheme }><CssBaseline /><AppProvider><App /></AppProvider></ThemeProvider>, document.getElementById('root'));