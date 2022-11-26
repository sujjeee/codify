import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full bg-black py-16 text-white px-4'>
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className='md:col-span-2 text-center md:text-justify my-5'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tip & tricks to optimise your flow?</h1>
                    <p>Signup to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter your email'/>
                        <button type="button" className="text-black bg-[#00df9a] w-[200px] sm:ml-3 rounded-md font-medium my-6 px-6 py-3 md:ml-3 drop-shadow-md">Notify me </button>
                    </div>
                <p className='text-center lg:text-justify lg:w-[300px] text-[15px]'>We care about the protection of your data. Read our <span className='text-[#00df9a] underline'>Privacy Policy.</span> </p>
                </div>
            </div>

        </div>
    )
}

export default Newsletter