import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Analytics = () => {
    return (
        <>
            <Carousel width={"none"} showThumbs={false} showStatus={false} showIndicators={false} swipeable={true} autoPlay infiniteLoop>
            <div className='w-full bg-white py-12 px-4'>
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className='!w-[500px] mx-auto my-4 shadow-xl drop-shadow-md rounded' src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <div className='flex flex-col justify-center md:text-justify text-center'>
                        <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                        <h1 className='md:text-4xl sm:text-2xl font-bold py-2'>Manage Data Analytics centrally</h1>
                        <p>Lorem 1 ipsum dolor sit, amet consectetur adipisicing elit. Ex, illo reprehenderit labore rem fuga nostrum, amet quisquam eum atque minus rerum repellendus culpa natus, voluptatem recusandae laboriosam! Rerum, libero nesciunt.
                        </p>
                        <button type="button" className="bg-black text-[#00df9a] w-[200px] rounded-md shadow-xl font-medium my-6 mx-auto md:mx-0 py-3 text-lg drop-shadow-md">Get Started </button>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white py-12 px-4'>
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className='!w-[500px] mx-auto my-4 shadow-xl drop-shadow-md rounded' src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <div className='flex flex-col justify-center md:text-justify text-center'>
                        <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                        <h1 className='md:text-4xl sm:text-2xl font-bold py-2'>Manage Data Analytics centrally</h1>
                        <p>Lorem 1 ipsum dolor sit, amet consectetur adipisicing elit. Ex, illo reprehenderit labore rem fuga nostrum, amet quisquam eum atque minus rerum repellendus culpa natus, voluptatem recusandae laboriosam! Rerum, libero nesciunt.
                        </p>
                        <button type="button" className="bg-black text-[#00df9a] w-[200px] rounded-md shadow-xl font-medium my-6 mx-auto md:mx-0 py-3 text-lg drop-shadow-md">Get Started </button>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white py-12 px-4'>
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className='!w-[500px] mx-auto my-4 shadow-xl drop-shadow-md rounded' src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                    <div className='flex flex-col justify-center md:text-justify text-center'>
                        <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                        <h1 className='md:text-4xl sm:text-2xl font-bold py-2'>Manage Data Analytics centrally</h1>
                        <p>Lorem 1 ipsum dolor sit, amet consectetur adipisicing elit. Ex, illo reprehenderit labore rem fuga nostrum, amet quisquam eum atque minus rerum repellendus culpa natus, voluptatem recusandae laboriosam! Rerum, libero nesciunt.
                        </p>
                        <button type="button" className="bg-black text-[#00df9a] w-[200px] rounded-md shadow-xl font-medium my-6 mx-auto md:mx-0 py-3 text-lg drop-shadow-md">Get Started </button>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white py-12 px-4'>
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className='!w-[500px] mx-auto my-4 shadow-xl drop-shadow-md rounded' src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
                    <div className='flex flex-col justify-center md:text-justify text-center'>
                        <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                        <h1 className='md:text-4xl sm:text-2xl font-bold py-2'>Manage Data Analytics centrally</h1>
                        <p>Lorem 1 ipsum dolor sit, amet consectetur adipisicing elit. Ex, illo reprehenderit labore rem fuga nostrum, amet quisquam eum atque minus rerum repellendus culpa natus, voluptatem recusandae laboriosam! Rerum, libero nesciunt.
                        </p>
                        <button type="button" className="bg-black text-[#00df9a] w-[200px] rounded-md shadow-xl font-medium my-6 mx-auto md:mx-0 py-3 text-lg drop-shadow-md">Get Started </button>
                    </div>
                </div>
            </div>
            </Carousel>
        </>
    )
}

export default Analytics