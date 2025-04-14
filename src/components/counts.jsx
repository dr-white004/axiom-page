import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.png';

import { ChevronLeft, ChevronRight } from 'lucide-react';


import pic1 from '../assets/blog3.jpg';
import pic2 from '../assets/blog4.jpg';
import pic3 from '../assets/blog5.jpg';
const CombinedSection = () => {
  const stats = [
    { label: "Projects", value: 93 },
    { label: "People", value: 24 },
    { label: "Words", value: 56 },
    { label: "Offices", value: 65 },
  ];


  const miniPages = [
    {
      image: pic1,
      text: "This product really changed how our team collaborates and grows together. A true game-changer.",
      name: "Sarah Johnson",
      role: "Product Manager",
    },
    {
      image: pic2,
      text: "Exceptional service and flawless execution. We’re absolutely thrilled with the results.",
      name: "Michael Chen",
      role: "CTO",
    },
    {
      image: pic3,
      text: "What stood out to us was their commitment to quality and understanding our goals from the start.",
      name: "Amina Yusuf",
      role: "CEO",
    },
  ];

  const carouselRef = useRef(null);
  const containerRef = useRef();
  const [activeIndex, setActiveIndex] = React.useState(0);

const handleScroll = () => {
  const container = containerRef.current;
  if (!container) return;

  const scrollLeft = container.scrollLeft;
  const containerWidth = container.offsetWidth;

  const index = Math.round(scrollLeft / containerWidth);
  setActiveIndex(index);
};



  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -containerRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const container = carouselRef.current;
      if (container) {
        index = (index + 1) % 5;
        container.scrollTo({
          left: index * container.clientWidth / 3,
          behavior: 'smooth',
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f0f8ff] px-4 space-y-24 w-full">
      {/* Stats Section */}
      <div  data-aos="fade-up" className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative">
        {stats.map((stat, index) => (
          <div key={stat.label} className="relative flex justify-center items-center h-36">
            <h3 className="text-6xl md:text-[10rem] font-extrabold text-white z-0">
              <CountUp end={stat.value} duration={15} />
            </h3>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm font-medium z-10 uppercase tracking-wide">
              {stat.label}
            </p>
            {index < stats.length - 1 && (
              <span className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-px bg-gray-300" />
            )}
            {(index === 0 || index === 2) && (
              <span className="block md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-300">
                |
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Subsection with 2 columns of text */}
      <div data-aos="fade-up" aos-delay='200' className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 p-20 gap-8 text-gray-800">
  <div className="space-y-4">
    <p>creative solutions</p>
    <p className="text-5xl md:text-6xl font-bold">We make unique & memorable brands</p>
  </div>
  <div className="space-y-4 justify-self-center">
    <p>Proin gravida nibh vel velit auctor aliquet.</p>
    <p>
At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque lorem in voluptate velit iusto odio dignissimos duci esse.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
  </div>
</div>

      {/* Carousel Subsection */}
      <div data-aos="fade-up" aos-delay ='200' className="max-w-6xl mx-auto overflow-hidden relative">
        <div
          ref={carouselRef}
          className="flex gap-6 snap-x snap-mandatory pointer-events-none"
          style={{
            overflow: 'hidden', // fully hides scroll
          }}
        >
          {[img1, img2, img3, img4, img1].map((img, i) => (
            <div
              key={i}
              className="min-w-[calc(100%/2.5)] snap-start flex-shrink-0 transition-transform duration-700"
            >
              <img
                src={img}
                alt={`Slide ${i}`}
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800">
        <div className="space-y-4">
          <p className="text-5xl md:text-7xl font-extrabold">Subscribe for the exclusive updates!</p>
        </div>
        <div className="flex flex-col ">
          <div className='flex gap-4'>
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
            <button class="bg-blue-500 text-white p-2 rounded-full px-4">Subscribe</button>
          </div>
          <label  data-aos="fade-up" className="flex items-center space-x-2 cursor-pointer p-4">
            <input type="checkbox" className="accent-blue-500 w-4 h-4" />
            <span className="text-sm text-gray-700">
              I agree with the <span className="underline">Privacy Policy</span>
            </span>
         </label>


        </div>
      </div>   


      
    <section className="w-full py-4">
      <div className="relative max-w-6xl mx-auto">
        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >

          {miniPages.map((person, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center text-center p-6 snap-start"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-md mb-6"
              />
              <p className="max-w-2xl text-lg text-gray-700 mb-4">{person.text}</p>
              <h4 className="text-xl font-semibold text-gray-900">{person.name}</h4>
              <p className="text-gray-600 text-sm">{person.role}</p>
            </div>
            
          ))}
          
        </div>
        <div className="flex justify-center mt-6 space-x-2">
  {miniPages.map((_, i) => (
    <span
      key={i}
      className={`w-3 h-3 rounded-full transition-all ${
        i === activeIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300'
      }`}
    />
  ))}
</div>
      </div>
    </section>
    </section>
  );
};

export default CombinedSection;

