import React from "react";
import { urlFor } from "../lib/client";
import Image from "next/image";
import Link from "next/link";

const BlockNews1 = ({ news }) => {
  return (
    <div class="bg-white py-6">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <div class="flex-shrink max-w-full w-full overflow-hidden">
            <div class="w-full py-3">
              <h2 class="text-gray-800 text-2xl font-bold">
                <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                Uttarakhand
              </h2>
            </div>
            <div class="flex flex-row flex-wrap -mx-3">
              {news &&
                news.slice(0, 8).map((item) => (
                  <Link key={item._id} href={`/news/${item.slug.current ? item.slug.current : ""}`}>

                  
                  <div
                    key={item._id}
                    class="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
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
                          <a href="#">
                          {item?.heading1}
                          </a>
                        </h3>
                        <p class="hidden md:block text-gray-600 leading-tight mb-1">
                        {item?.para1?.slice(0,100)}...
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
        </div>
      </div>
    </div>
  );
};

export default BlockNews1;
