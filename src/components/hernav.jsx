import Hero from "./hero";
import Navbar from "./navbar";
import bg from "../assets/bg.webp";
import React from 'react'

const Hernav = () => {
  return (
    <section className="w-full h-[110vh] p-9 bg-cover bg-no-repeat bg-center " style={{ backgroundImage: `url(${bg})` }}>
    <Navbar/>
    <Hero/>
    </section>
  )
}

export default Hernav