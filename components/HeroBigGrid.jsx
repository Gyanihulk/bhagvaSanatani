import React from 'react'
import { urlFor } from '../lib/client'
import Image from 'next/image'
import Link from 'next/link'

export const HeroBigGrid = ({news}) => {

  return (
    <div class="bg-white py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      {/* <!-- big grid 1 --> */}
      <div class="flex flex-row flex-wrap">
        {/* <!--Start left cover--> */}
        <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
          <div class="relative hover-img max-h-98 overflow-hidden">
          <Link href={`/news/${news[0].slug.current ? news[0].slug.current : ""}`}>
           
              <img class="max-w-full w-full mx-auto h-auto" src={urlFor(news[0].headerImg)} alt="Image description"/>
            </Link>
            <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
            <Link href={`/news/${news[0].slug?.current ? news[0].slug.current : ""}`}>
                <h2 class="text-3xl font-bold capitalize text-white mb-3">{news[0].heading1}</h2>
              </Link>
              <p class="text-gray-100 hidden sm:inline-block">{news[0].heading2?news[0].heading2:""}</p>
              <div class="pt-2">
                <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>{news[0].location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Start box news--> */}
        <div class="flex-shrink max-w-full w-full lg:w-1/2">
          <div class="box-one flex flex-row flex-wrap">
            {news.slice(1).map((article)=>(<article class="flex-shrink max-w-full w-full sm:w-1/2">
              <div class="relative hover-img max-h-48 overflow-hidden">
              <Link href={`/news/${article.slug?.current ? article.slug.current : ""}`}>
                  <img class="max-w-full w-full mx-auto h-auto" src={urlFor(article.headerImg)} alt="Image description"/>
                </Link>
                <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                <Link href={`/news/${article.slug?.current ? article.slug.current : ""}`}>
                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">{article.heading1}</h2>
                  </Link>
                  <div class="pt-1">
                    <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>{article.location}</div>
                  </div>
                </div>
              </div>
            </article>))}
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
