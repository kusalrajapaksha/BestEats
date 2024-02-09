import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-8 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-babyPowder'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's out, BOGO's out</p>
            <p className='text-xl px-2'>Through 8/26</p>
            <button className='mx-2 border-vanilla bg-vanilla text-raisinBlack text-xl absolute bottom-2 rounded-xl hover:scale-105 duration-300 font-semibold'>Order Now</button>
        </div>
        <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full h-full object-cover' src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>

      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-babyPowder'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restuarants</p>
            <p className='text-xl px-2'>New tastes in the town</p>
            <button className='mx-2 border-vanilla bg-vanilla text-raisinBlack text-xl absolute bottom-2 rounded-xl hover:scale-105 duration-300 font-semibold'>Check Now</button>
        </div>
        <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full h-full object-cover' src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>       


      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-babyPowder'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
            <p className='text-xl px-2'>Try out today</p>
            <button className='mx-2 border-vanilla bg-vanilla text-raisinBlack text-xl absolute bottom-2 rounded-xl hover:scale-105 duration-300 font-semibold'>Check Now</button>
        </div>

        <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full h-full object-cover' src="https://images.unsplash.com/photo-1547414368-ac947d00b91d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D" alt="" />
      </div>
    </div>
  )
}

export default HeadlineCards
