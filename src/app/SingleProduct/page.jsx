import React from 'react'
import Slider from '../Components/Slider'

const page = () => {
    const images = [
        'https://cdn.pixabay.com/photo/2015/09/15/20/06/curtain-941716_640.jpg',
        'https://cdn.pixabay.com/photo/2017/02/28/18/29/curtain-2106522_640.jpg',
        'https://cdn.pixabay.com/photo/2017/08/05/14/51/wedding-2584186_640.jpg',
        'https://cdn.pixabay.com/photo/2014/07/31/13/22/stage-406306_640.jpg'
    ];
    return (
        <>
            <div className='text-black mt-36'></div>

            <div className='flex justify-center items-center'>
                <div className='w-[60%]'>
                    <Slider images={images} />
                </div>
                <div className='w-[30%]'>
                  <h1 className='text-2xl font-semibold tracking-wider'>Cotton Curtains</h1>
                  <p className='text-lg tracking-wider text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ex.</p>
                  <button className='bg-black rounded-md py-3 tracking-widest text-2xl font-bold text-center mt-10 text-white px-10'>Contact Now</button>
                </div>
            </div>
        </>
    )
}

export default page