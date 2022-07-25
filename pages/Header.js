import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
// import Banner from '../public/images/b1.png'
import Image from 'next/image'
import Hero from '../public/images/hero_3.png'
import G2 from '../public/images/g2.jpg'
import G5 from '../public/images/g5.jpg'
import G6 from '../public/images/g6.jpg'

const featuredProducts = [
  // "/images/hero_1.png",
  // "/images/hero_2.png",
  Hero,
  // "/images/hero_3.png",
  // "/images/g1.jpg",
  G2,
  // "/images/g3.jpg",
  // "/images/g4.jpg",
  G5,
  G6,
];

let count = 0;
let slideInterval;

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    
    <div className="flex flex-wrap justify-center rounded-3xl">
      
    <div ref={slideRef} className=" w-5/6 select-none relative">
    {/* <div ref={slideRef} className="w-5/6 select-none relative"> */}
      
      <div className=" aspect-w-16 aspect-h-9">
        <Image src={featuredProducts[currentIndex]} alt="" />
        {/* <img src={featuredProducts[currentIndex]} alt="" /> */}
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Header