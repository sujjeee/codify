import React,{useState}from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <>
            <div className='flex items-center h-24 justify-center max-w-[1240px] mx-auto px-4 text-white'>

                <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer'>CoDify</h1>
                <ul className='hidden md:flex items-center cursor-pointer'>
                    <li className='p-4 rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'>Home</li>
                    <li className='p-4 rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'>About</li>
                    <li className='p-4 rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'>Service</li>
                    <li className='p-4 rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'>Company</li>
                    <li className='p-4 rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'>Contact</li>
                </ul>

                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <AiOutlineMenu size={22} />: <AiOutlineClose size={22} />}
                    
                </div>

                <div className={nav ? 'fixed  left-0 top-0 w-[40%] border-r-2 h-full px-4 border-r-gray-900 bg-[#000900] ease-in-out duration-100' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold pt-4 m-2 text-[#00df9a]'>CoDify</h1>
                    <ul>
                    <li className='p-4 rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'>Home</li>
                    <li className='p-4 rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'>About</li>
                    <li className='p-4 rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'>Service</li>
                    <li className='p-4 rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'>Company</li>
                    <li className='p-4 rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900'>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar