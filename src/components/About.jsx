import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-4'>
            <p  className='text-4xl font-bold inline border-b-4  border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>Hey! I am Rohit Singh, a B-tech CS&IT student and an aspiring software engineer looking forward to learn a lot of stuff in the Software Industry and fall in love with writing code even more in the process.</p>

        <br />
        <p className='text-xl'>
        I'm on a relentless quest to decode the language of machines and turn lines of code into innovative solutions. With an insatiable curiosity for all things tech, I'm the digital explorer navigating the vast landscapes of algorithms, data structures, and software architecture. 
        </p>
      </div>
    </div>
  )
}

export default About
