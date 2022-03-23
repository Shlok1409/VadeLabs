
import Image from 'next/image'

import video from '../Assets/video1.png'
import mid from '../Assets/mid.png'
import tick from '../Assets/greentick.png'
import resend from '../Assets/restart.png'

import upbar from '../Assets/upbar.png'
import backtotop from '../Assets/backtotop.png'
import Button from './button'
import React, { useState } from 'react';
import SectionThree from './SectionThree';


export default function Body() {


    return (
        <div className='' >

            <div className="absolute mt-20 pattern-dots pattern-gray-400 pattern-bg-gray-200
              pattern-size-20 pattern-opacity-30 w-full h-screen -z-10 "></div>

            <div className='  flex flex-row  justify-end '>




                <div className=' w-1/2 m-10 mt-72 pl-10  '>

                    <div className='text-7xl font-bold bg-gray-100 w-3/5 pl-4 py-3 text-[#2e3b4e] '>
                        <div>
                            Integrate APIs<br />
                            In Minutes
                        </div>
                    </div>
                    <div className=' mt-4 font-bold text-3xl pl-4  py-3 bg-gray-100 w-3/4'>
                        Get ridiculously creative with your products <br />
                        and let us do the hard work for you!
                    </div>
                    <Button />

                </div>
                <div className=' flex mt-52 justify-end border-2   border-r-0 rounded-3xl rounded-r-none border-black p-4 bg-white'>
                    <div>

                        <Image

                            src={video}
                            alt="Picture of the author"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
            <div className=' flex flex-col items-center border-t-4 border-opacity-40  border-gray-300  mt-56 rounded-3xl  '>
                <div className='  mt-28 text-center text-xl font-medium mb-4'>
                    We understand your needs to <span className=' bg-[#eccb65]'> build integrated applications</span> in today's <br /> hyper-connected world. <span className=' bg-[#eccb65]'>Skip the hassle</span> to repeat a
                    cumbersome process<br /> <span className=' bg-[#eccb65]'>for each unique integration. </span> Join us to build reliable connections with <br />
                    multiple providers and <span className=' bg-[#eccb65]'>cruise through backend </span> with ease.
                </div>
                <div className=' mt-4'>
                    <Image

                        src={upbar}
                        alt="upbar"
                        width={1000}

                    />
                </div>
                <div className='text-5xl mt-10 font-semibold'>
                    <span className='text-[#3554fc]'>
                        Skip
                    </span> the hassle
                </div>
                <div className=' mt-2'>
                    <Image

                        src={mid}
                        alt="mid picture"


                    />
                </div>
                <div className='text-5xl mt-10 mb-2 font-semibold'>
                    <span className='text-[#3554fc]'>
                        Cruise
                    </span> through backend.
                </div>
                <div>
                    <SectionThree />
                </div>
                <div className=' mt-6 mb-5'>
                    <Image

                        src={upbar}
                        alt="upbar"
                        width={1000}

                    />
                </div>
                <div className='  mt-8 text-center text-xl font-medium mb-4'>
                    We're building an ecosystem where <span className=' bg-[#eccb65]'>anyone can get inspired </span>  with <br /> application
                    templates , discover novel ideas from top builders , and <br /> <span className=' bg-[#eccb65]'> publish revolutionary applications</span> that could   <span className=' bg-[#eccb65]'>change the world.</span>
                </div>

                <div className=' w-1/2  relative  left-44'>

                    <Button />
                </div>
            </div>

            <div className=' flex justify-end mr-20 mb-20 '>
                <div className=' flex flex-col'>
                    <div className=' relative top-3 -left-1'>

                        <Image

                            src={backtotop}
                            alt="backt to top"

                        />
                    </div>
                    Back on top
                </div>
            </div>
        </div >

    )
}
