import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import { ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ChakraProvider>

      <Component {...pageProps} />
      </ChakraProvider>
    </SSRProvider>
  );
}

export default MyApp;
