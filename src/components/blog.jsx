// import React, { useEffect, useRef, useState } from "react";
// import blog1 from "../assets/blog1.jpg";
// import blog2 from "../assets/blog3.jpg";
// import blog3 from "../assets/blog2.jpg";
// import blog4 from "../assets/blog4.jpg";
// import blog5 from "../assets/blog1.jpg";
// import blog6 from "../assets/blog2.jpg";
// import blog7 from "../assets/blog4.jpg";

// const blogData = [
//   { img: blog1, title: "Blog Title 1", text: "Short blog description here." },
//   { img: blog2, title: "Blog Title 2", text: "Another blog snippet." },
//   { img: blog3, title: "Blog Title 3", text: "Interesting insight in this one." },
//   { img: blog4, title: "Blog Title 4", text: "A short highlight of the blog." },
//   { img: blog5, title: "Blog Title 5", text: "Something worth reading." },
//   { img: blog6, title: "Blog Title 6", text: "Learning never ends." },
//   { img: blog7, title: "Blog Title 7", text: "Tips for productivity." },
// ];

// const BlogCarousel = () => {
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollAmount = () => {
//     const container = containerRef.current;
//     if (container) {
//       const cardWidth = container.firstChild.offsetWidth;
//       container.scrollTo({
//         left: cardWidth * currentIndex,
//         behavior: "smooth",
//       });
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === blogData.length - 3 ? 0 : prevIndex + 1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     scrollAmount();
//   }, [currentIndex]);

//   return (
//     <section className="w-full py-10 px-6">
//       <div
//         ref={containerRef}
//         className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
//       >
//         {blogData.map((blog, idx) => (
//           <div
//             key={idx}
//             className="min-w-[300px] md:min-w-[350px] mr-6 snap-start flex-shrink-0 bg-white rounded-xl shadow-md"
//           >
//             <img
//               src={blog.img}
//               alt={blog.title}
//               className="w-full h-48 object-cover rounded-t-xl"
//             />
//             <div className="p-4">
//               <h4 className="text-lg font-bold mb-2">{blog.title}</h4>
//               <p className="text-gray-600 text-sm">{blog.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Dots Indicator */}
//       <div className="mt-4 flex justify-center gap-2">
//         {blogData.slice(0, blogData.length - 2).map((_, i) => (
//           <span
//             key={i}
//             className={`w-3 h-3 rounded-full ${
//               i === currentIndex ? "bg-black" : "bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BlogCarousel;

import React, { useEffect, useRef, useState } from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog3.jpg";
import blog3 from "../assets/blog5.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog1.jpg";
import blog6 from "../assets/blog5.jpg";
import blog7 from "../assets/blog4.jpg";

const blogData = [
  { img: blog1, title: "Blog Title 1", text: "Short blog description here." },
  { img: blog2, title: "Blog Title 2", text: "Another blog snippet." },
  { img: blog3, title: "Blog Title 3", text: "Interesting insight in this one." },
  { img: blog4, title: "Blog Title 4", text: "A short highlight of the blog." },
  { img: blog5, title: "Blog Title 5", text: "Something worth reading." },
  { img: blog6, title: "Blog Title 6", text: "Learning never ends." },
  { img: blog7, title: "Blog Title 7", text: "Tips for productivity." },
];

const BlogCarousel = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollAmount = () => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.firstChild.offsetWidth;
      container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogData.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollAmount();
  }, [currentIndex]);

  return (
    <section  data-aos="fade-up" aos-delay= '300' className="w-full py-10 px-4">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {blogData.map((blog, idx) => (
          <div
            key={idx}
            className="w-[90%] md:w-[33.3333%] flex-shrink-0 snap-start px-3 flex flex-col items-center"
          >
            {/* Image Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden w-full group">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Left-aligned Text */}
            <div className="mt-3 w-full text-left">
              <h4 className="text-lg font-bold mb-1">{blog.title}</h4>
              <p className="text-gray-600 text-sm">{blog.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="mt-4 flex justify-center gap-2">
        {blogData.slice(0, blogData.length - 2).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default BlogCarousel;
