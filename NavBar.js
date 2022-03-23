import logo from '../Assets/logo.png';
import Image from 'next/image';
import { useRef } from 'react';

export default function NavBar() {

    return (

        <div className=' flex flex-row bg-[#fafafa] fixed w-full border-2 border-b-[#f5f5f5] z-20 bg-opacity-70'>

            <div className=' ml-10 '>

                <Image

                    src={logo}
                    alt="Picture of the author"
                    width={200}
                    height={70}
                />
            </div>

            <div className='flex-row flex flex-1 justify-center antialiased mt-6 text-xl'>
                <div className=' mr-20 '>
                    Skip the hassle
                </div>
                <div className=' ml-20'>

                    Cruise through backend
                </div>
            </div>
            <div className='mr-10 mt-3 '>
                <button className=' bg-[#2946eb] text-white py-3 px-5 rounded-xl'>Get Early Access</button>
            </div>

        </div>
    )
}
