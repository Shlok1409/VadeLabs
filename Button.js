
import Image from 'next/image'

import video from '../Assets/video1.png'
import mid from '../Assets/mid.png'
import tick from '../Assets/greentick.png'
import resend from '../Assets/restart.png'

import upbar from '../Assets/upbar.png'
import backtotop from '../Assets/backtotop.png'
import { useState } from 'react'



export default function Button() {

    const [showMe, setShowme] = useState("hidden");

    const [email, setEmail] = useState("block");

    function toggle() {
        // Similar to this.setState({ fruit: 'orange' })
        setShowme("block");
        setEmail("hidden");
    }
    function toggleBack() {

        setShowme("hidden");
        setEmail("block");
    }
    return (
        <div> <div className='mt-6 pl-4'>
            <div className={email}>

                <input type='email' placeholder=' email@example.com' className=' placeholder:ml-0 rounded-l-md p-3 pr-32 border border-r-0 border-[#2946eb]'></input>
                <button onClick={toggle} className=' border border-l-0 p-3 px-8 border-[#2946eb] text-white bg-[#2946eb] rounded-md rounded-l-none'>Get Early Access</button>
            </div>

            <div className={showMe}>
                <button className=' p-3 px-40 border-[#2946eb] text-white bg-[#2946eb] rounded-md '>Thank you for your interest</button> <br />
                <div className=' flex flex-row space-x-5 w-1/2'>

                    <div className='font-medium text-sm antialiased mt-2'>

                        <Image

                            src={tick}
                            alt="tick"
                            width={12}
                            height={12}

                        />
                        <span className=' pl-2'>An email has been sent to your inbox </span>
                    </div>
                    <div className='font-medium relative  left-40 text-sm mt-2 mb-1'>   Didn't receive</div><br />
                </div>
                <button onClick={toggleBack} className='text-red-600 relative text-xs -top-2 left-1/2 mt-2'>


                    <Image

                        src={resend}
                        alt="resend"


                    />

                    <span className='ml-1 mb-1'> Resend</span>

                </button>
            </div>
        </div></div>
    )
}
