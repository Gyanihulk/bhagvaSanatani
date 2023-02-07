import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MiddleNewsList from '../components/MiddleNewsList';
import NavBar from '../components/NavBar';
import { client } from '../lib/client';
import { GoogleAdsenseWidget } from '../lib/googleAdsense';


export default function Home({category,header,news}) {

  return (
    <>
    <Script
      id="google-adsense"
      src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      data-ad-client="ca-pub-xxxxx"
      onLoad={() => {
        if (typeof window !== 'undefined') {
          window.onload = () => {
            (window.adsbygoogle =
              window.adsbygoogle || []).push({});
          };
        }
      }}
    />
   
    <Header category={category} />
    <NavBar category={category} header={header}/>
    <MiddleNewsList newsArticles={news}/>
    <GoogleAdsenseWidget/>
    <Footer/>
    </>
  )
}

export const getServerSideProps = async () => {
  const categoryQuery = `*[_type=="category"]`;
  const category = await client.fetch(categoryQuery);

  const headerQuery = `*[_type=="header"]`;
  const header = await client.fetch(headerQuery);

  const newsQuery = `*[_type=="news"]| order(launchAt asc)`;
  const news = await client.fetch(newsQuery);
  return {
    props: { category ,header,news},
  };
};