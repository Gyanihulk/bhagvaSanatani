import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link'

const BlockNews2 = ({news,advertisement}) => {
  return (
    <div class="bg-gray-50 py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        {/* <!-- post --> */}
        <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
          <div class="w-full py-3">
            <h2 class="text-gray-800 text-2xl font-bold">
              <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Latest news
            </h2>
          </div>
          <div class="flex flex-row flex-wrap -mx-3">
          
            <div class="flex-shrink max-w-full w-full px-3 pb-5">
              <div class="relative hover-img max-h-98 overflow-hidden">
                {/* <!--thumbnail--> */}
                <a href="#">
                <Image   width={1000}
                            height={500} class="max-w-full w-full mx-auto h-auto" src={urlFor(news[0].headerImg)} alt="Image description"/>
                </a>
                <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  {/* <!--title--> */}
                  <a href="#">
                    <h2 class="text-3xl font-bold capitalize text-white mb-3">{news[0]?.heading1}</h2>
                  </a>
                  <p class="text-gray-100 hidden sm:inline-block">{news[0]?.para1?.slice(0,100)}...</p>                                                  
                  {/* <!-- author and date --> */}
                  <div class="pt-2">
                    <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>{news[0]?.location}</div>
                  </div>
                </div>
              </div>
            </div>
{news && news.slice(1,10).map((item)=>(
 <Link key={item._id} href={`/news/${item.slug.current ? item.slug.current : ""}`}>



            <div key={item._id} class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
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
                    <a href="#">  {item?.heading1}</a>
                  </h3>
                  <p class="hidden md:block text-gray-600 leading-tight mb-1">{item?.para1?.slice(0,100)}...</p>
                  <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>{item?.location}</a>
                </div>
              </div>
            </div>
            </Link>
           ))}
          </div>
        </div>
        {/* <!-- sidebar --> */}
        <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-first">
          <div class="w-full bg-white">
            <div class="mb-6">
              <div class="p-4 bg-gray-100">
                <h2 class="text-lg font-bold">Most Popular</h2>
              </div>
              <ul class="post-number">
                <li class="border-b border-gray-100 hover:bg-gray-50">
                  <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Why the world would end without political polls</a>
                </li>
                <li class="border-b border-gray-100 hover:bg-gray-50">
                  <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Meet The Man Who Designed The Ducati Monster</a>
                </li>
                <li class="border-b border-gray-100 hover:bg-gray-50">
                  <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">2020 Audi R8 Spyder spy shots release</a>
                </li>
                <li class="border-b border-gray-100 hover:bg-gray-50">
                  <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Lamborghini makes Huracán GT3 racer faster for 2019</a>
                </li>
                <li class="border-b border-gray-100 hover:bg-gray-50">
                  <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">ZF plans $14 billion autonomous vehicle push, concept van</a>
                </li>
              </ul>
            </div>
          </div>

           <div class="text-sm py-6 sticky">
            <div class="w-full text-center">
              <a class="uppercase" href="#">Advertisement</a>
              <a href="#">
              {
Array.isArray(advertisement) && advertisement.length > 1 ? (
    <Image
      width={650}
      height={500}
      className="mx-auto"
      src={urlFor(advertisement[1]?.image)}
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

export default BlockNews2