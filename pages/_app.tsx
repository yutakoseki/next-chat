import { createTheme, NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const theme = createTheme({
  type: "dark",
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
