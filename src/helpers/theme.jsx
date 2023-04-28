import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light:'red',
      main: '#1890ff',
      dark: '#4676ff',
      contrastText: '#fff',
    },
   
    secondary: {
      light: '#ffff',
      main: '#0000',
      dark: '#9e0022',
      contrastText: '#ffff',
    },  
    info: {
      light: 'red',
      main: 'black',
      dark: 'red',
      contrastText: 'red',
    },
  },
})
export default theme
