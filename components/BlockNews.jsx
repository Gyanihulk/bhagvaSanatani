import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/client";
import Image from "next/image";
import Link from "next/link";

const BlockNews = ({ haridwarNews, advertisement }) => {
  const [newstop5, setNews] = useState();
  useEffect(() => {
    (async () => {
      const newsQueryTop5 = `*[_type=="news"] | order(_createdAt desc)[0...5] {...,Categories[]->{name}}`;
      const newsTop5 = await client.fetch(newsQueryTop5);
      console.log(newsTop5);
      setNews(newsTop5);
    })();
  }, []);

  return (
    <div class="bg-white">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          {/* <!-- Left --> */}
          <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div class="w-full py-3">
              <h2 class="text-gray-800 text-2xl font-bold">
                <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                Haridwar
              </h2>
            </div>
            <div class="flex flex-row flex-wrap -mx-3">
              {haridwarNews &&
                haridwarNews.map((item) => (
                  <Link  key={item._id} href={`/news/${item.slug.current ? item.slug.current : ""}`}>

                  <div
                    
                    class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
                    >
                    <div class="flex flex-row sm:block hover-img">
                      <a href="">
                        {item.headerImg && (
                          <Image
                            width={650}
                            height={500}
                            class="max-w-full w-full mx-auto"
                            src={urlFor(item.headerImg)}
                            alt="alt title"
                            />
                            )}
                      </a>
                      <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 class="text-lg font-bold leading-tight mb-2">
                          <a href="#">{item?.heading1}</a>
                        </h3>
                        <p class="hidden md:block text-gray-600 leading-tight mb-1">
                          {item?.para1?.slice(0, 100)}...
                        </p>
                        <a class="text-gray-500" href="#">
                          <span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                          {item?.location}
                        </a>
                      </div>
                    </div>
                  </div>
                            </Link>
                ))}
            </div>
          </div>
          {/* <!-- right --> */}
          {advertisement[0] && (
            <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div class="w-full bg-gray-50 h-full">
              <div class="mb-6">
                <div class="p-4 bg-gray-100">
                  <h2 class="text-lg font-bold">Most Popular</h2>
                </div>
                <ul class="post-number">
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
                <div class="text-sm py-6 sticky">
                  <div class="w-full text-center">
                    
                    <a class="uppercase" href="#">
                      Advertisement
                    </a>
                    <a href="#">
                      {Array.isArray(advertisement) ? (
                        <Image
                          width={650}
                          height={500}
                          className="mx-auto"
                          src={urlFor(advertisement[0]?.image)}
                          alt="advertisement area"
                        />
                      ) : (
                        <Image
                          className="mx-auto"
                          src="src/img/ads/250.jpg"
                          alt="advertisement area"
                        />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockNews;
