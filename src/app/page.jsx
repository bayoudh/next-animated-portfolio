"use client"
import Image from "next/image";
import { motion } from "framer-motion";
const Homepage = () => {
  return <div className="h-full flex flex-col  lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
    {/*Image contaner*/}

    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
    <Image src="/hero.png" alt=""fill className="object-contain"/>
    </div>
     {/*text contaner*/}
     <div className="h-1/2  lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/*title*/}
          <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital
Experiences, Designing
Tomorrow.</h1>
          {/*desc:*/}
          <p className="md:text-xl">Welcome to my digital Canvas, where innovation and
creativity converge. With a keen eye for aesthetics and
a mastery Of code, my portfolio Showcases a diverse
collection of projects that reflect my commitment to
excellence.</p>
          <div className=" w-full flex gap-4">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
              <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
     </div>
  </div>;
};

export default Homepage;
