import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Footer from "../components/Footer";
import MiddleNewsList from "../components/MiddleNewsList";
import NavBar from "../components/NavBar";
import NewsContainer from "../components/NewsContainer";
import { client } from "../lib/client";
import { GoogleAdsenseWidget } from "../lib/googleAdsense";

export default function Home({ category, header, news ,newsTop5}) {
  return (
    <>
      <Script
        id="google-adsense"
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        data-ad-client="ca-pub-2326546523711729"
        onLoad={() => {
          if (typeof window !== "undefined") {
            window.onload = () => {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
            };
          }
        }}
      />
      <NavBar category={category} header={header} />
      <NewsContainer newsArticles={newsTop5}/>
      <MiddleNewsList newsArticles={news}/>
      <GoogleAdsenseWidget />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const categoryQuery = `*[_type=="category"]`;
  const category = await client.fetch(categoryQuery);

  const headerQuery = `*[_type=="header"]`;
  const header = await client.fetch(headerQuery);

  const newsQuery = `*[_type=="news"] | order(_createdAt desc)[6...15]`;
  const news = await client.fetch(newsQuery);
  const newsQueryTop5 = `*[_type=="news"] | order(_createdAt desc)[0...5] {...,Categories[]->{name}}`;
  const newsTop5 = await client.fetch(newsQueryTop5);
  return {
    props: { category, header, news ,newsTop5},
  };
};
