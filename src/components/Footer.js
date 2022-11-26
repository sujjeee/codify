import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <div className='md:w-[40%] sm:w-[60%] w-[90%] justify-center text-center mx-auto py-16 px-4 text-gray-300'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>CoDify</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error laudantium provident, suscipit corrupti eum quia qui suscipit corrupti eum quia qui! .</p>
                <div className='flex mx-auto justify-between md:w-[70%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaGithubSquare size={30} />
                    <FaTwitterSquare size={30} />
                </div>
            </div>
        </div>
    )
}

export default Footer

