import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[80px] w-full flex justify-between shadow-xl z-10 fixed t-0 bg-white '>
    <div className='items-center flex  gap-5 p-1'>
        <img src='https://tse2.mm.bing.net/th?id=OIP.zHP9bm5ZKQ2syBgQxfPOjgHaGx&pid=Api&P=0&h=180' className='w-16'/>
        <p className='text-5xl font-sans font-semibold hover:text-green-500 cursor-pointer hover:scale-105 transition ease delay-80'>Ecoyaan</p>
    </div>
    <div className='font-sans flex gap-8 items-center text-2xl  '>
        <Link className='transition ease-in-out delay-80  p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold  hover:font-bold' to={"/"}>Home</Link>
        <Link className=' transition ease-in-out delay-80 p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold hover:font-bold' to={"/about"}>About</Link>
        <Link className=' transition ease-in-out delay-80 p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold  hover:font-bold'>Contact</Link>
        <Link className='transition ease-in-out delay-80 p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold  hover:font-bold'>Others</Link>
    </div>
    <div className='flex items-center p-2 gap-6'>
        <button className='class="w-20 px-4 py-3 bg-green-600 rounded-md text-white font-sans text-xl outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex'>LogIn</button>
        <button className='class="w-20 px-4 py-3 bg-green-600 rounded-md text-white font-sans text-xl outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex'>SignUp</button>
    </div>
</div>
  )
}

export default Navbar