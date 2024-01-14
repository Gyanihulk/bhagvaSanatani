import "../styles/index.scss";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MobileMenu } from "../components/MobileMenu";
import { useEffect, useState } from "react";
import { client } from "../lib/client";
import { initGA, logPageView } from "../lib/ga";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
   
      initGA();
      logPageView();
  
  }, []);
  return (<>
  <Script id="adsbygoogle-init" 
  async strategy="afterInteractive"
  onError={ (e) => { console.error('Script failed to load', e) }}
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2326546523711729"
crossorigin="anonymous"
/>
  <SSRProvider>


      <GoogleAnalytics trackPageViews />
  

      <Component {...pageProps} />
  
      <Footer />
    </SSRProvider>
  </>
    
  );
}
export const getServerSideProps = async () => {
  const categoryQuery = `*[_type=="category"]`;
  const category = await client.fetch(categoryQuery);

  return {
    props: { category},
  };
};

export default MyApp;
