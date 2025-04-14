


import React from 'react'

const Footer = () => {
  return (
    <footer  data-aos="fade-up" aos-delay= '300' className="relative mt-auto bg-gray-900 w-full dark:bg-neutral-950">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
           <path
      d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
      className="fill-gray-900 dark:fill-neutral-950"
    ></path>
          <path
      d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
      className="fill-gray-900 dark:fill-neutral-950"
    ></path>
          <path
      d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
      className="fill-gray-900 dark:fill-neutral-950"
    ></path>
        </svg>
      </div>
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Office</h4>
            <div className="mt-3 grid space-y-3">
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Germany —
785 15h Street, Office 478
Berlin, De 81566 </a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Services</a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">info@email.com</a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">+1 840 841 25 69</a></p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Product</h4>
            <div className="mt-3 grid space-y-3">
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Home </a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Services</a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">About us</a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Our team</a></p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Socials</h4>
            <div className="mt-3 grid space-y-3">
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Facebook</a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Twitter</a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Instagram</a> <span className="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">We're hiring</span></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Dribble</a></p>
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100">Stay up to date</h4>
            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">Subscribe</label>
                  <input type="text" id="hero-input" name="hero-input" className="py-2.5 sm:py-3 px-4 block w-full border-transparent rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email" />
                </div>
                <a className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Subscribe
                </a>
              </div>
              <label  data-aos="fade-up" className="flex items-center space-x-2 cursor-pointer p-4">
            <input type="checkbox" className="accent-blue-500 w-4 h-4" />
            <span className="text-sm text-gray-700">
              I agree with the <span className="underline">Privacy Policy</span>
            </span>
         </label>
            </form>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <p className="text-sm text-gray-400 dark:text-neutral-400">
            AxiomThemes © 2025. All Rights Reserved.
            </p>
          </div>

          <div className="flex gap-2">
            {/* Social Links */}
            {/* Add all those <a> tags here exactly as you had, but with className instead of class */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
