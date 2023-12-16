import React, { useEffect } from 'react'
import useSticky from '../lib/useSticky';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
export const SliderNews = () => {
    useSticky();
    useEffect(() => {
        // Initialize Splide here
        new Splide('.splide', {
          // options
        }).mount();
      }, []);
      useEffect(() => {
        // Ensure Splide is only initialized on the client-side
        if (typeof window !== 'undefined') {
          // Initialize the post slider
          const postsliderClass = document.querySelector("#post-carousel");
          if (postsliderClass) {
            new Splide(postsliderClass, {
              rewind: true,
              pagination: true,
              arrows: true,
              type: 'loop',
              drag: 'free',
              perPage: 3,
              perMove: 1,
              gap: 24,
              breakpoints: {
                768: {
                  perPage: 2,
                },
                500: {
                  perPage: 1,
                },
              },
            }).mount();
          }
    
          // Initialize the video slider and thumbnail navigation
          const postvideoClass = document.querySelector("#main-carousel");
          if (postvideoClass) {
            const postvideo = new Splide(postvideoClass, {
              type: 'fade',
              rewind: true,
              pagination: false,
              arrows: false,
            });
    
            const thumbnails = new Splide('#thumbnail-carousel', {
              fixedWidth: 150,
              fixedHeight: 120,
              isNavigation: true,
              gap: 24,
              rewind: true,
              pagination: false,
              cover: true,
              breakpoints: {
                600: {
                  fixedWidth: 66,
                  fixedHeight: 40,
                },
              },
            });
    
            postvideo.sync(thumbnails);
            postvideo.mount(window.splide.Extensions);
            thumbnails.mount();
          }
        }
      }, []);
  return (
    <div class="relative bg-gray-50"  style={{
    backgroundImage: `url("src/img/bg.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed'
  }}>
    <div class="bg-black bg-opacity-70">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <div class="flex-shrink max-w-full w-full py-12 overflow-hidden">
            <div class="w-full py-3">
              <h2 class="text-white text-2xl font-bold text-shadow-black">
                <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>American
              </h2>
            </div>
            <div id="post-carousel" class="splide post-carousel">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <div class="w-full pb-3">
                      <div class="hover-img bg-white">
                        <a href="">
                          <img class="max-w-full w-full mx-auto" src="src/img/dummy/img14.jpg" alt="alt title"/>
                        </a>
                        <div class="py-3 px-6">
                          <h3 class="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                          <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="w-full pb-3">
                      <div class="hover-img bg-white">
                        <a href="">
                          <img class="max-w-full w-full mx-auto" src="src/img/dummy/img15.jpg" alt="alt title"/>
                        </a>
                        <div class="py-3 px-6">
                          <h3 class="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                          <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="w-full pb-3">
                      <div class="hover-img bg-white">
                        <a href="">
                          <img class="max-w-full w-full mx-auto" src="src/img/dummy/img16.jpg" alt="alt title"/>
                        </a>
                        <div class="py-3 px-6">
                          <h3 class="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                          <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="w-full pb-3">
                      <div class="hover-img bg-white">
                        <a href="">
                          <img class="max-w-full w-full mx-auto" src="src/img/dummy/img17.jpg" alt="alt title"/>
                        </a>
                        <div class="py-3 px-6">
                          <h3 class="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                          <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="w-full pb-3">
                      <div class="hover-img bg-white">
                        <a href="">
                          <img class="max-w-full w-full mx-auto" src="src/img/dummy/img18.jpg" alt="alt title"/>
                        </a>
                        <div class="py-3 px-6">
                          <h3 class="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                          <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="w-full pb-3">
                      <div class="hover-img bg-white">
                        <a href="">
                          <img class="max-w-full w-full mx-auto" src="src/img/dummy/img1.jpg" alt="alt title"/>
                        </a>
                        <div class="py-3 px-6">
                          <h3 class="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                          <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
