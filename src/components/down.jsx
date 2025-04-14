// import React from "react";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.webp";



// const logos = [img1, img2, img1, img2, img1, img2];

// const GridSplitImages = () => {
//   return (
//     <section className="w-full py-4 px-4 ">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
//         {/* Left Text Side */}
//         <div className="w-full md:w-1/2 space-y-6 text-gray-800">
//           <h2 className="text-4xl font-bold">Engaging Title Goes Here</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//             dapibus justo vel sapien luctus, eget fermentum libero laoreet.
//           </p>
//           <p>
//             Proin tincidunt, mauris a tincidunt commodo, turpis purus maximus
//             justo, sed fringilla eros nulla a mi.
//           </p>
//         </div>

//         {/* Right Image Stack + Plus Icon */}
//         <div className="w-full md:w-1/2 relative flex justify-end items-center h-[450px]">
//           {/* Bottom Image */}
//           <img
//             src={img2}
//             alt="Bottom Layer"
//             className="w-[350px] h-[350px] object-cover rounded-xl shadow-xl"
//           />

//           {/* Plus Sign UNDER top image */}
//           <div className="absolute top-12 left-12 text-5xl font-bold text-blue-500 animate-bounce z-0">
//             +
//           </div>

//           {/* Top Image - slightly tilted left */}
//           <img
//             src={img1}
//             alt="Top Layer"
//             className="w-[290px] h-[300px] object-cover rounded-xl shadow-2xl absolute right-40 top-40 z-10"
//           />
//         </div>
//       </div>

//       <section className="w-full mt-8 py-16 px-6 ">
//       <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
//         {logos.map((logo, index) => (
//           <img
//             key={index}
//             src={logo}
//             alt={`Logo ${index + 1}`}
//             className="w-30 h-[auto] object-contain grayscale hover:grayscale-0 transition duration-300"
//           />
//         ))}
//       </div>
//     </section>

//     </section>
//   );
// };

// export default GridSplitImages;


import React from "react";
import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo2.webp";
import img1 from "../assets/h32l.webp";
import img2 from "../assets/h32r.webp";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const GridSplitImages = () => {
  return (
    <section  data-aos="fade-up" className="w-full py-4 px-4 overflow-hidden ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Left Text Side */}
        <div className="w-full md:w-1/2 space-y-6 text-gray-800">
          <h2 className="text-4xl font-bold">Engaging Title Goes Here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dapibus justo vel sapien luctus, eget fermentum libero laoreet.
          </p>
          <p>
            Proin tincidunt, mauris a tincidunt commodo, turpis purus maximus
            justo, sed fringilla eros nulla a mi.
          </p>
        </div>

        {/* Right Image Stack */}
        <div className="w-full md:w-1/2 relative h-[28rem] flex justify-end items-center overflow-x-hidden">
          
          {/* Bottom Image */}
          <img
            src={img2}
            alt="Bottom Layer"
            className="w-[18rem] max-w-[90%] h-[70%] object-cover rounded-xl shadow-xl z-0 overflow-y-hidden"
          />

          {/* Plus Sign UNDER top image */}
          <div
            className="absolute text-5xl font-bold text-blue-500 animate-bounce z-10"
            style={{ top: "7rem", right: "11rem" }}
          >
            +
          </div>

          {/* Top Image - slightly tilted, over the bottom one */}
          <img
            src={img1}
            alt="Top Layer"
            className="w-[14rem] max-w-[70%] h-auto object-cover rounded-xl shadow-2xl absolute top-[11rem] right-[8rem] z-20"
          />
        </div>
      </div>

      {/* Logos Section */}
      <section className="w-full mt-8 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-20 sm:w-28 md:w-32 h-auto object-contain grayscale hover:grayscale-1 transition duration-300"
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default GridSplitImages;

