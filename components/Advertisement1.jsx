import Image from 'next/image'
import React from 'react'

export const Advertisement1 = ({addInfo}) => {
  console.log(addInfo)
  return (
    <div class="bg-gray-50 py-4 hidden">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="mx-auto table text-center text-sm">
          <a class="uppercase" href="#">Advertisement</a>
          <a href="#">
          <Image 
              layout='fill' 
              src="/src/img/ads/ads_728.jpg" 
              alt="advertisement area" 
              objectFit="cover" 
            />
          </a>
        </div>
      </div>
    </div>
  )
}
