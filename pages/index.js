import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Footer from "../components/Footer";
import MiddleNewsList from "../components/MiddleNewsList";
import NavBar from "../components/NavBar";
import NewsContainer from "../components/NewsContainer";
import { client } from "../lib/client";
import { GoogleAdsenseWidget } from "../lib/googleAdsense";
import Header from "../components/Header";
import useScript from "../lib/helper";
import { MobileMenu } from "../components/MobileMenu";
import { Advertisement } from "../components/Advertisement";
import { HeroBigGrid } from "../components/HeroBigGrid";
import BlockNews from "../components/BlockNews";
import { SliderNews } from "../components/SliderNews";
import BlockNews1 from "../components/BlockNews1";
import BlockNews2 from "../components/BlockNews2";
import BlockNews3 from "../components/BlockNews3";
import { useEffect, useState } from "react";

export default function Home({ category, news10, news ,newsTop5,haridwarNews,UttarakhandNews,sanatanNews,groupedNews,advertisement}) {
  useScript('/theme.js');

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Set showHeader to false if the screen width is less than 768 pixels
      setShowHeader(window.innerWidth >= 768);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(advertisement)
  return (
    <>
      {/* <Script
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
      /> */}
      {/* <NavBar category={category} header={header} />
      <NewsContainer newsArticles={newsTop5}/>
      <MiddleNewsList newsArticles={news}/>
      <GoogleAdsenseWidget /> */}
      <Head>
        <title>Bhagwa Santan Times</title>
    
      </Head>
      <Header category={category}/>
    <main className={showHeader?"pt-20":""}>

<HeroBigGrid news={newsTop5}/>
      
<BlockNews haridwarNews={haridwarNews} advertisement={advertisement}/>
<SliderNews news={news10}/>
<BlockNews1 news={UttarakhandNews}/>
<BlockNews2 news={news} advertisement={advertisement}/>
<BlockNews3 news={sanatanNews}/>
    </main>
   
    </>
  );
}

export const getServerSideProps = async () => {
  const categoryQuery = `*[_type=="category"]`;
  const category = await client.fetch(categoryQuery);

  const headerQuery = `*[_type=="header"]`;
  const header = await client.fetch(headerQuery);

  const newsQuery = `*[_type=="news"] | order(_createdAt desc)[6...16]`;
  const news = await client.fetch(newsQuery);
  const newsQueryTop5 = `*[_type=="news"] | order(_createdAt desc)[0...5] {...,Categories[]->{name}}`;
  const newsTop5 = await client.fetch(newsQueryTop5);

  const newsQueryHaridwar = `*[_type=="news" && "Haridwar" in Categories[]->name] | order(_createdAt desc)[0...6] {..., Categories[]->{name}}`;
  const haridwarNews=await client.fetch(newsQueryHaridwar);

  const newsQueryUttarakhand = `*[_type=="news" && "Uttarakhand " in Categories[]->name] | order(_createdAt desc) {..., Categories[]->{name}}`;
  const UttarakhandNews = await client.fetch(newsQueryUttarakhand);

const newsQuerySanatan = `*[_type=="news" && "Sanatan News" in Categories[]->name] | order(_createdAt desc) {..., Categories[]->{name}}`;
const sanatanNews = await client.fetch(newsQuerySanatan);
// const categoryGroupedNewsQuery = `
// {
//   "categories": *[_type == "category"]{
//     name,
//     "news": *[_type == "news" && references(^._id)] | order(_createdAt desc)
//   }
// }
// `;

// const groupedNews = await client.fetch(categoryGroupedNewsQuery);

const newsQuery10 = `*[_type=="news"] | order(_createdAt desc)[25...40]`;
const news10 = await client.fetch(newsQuery10);
const addUery = `*[_type=="advertisement"] `;
const advertisement = await client.fetch(addUery);
  return {
    props: { category, header, news ,newsTop5,haridwarNews,UttarakhandNews,sanatanNews,news10,advertisement},
  };
};
