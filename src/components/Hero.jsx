import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4' >
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-babyPowder max-h-[500px] bg-black/50 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl font-bold'>The <span className='text-citrine '>Best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl font-bold'><span className='text-citrine '>Foods</span><span> Delivered</span></h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food Hero" />
      </div>

    </div>
  )
}

export default Hero
