import React, { useState } from 'react'
import {data} from '../data/Data'

const Food = () => {

  const [foods, setFoods] = useState(data)
  const [type, setType] = useState("all") //'pizza' 'burgur' 'salad'  'chicken'

  //Filter by type
  const filterByType = (category) => {

    setType(category)

    setFoods(
      data.filter((item) => {
        return item.category === category
      })
    )
  }

  //Filter by price
  const filterByPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price
      })
    )
  }



  return (
    <div className='max-w-[1640px] m-auto px-4 py-8'>
      {/* Title */}
      <h1 className='text-raisinBlack font-bold text-2xl sm:text-4xl text-center bg-maizie py-2'>Top Rated Menu Items</h1>

      {/* Filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter type */}
        <div className='my-1 bg-gray-200 lg:bg-transparent p-1 rounded-lg'>
          <p className='mx-1 font-bold text-gray-700'>Filter By Type</p>
          <div className='flex justify-normal flex-wrap'>
            <button onClick={()=>{
              setType('all')
              setFoods(data)
              }}
             className={`m-1 border-raisinBlack hover:border-raisinBlack hover:bg-raisinBlack hover:text-vanilla ${type === 'all' ? 'bg-raisinBlack text-vanilla' : 'bg-maizie text-raisinBlack'}`}>All</button>
            <button onClick={()=>{
              filterByType('pizza')
            }}
            className={`m-1 border-raisinBlack   hover:border-raisinBlack hover:bg-raisinBlack hover:text-vanilla ${type === 'pizza' ? 'bg-raisinBlack text-vanilla' : 'bg-maizie text-raisinBlack'}`}>Pizza</button>
            <button onClick={()=>{
              filterByType('burger')
            }}
            className={`m-1 border-raisinBlack hover:border-raisinBlack hover:bg-raisinBlack hover:text-vanilla ${type === 'burgur' ? 'bg-raisinBlack text-vanilla' : 'bg-maizie text-raisinBlack'}`}>Burgurs</button>
            <button onClick={()=>{
              filterByType('salad')
            }}
            className={`m-1 border-raisinBlack hover:border-raisinBlack hover:bg-raisinBlack hover:text-vanilla ${type === 'salad' ? 'bg-raisinBlack text-vanilla' : 'bg-maizie text-raisinBlack'}`}>Salads</button>
            <button onClick={()=>{
              filterByType('chicken')
            }}
            className={`m-1 border-raisinBlack hover:border-raisinBlack hover:bg-raisinBlack hover:text-vanilla ${type === 'chicken' ? 'bg-raisinBlack text-vanilla' : 'bg-maizie text-raisinBlack'}`}>Chicken</button>
          </div>

        </div>

        {/* Filter price */}
        <div className='my-1 bg-gray-200 lg:bg-transparent p-1 rounded-lg'>
          <p className='mx-1 font-bold text-gray-700'>Filter By Price</p>
          <div className='flex justify-normal max-w-[390px] w-full'>
            <button 
              onClick={()=>{
                filterByPrice("$")
              }}
              className='m-1 border-raisinBlack text-raisinBlack bg-maizie hover:bg-raisinBlack hover:text-vanilla'
            >$</button>
            <button 
              onClick={()=>{
                filterByPrice("$$")
              }}
              className='m-1 border-raisinBlack text-raisinBlack bg-maizie hover:bg-raisinBlack hover:text-vanilla'
            >$$</button>
            <button 
              onClick={()=>{
                filterByPrice("$$$")
              }}
              className='m-1 border-raisinBlack text-raisinBlack bg-maizie hover:bg-raisinBlack hover:text-vanilla'
              >$$$</button>
            <button 
              onClick={()=>{
                filterByPrice("$$$$")
              }}
              className='m-1 border-raisinBlack text-raisinBlack bg-maizie hover:bg-raisinBlack hover:text-vanilla'
              >$$$$</button>
          </div>

        </div>
      </div>

      {/* Food Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
        {foods.map((food, index)=>(
            <div key={index} className='border rounded-xl relative bg-vanilla shadow-lg hover:scale-105 duration-300'>
                {/* Overlay */}
                {/* <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>{food.name}</p>
                    <p className='text-xl px-2'>Through 8/26</p>
                    <button className='mx-2 border-white bg-white text-black text-xl absolute bottom-2'>Order Now</button>
                </div> */}
                <img className='rounded-t-xl max-h-[160px] md:max-h-[300px] w-full h-full object-cover' src={food.image} alt={food.name} />
                <div>
                  <p className='p-1 font-bold text-raisinBlack'>{food.name}</p>
                  <p className='pb-1 mx-1 border-raisinBlack'>
                    <span className='bg-raisinBlack px-2 rounded-full text-citrine '>{food.price}</span>
                  </p>
                </div>
            </div>

            
        ))}
      </div>
    </div>
  )
}

export default Food
