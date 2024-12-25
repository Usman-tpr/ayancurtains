'use client'; // Ensure this component is rendered client-side

import Link from 'next/link';
import { useState, useEffect } from 'react';
const Slider = ({images}) => {
 
    
      // Set up state to keep track of the current image index
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // Change the image every 3 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, []);
    
  return (
    <div className="relative w-[80%] h-[370px]   mx-auto overflow-hidden rounded-xl top-20">
    {/* The sliding content */}
    <div
      className="flex transition-transform duration-1000 ease-in-out"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`, // Slide effect
      }}
    >
      {/* Map over images and display them */}
      {images.map((image, index) => (
        <div key={index} className="w-full flex-shrink-0">
          <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
        </div>
      ))}
    </div>

    {/* Navigation Dots */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
      {images.map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full ${
            index === currentIndex ? 'bg-gray-950' : 'bg-gray-400'
          }`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  </div>
  )
}

export default Slider