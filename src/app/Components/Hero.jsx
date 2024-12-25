'use client'; // Ensure this component is rendered client-side

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
    // Define the list of image URLs
    const images = [
        'https://cdn.pixabay.com/photo/2015/09/15/20/06/curtain-941716_640.jpg',
        'https://cdn.pixabay.com/photo/2017/02/28/18/29/curtain-2106522_640.jpg',
        'https://cdn.pixabay.com/photo/2017/08/05/14/51/wedding-2584186_640.jpg',
        'https://cdn.pixabay.com/photo/2014/07/31/13/22/stage-406306_640.jpg'
    ];

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
        <>


            {/* Slider Container */}
            <div className="relative w-[80%]  h-[350px] sm:h-[420px]   mx-auto overflow-hidden rounded-xl top-28 sm:top-20">
                {/* The sliding content */}
                <div
                    className="flex transition-transform duration-1000 ease-in-out "
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
                <div className="absolute  bottom-24  sm:bg-white sm:w-full  sm:bottom-0    px-28  sm:px-[580px] sm:pt-10 flex space-x-4 ">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? 'bg-gray-950' : 'bg-gray-400'
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
