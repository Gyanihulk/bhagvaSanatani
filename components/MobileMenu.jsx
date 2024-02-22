import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
const newsHeadings = [
  "News Heading 1",
  "News Heading 2",
  "News Heading 3",
  // Add more news headings here
];

const tickerSpeed = 4; 
export const MobileMenu = ({ category,newsheading }) => {
  const tickerVariants = {
    animate: {
      x: [0, -100 * newsHeadings.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: tickerSpeed * newsHeadings.length,
          ease: "linear",
        },
      },
    },
  };
  return (<>
    <div className="relative hover:bg-gray-800 block lg:hidden">
      <button type="button" className="menu-mobile block py-3 px-6 border-b-2 border-transparent">
        <span className="sr-only">Mobile menu</span>
        <svg className="inline-block h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg> Menu
      </button>
    </div>
    {/* <div className="relative bg-white block lg:hidden">
    <motion.div
        className="flex"
        variants={tickerVariants}
        animate="animate"
      >
        {newsheading.map((heading, index) => (
          <div class="message">
            {heading}
          </div>
        ))}
      </motion.div>
    </div> */}
    {/* <div className="relative bg-white block lg:hidden mt-10 mb-3 w-full">
    <div class="marquee d-flex flex-row">
    {newsheading.map((heading, index) => (
      <div class="message">  {heading}.</div>))}
      
    </div>
    </div> */}
  

    <div class="side-area fixed w-full h-full inset-0 z-50">

      {/* <!-- bg open --> */}
      <div class="back-menu fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0">
        <div class="cursor-pointer text-white absolute right-64 p-2">
          <svg class="bi bi-x" width="2rem" height="2rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"></path>
            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>

      {/* <!-- Mobile navbar --> */}
      <nav id="mobile-nav" class="side-menu flex flex-col right-0 w-64 fixed top-0 bg-white dark:bg-gray-800 h-full overflow-auto z-40">
        <div class="mb-auto">
          {/* <!--navigation--> */}
          <nav class="relative flex flex-wrap">
            <div class="text-center py-4 w-full font-bold border-b border-gray-100">Bhagwa</div>
            <ul id="side-menu" class="w-full float-none flex flex-col">
              <li class="relative">
                <a href="#" class="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">Home</a>
              </li>

              {/* <!-- dropdown with submenu--> */}
              <li class="dropdown relative">
                {category.map((cat) => (
                  <a class="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50" href="javascript:;">
                    {cat.name}
                  </a>
                ))}


                {/* <!-- dropdown menu --> */}
                <ul class="dropdown-menu block rounded rounded-t-none top-full z-50 ml-4 py-0.5 text-left bg-white dark:bg-gray-800 mb-4" style={{ "minWidth": "12rem" }}>
                  {/* <!--submenu--> */}
                  <li class="subdropdown relative">
                    <a class="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50" href="javascript:;">
                      Dropdown item
                    </a>

                    {/* <!--dropdown submenu--> */}
                    <ul class="dropdown-menu block rounded rounded-t-none top-full z-50 ml-4 py-0.5 text-left bg-white dark:bg-gray-800" style={{ "minWidth": "12rem" }}>
                      <li><a class="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50" href="#">Dropdown sub item</a></li>
                      <li><a class="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50" href="#">Dropdown sub item</a></li>
                      <li><a class="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50" href="#">Dropdown sub item</a></li>
                      <li><a class="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50" href="#">Dropdown sub item</a></li>
                    </ul>
                  </li>
                  {/* <!--end submenu--/> */}
                  <li class="relative"><a class="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50" href="#">Dropdown item</a></li>
                  <li class="relative"><a class="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50" href="#">Dropdown item</a></li>
                </ul>
              </li>


            </ul>
          </nav>
        </div>
        {/* <!-- copyright --> */}
        <div class="py-4 px-6 text-sm mt-6 text-center">
          <p>Copyright <a href="#">bhagwasanatantimes</a> - All right reserved</p>
        </div>
      </nav>
    </div>
  </>
  )
}
