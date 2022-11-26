import React from 'react'
import { FaUserAstronaut } from 'react-icons/fa';
import { RiShieldUserFill } from 'react-icons/ri';
import { SiHatenabookmark } from 'react-icons/si';


const Card = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className="mx-auto max-w-[1240px] grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    {<FaUserAstronaut className='w-20 mx-auto mt-[-3rem] bg-white' size={70} />}
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 '>1 Granted User</p>
                        <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                    </div>
                    <button type="button" className="bg-black  text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-lg drop-shadow-md shadow-xl">Start Trail </button>
                </div>
                <div className="w-full bg-gray-200 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    {<RiShieldUserFill className='w-20 mx-auto mt-[-3rem]' size={70} />}
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 '>1 Granted User</p>
                        <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                    </div>
                    <button type="button" className="text-black  bg-[#00df9a] w-[200px] shadow-xl rounded-md font-medium my-6 mx-auto py-3 text-lg drop-shadow-md">Start Trail </button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    {<SiHatenabookmark className='w-20 mx-auto mt-[-3rem] bg-white' size={70} />}
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 '>1 Granted User</p>
                        <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                    </div>
                    <button type="button" className="bg-black  text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-lg drop-shadow-md shadow-xl">Start Trail </button>
                </div>
            </div>
        </div>
    )
}

export default Card  