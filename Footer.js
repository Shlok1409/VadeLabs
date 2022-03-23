import React from 'react'
import twitter from '../Assets/twitter-16.ico'
import linkedin from '../Assets/linkedin-16.ico'
import globe from '../Assets/globe-16.ico'
import phone from '../Assets/phone-16.ico'

import cr from '../Assets/copyright-16.ico'
import Image from 'next/image'


export default function Footer() {


    return (
        <div className="bg-[#2c3c4c]">
            <div className="grid grid-cols-3 gap-3 ml-32 pt-10 h-52 text-white">
                <div>
                    <div className="text-center flex flex-col justify-center">
                        <div>

                            <Image
                                src={cr}></Image>
                            <span className='pl-2'>  2022 Vade Labs Pvt.Ltd</span>   <br />
                        </div>
                        <div className='flex flex-row justify-center'>
                            <div>

                                <Image
                                    src={twitter}></Image>
                            </div>
                            <div className='ml-2'>

                                <Image
                                    src={linkedin}></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center text-center">
                    <div>About us</div>

                    <div className="mt-5">
                        We're a group of entusiasts who love <br />
                        <div>
                            <div>helping creatives build software applications.</div>
                        </div>
                    </div>
                </div>
                <div className="items-center text-center">
                    Contact

                    <div className="mt-5">
                        <Image
                            src={globe}></Image>
                        <span className=' pl-2'>hello@vadelabs.com</span></div>
                    <div>
                        <Image
                            src={phone}></Image> <span className=' pl-2'>91-7829887887</span></div>
                </div>
            </div>
        </div>
    )
}
