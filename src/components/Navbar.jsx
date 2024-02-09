import React, {useState} from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {

    // States
    const [nav, setNav] = useState(false)
    const [recieveType, setRecieveType] = useState('delivery') //or pickup
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex items-center'>
            <div onClick={() => {
                setNav(!nav)
                }}
                className='p-2 cursor-pointer text-raisinBlack rounded-full hover:bg-vanilla'>
                <AiOutlineMenu size={30} />
            </div>

            <h1 className='ml-2 flex text-lg sm:text-2xl md:text-3xl text-raisinBlack'>
                Best<span className='font-bold ml-2'>Eats</span>
            </h1>

            {/* hidden lg:flex */}
            <div className='flex items-center bg-vanilla rounded-full p-1 text-[14px] ml-2 border-collapse shadow-lg scale-75 sm:scale-100'>
                <p onClick={()=>setRecieveType('delivery')} className= {recieveType === 'delivery' ? 'bg-raisinBlack text-vanilla rounded-full p-2 duration-200 cursor-default' : ' text-raisinBlack rounded-full p-2 duration-200 cursor-pointer'} >Delivery</p>
                <p onClick={()=>setRecieveType('pickup')} className={recieveType === 'pickup' ? 'bg-raisinBlack text-vanilla rounded-full p-2 duration-200 cursor-default' : ' text-raisinBlack rounded-full p-2 duration-200 cursor-pointer'} >Pickup</p>
            </div>
        </div>

        {/* Search-input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[150px] sm:w-[300px] lg:w-[400px] max-w-[400px]'>
            <AiOutlineSearch size={20}/>
            <input type="text" placeholder='Search food' className='bg-transparent p-2 focus:outline-none w-full'/>
        </div>

        {/* Cart-input */}
        <button className='bg-raisinBlack text-vanilla hidden md:flex items-center py-2 rounded-full'>
            <BsCartFill size={20} className='mr-2'/> Cart
        </button>

        {/* Mobile-menu */}
        {/* Over-lay */}
        {nav ? <div onClick={
            () => {
                        setNav(!nav)
                    }
        } className='bg-black/70 fixed w-full h-screen z-10 top-0 left-0 duration-300' >
        </div> : ''}
        

        {/* Side drawer-menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-300px] w-[300px] h-screen bg-white z-10 duration-300'}>
            <div className=' bg-gray-100'>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer'onClick={
                    () => {
                        setNav(!nav)
                    }
                }/>
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            </div>
    
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl flex items-center ml-2 p-2 my-2 hover:text-blue-400'><TbTruckDelivery size={30} className='mr-4'/> Orders</li>
                    <li className='text-xl flex items-center ml-2 p-2 my-2 hover:text-blue-400'><MdFavorite size={30} className='mr-4'/> Favourites</li>
                    <li className='text-xl flex items-center ml-2 p-2 my-2 hover:text-blue-400'><FaWallet size={30} className='mr-4'/> Wallet</li>
                    <li className='text-xl flex items-center ml-2 p-2 my-2 hover:text-blue-400'><MdHelp size={30} className='mr-4'/> Help</li>
                    <li className='text-xl flex items-center ml-2 p-2 my-2 hover:text-blue-400'><AiFillTag size={30} className='mr-4'/> Promotions</li>
                    <li className='text-xl flex items-center ml-2 p-2 my-2 hover:text-blue-400'><BsFillSaveFill size={30} className='mr-4'/> Best Ones</li>
                    <li className='text-xl flex items-center ml-2 p-2 my-2 hover:text-blue-400'><FaUserFriends size={30} className='mr-4'/> Invite Friends</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
