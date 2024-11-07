import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Analytics } from '@vercel/analytics/react';
// import 'styles/globals.css'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#eee'
        },
        customGrey: {
            main: '#333',
            light: '#333',
            dark: '#333',
            contrastText: '#fff'
        }
    }
});

function MyApp({ Component, pageProps }) {
    return (

        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <main>
                <Component {...pageProps} />
            </main>
            <Analytics />
        </ThemeProvider>
);
}

export default MyApp;
