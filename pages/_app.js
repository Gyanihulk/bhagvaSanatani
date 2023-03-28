import "../styles/index.scss";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return (<>
  <Script id="adsbygoogle-init" 
  async strategy="afterInteractive"
  onError={ (e) => { console.error('Script failed to load', e) }}
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2326546523711729"
crossorigin="anonymous"
/>
  <SSRProvider>
      <ChakraProvider>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      </ChakraProvider>
    </SSRProvider>
  </>
    
  );
}

export default MyApp;
