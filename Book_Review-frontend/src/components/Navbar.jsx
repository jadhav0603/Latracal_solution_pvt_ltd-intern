import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='flex gap-[10px] items-center justify-between py-[10px] px-[2vw] bg-black border rounded'>

            <div className='flex gap-[10px] items-center'>
                <img className='w-[5vw] rounded-[50%]'
                    src='/logo.webp' />
                <p className='font-bold text-[2vw] text-white '>Book House</p>
            </div>

            <div className='flex gap-[10px] items-center text-white'>
                <input className="w-[30vw] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type='text' placeholder='Search Books by Title and Author' />
                <button className="w-[10vw] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300" type='button'>Search</button>
            </div>

            <div className='flex gap-[10px] items-center text-white'>
                <FontAwesomeIcon icon={faUser} />
                <p>Vijay Jadhav</p>
            </div>
            
        </div>
    )
}

export default Navbar