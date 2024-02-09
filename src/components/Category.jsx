import React, { useState } from 'react'
import {categories} from '../data/Data'

const Category = () => {

  return (
    <div className='max-w-[1640px] m-auto px-4 py-8'>
      <h1 className='text-raisinBlack font-bold text-2xl sm:text-4xl text-center bg-maizie py-2'>Categories</h1>

      {/* Categories Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-8'>
        {categories.map((item, index)=> (
            <div key={index} className='border rounded-xl relative bg-vanilla shadow-lg hover:scale-105 duration-300 flex items-center justify-between'>
                <h2 className='text-xs sm:text-xl p-5 font-bold text-raisinBlack'>{item.name}</h2>
                <img className='w-10 sm:w-20' src={item.image} alt={item.name}/>
            </div>

        ))}
      </div>
    </div>
  )
}

export default Category
