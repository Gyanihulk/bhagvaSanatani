import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/client'
import Link from 'next/link'

const BlockNews3 = ({news,advertisement}) => {
  const [newstop5, setNews] = useState();
  useEffect(() => {
    (async () => {
      const newsQueryTop5 = `*[_type=="news"] | order(_createdAt desc)[15...20] {...,Categories[]->{name}}`;
      const newsTop5 = await client.fetch(newsQueryTop5);
      console.log(newsTop5);
      setNews(newsTop5);
    })();
  }, []);
  return (
    <div className="bg-gray-50 py-6">
    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div className="flex flex-row flex-wrap">
        {/* <!-- Left --> */}
        <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
          <div className="w-full py-3">
            <h2 className="text-gray-800 text-2xl font-bold">
              <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Sanatan News
            </h2>
          </div>
          <div className="flex flex-row flex-wrap -mx-3">
            <div className="flex-shrink max-w-full w-full px-3 pb-5">
              <div className="relative hover-img max-h-98 overflow-hidden">
                {/* <!--thumbnail--> */}
                <a href="#">
                  <Image   width={1000}
                            height={500} className="max-w-full w-full mx-auto h-auto" src={urlFor(news[0].headerImg)} alt="Image description"/>
                </a>
                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  {/* <!--title--> */}
                  <a href="#">
                    <h2 className="text-3xl font-bold capitalize text-white mb-3"> {news[0]?.heading1}</h2>
                  </a>
                  <p className="text-gray-100 hidden sm:inline-block">{news[0]?.para1?.slice(0,100)}...</p>                                                  
                  {/* <!-- author and date --> */}
                  <div className="pt-2">
                    <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>{news[0]?.location}</div>
                  </div>
                </div>
              </div>
            </div>
{news && news.slice(1,7).map((item)=>(
   <Link key={item._id} href={`/news/${item.slug.current ? item.slug.current : ""}`}>


  <div key={item._id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
  <div className="flex flex-row sm:block hover-img">
    <a href="">
    {item.headerImg && (
                          <Image
                            width={650}
                            height={500}
                            className="max-w-full w-full mx-auto"
                            src={urlFor(item.headerImg)}
                            alt="alt title"
                          />
                        )}
   
    </a>
    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
      <h3 className="text-lg font-bold leading-tight mb-2">
        <a href="#">          {item?.heading1}</a>
      </h3>
      <p className="hidden md:block text-gray-600 leading-tight mb-1"> {item?.para1?.slice(0,100)}...</p>
      <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span> {item?.location}</a>
    </div>
  </div>
</div>
</Link>
))}
          
        
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
          <div className="w-full bg-white">
            <div className="mb-6">
              <div className="p-4 bg-gray-100">
                <h2 className="text-lg font-bold">Most Popular</h2>
              </div>
              <ul className="post-number">
              {newstop5 && newstop5?.map((news)=>(<li  key={news.slug.current} class="border-b border-gray-100 hover:bg-gray-50">
                    <a
                      class="text-lg font-bold px-6 py-3 flex flex-row items-center"
                      href={`/news/${news.slug.current ? news.slug.current : ""}`}
                    >
                      {news?.heading1 && news.heading1.slice(0, 44)}
                
                    </a>
                  </li>))
                    
                  }
              </ul>
            </div>
          </div>

          <div className="text-sm py-6 sticky">
            <div className="w-full text-center">
              <a className="uppercase" href="#">Advertisement</a>
              <a href="#">
              {
Array.isArray(advertisement) && advertisement.length > 2 ? (
    <Image
      width={650}
      height={500}
      className="mx-auto"
      src={urlFor(advertisement[2]?.image)}
      alt="advertisement area"
    />
  ): <img className="mx-auto" src="src/img/ads/250.jpg" alt="advertisement area"/>
}
               
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlockNews3