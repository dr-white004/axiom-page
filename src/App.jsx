import { useEffect } from 'react'
import './App.css'
import Hernav from './components/hernav'
import Big from './components/big'
import StatsSection from './components/counts'
import GridSplitImages from './components/down'
import BlogCarousel from './components/blog'
import Footer from './components/footer'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  

  useEffect(() => {
    AOS.init({
      duration: 700,      
      once: true,         
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <>
     <Hernav/>
     <Big/>
     <StatsSection/>
     <GridSplitImages/>
     <BlogCarousel/>
     <Footer/>
    </>
  )
}

export default App
