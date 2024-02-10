import React, { useEffect, useState } from 'react'

export const Advertisement = () => {
  const[advertisement,setAds]=useState()
  useEffect(() => {
    (async () => {
      const addUery = `*[_type=="advertisement"] `;
      const advertisement = await client.fetch(addUery);

      setAds(advertisement);
    })();
  }, []);
  return (
    <div class="bg-gray-50 py-4 hidden">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div class="mx-auto table text-center text-sm">
        <a class="uppercase" href="#">Advertisement</a>
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
  )
}
