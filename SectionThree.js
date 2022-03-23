import Image from 'next/image'
import React from 'react'
import one from '../Assets/1.png'
import two from '../Assets/2.png'
import three from '../Assets/3.png'
export default function SectionThree() {
  return (
    <div>
      <div className=' flex flex-row items-center justify-center'>
        <div className=' w-1/2 relative mt-20 left-16 mb-10 '>
          <div className='text-gray-200  text-9xl -z-10 absolute -left-20 -top-16'>
            #1
          </div>
          <span className=' text-3xl'> Choose from <br />
            100+ integrations.</span> <br></br>

          <div className=' mt-4 text-[#707070]'>
            Vade Studio is designed to work seamlessly<br></br>
            with your favourite databases or web services.<br></br>
            <span className=' font-medium text-black text-lg '>Tweak a template or start from scratch. </span><br />
          </div>

          <div className='mt-4 text-[#707070] '>We've baked-in over 100 integrations directly<br></br>
            into the platform, so you can integrate quickly<br></br>
            and easily with other services, databases and<br></br>
            applications out there.

          </div>
        </div>
        <div className=' ml-20 relative left-32 mt-20'>
          <Image
            src={one} />
        </div>

      </div>
      <div className=' flex flex-row items-center justify-center mb-20'>
        <div className='  relative right-14 mt-40 '>
          <Image
            src={two} />
        </div>


        <div className=' w-1/2 relative left-16 ml-20 mt-40  '>
          <div className='text-gray-200  text-9xl -z-10 absolute left-40 -top-16'>
            #2
          </div>
          <span className=' text-3xl'> Configure & Connect.</span> <br></br>

          <div className=' mt-4 text-[#707070]'>
            Get all of your

            <span className=' font-medium text-black text-lg '>data sources connected into a <br></br> content mesh, in the same place, in real time.</span><br />
          </div>

          <div className='mt-4 text-[#707070] '>This provides you a unified API for data <br></br>
            navigation across all your integrated services.

          </div>
        </div>
      </div>
      <div className=' flex flex-row items-center justify-center mb-32'>
        <div className=' w-1/2 relative mt-20 left-16 mb-10 '>
          <div className='text-gray-200  text-9xl -z-10 absolute -left-20 -top-20'>
            #3
          </div>
          <span className=' text-3xl'> Test. Build. Deploy.</span> <br></br>

          <div className=' mt-4 text-[#707070]'>
            <span className=' font-medium text-black text-lg '>Play around with the generated APIs.</span><br />
            Once configured — test, build and deploy<br></br>
            the unified API into our secure and reliable
            <br></br>
            infrastructure.
          </div>

          <div className='mt-4 text-[#707070] '>Run your queries in the editor and use our<br></br>
            intuitive interface to  <span className=' font-medium text-black text-lg '> navigate through your<br></br>
              data - clean, organised & at your fingertips.</span>

          </div>
        </div>
        <div className=' ml-20 relative left-32 mt-20'>
          <Image
            src={three} />
        </div>

      </div>
    </div >
  )
}
