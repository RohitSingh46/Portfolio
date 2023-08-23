import React from 'react'
import images2 from '../assets/images2.jpeg'
import images from '../assets/images.jpeg'
const PortFolio = () => {
    const portFolios=[
        {
            id:1,
            src:images,
            demo:'https://random-gif-by-rohit.vercel.app/',
            code:'https://github.com/RohitSingh46/Random-GIf.git'
            
           
        },
        {
            id:2,
            src:images2,
            demo:'https://top-courses-by-rohit.vercel.app/',
            code:'https://github.com/RohitSingh46/Top-Courses'
        }
    ]
  return (
   
    <div
       name="portFolio"
       className='bg-gradient-to-b from-gray-800  to-black w-full text-white md:h-screen'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                PortFolio
            </p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div  className='grid sm:grid-cols-2 px-8 sm:px-0' >
            {
                // portFolios.map(({id,src})=>(
                //     <div  key={id} className='shadow-md shadow-gray-600 mr-[60px] rounded-lg'>
                //     <img src={src} alt="" className='rounded-md duration-300 hover:scale-105' />
                //     <div className='flex justify-center items-center'>
                // <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                // <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                // </div>
                // </div>
                // ))


                portFolios.map(({id,src,demo,code})=>(
                    <div  key={id} className='shadow-md shadow-gray-600 mr-[60px] rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-300 hover:scale-105' />
                    <div className='flex justify-center items-center'>
                <a href={demo} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                <a href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                </div>
                </div>
                ))

            
            }
          
        </div>
      </div>
    </div>
  )
}

export default PortFolio
