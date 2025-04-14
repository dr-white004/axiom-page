
// import React from 'react'
// import upper from '../assets/up1.webp'
// import lower from '../assets/h3l.webp'

// const Big = () => {
//   return (
//     <section className="w-full  mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#f0f8ff]">
      
//       {/* Image Container */}
//       <div className="relative w-full min-h-[520px] sm:min-h-[580px] md:min-h-[500px]">
//         {/* Bottom Image */}
//         <img 
//           src={lower} 
//           alt="Bottom Image"
//           className="w-96 h-auto rounded-lg shadow-lg absolute top-0 left-0 z-0"
//         />
//         {/* Top Image */}
//         <img 
//           src={upper}
//           alt="Top Image"
//           className="w-94 h-auto rounded-lg shadow-xl absolute top-30 left-30 z-10"
//         />
//       </div>

//       {/* Text */}
//       <div className="px-2">
//         <h2 className="text-4l font-bold mb-6 text-gray-900 leading-snug">
//         We help your business grow
//         </h2>

//         <p className="text-lg text-gray-700 mb-8 leading-relaxed">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
//            voluptas sit aspernatur aut odit aut fugit, sed quia.
//         </p>

//         {/* Section 1 */}
//         <div className="flex items-start gap-3 mb-5">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//           </svg>
//           <p className="text-gray-800 text-base font-medium">
//             Custom-built strategies tailored to your brands identity.
//           </p>
//         </div>

//         {/* Section 2 */}
//         <div className="flex items-start gap-3">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//           </svg>
//           <p className="text-gray-800 text-base font-medium">
//             Built with performance, scalability, and beauty in mind.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Big;


import React from 'react'
import upper from '../assets/up1.webp'
import lower from '../assets/h3l.webp'

const Big = () => {
  return (
    <section className="w-full mx-auto px-6 py-20 bg-[#f0f8ff] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* Image Container */}
        <div className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] overflow-hidden">
          {/* Bottom Image */}
          <img 
            src={lower} 
            alt="Bottom Image"
            className="w-[85%] sm:w-[70%] md:w-[60%] rounded-lg shadow-lg absolute top-0 left-0 z-0"
          />
          {/* Top Image */}
          <img 
            src={upper}
            alt="Top Image"
            className="w-[75%] sm:w-[60%] md:w-[50%] rounded-lg shadow-xl absolute top-1/3 left-1/3 transform -translate-x-1/4 -translate-y-1/4 z-10 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="text-left px-2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 leading-snug">
            We help your business grow
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
          </p>

          {/* Section 1 */}
          <div className="flex items-start gap-3 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-gray-800 text-base font-medium">
              Custom-built strategies tailored to your brand’s identity.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-gray-800 text-base font-medium">
              Built with performance, scalability, and beauty in mind.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Big;
