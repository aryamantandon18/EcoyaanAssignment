import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[80px] w-full flex justify-between shadow-xl z-10 static '>
    <div className='w-16 h-16 items-center flex  gap-5'>
        <img src='https://tse2.mm.bing.net/th?id=OIP.zHP9bm5ZKQ2syBgQxfPOjgHaGx&pid=Api&P=0&h=180'/>
        <p className='text-4xl font-sans font-semibold hover:text-green-400 cursor-pointer'>Ecoyaan</p>
    </div>
    <div className='font-sans flex gap-8 items-center text-2xl  '>
        <Link className='transition ease-in-out delay-80  p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold  hover:text-green-400'>Home</Link>
        <Link className=' transition ease-in-out delay-80 p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold  hover:text-green-400'>About</Link>
        <Link className=' transition ease-in-out delay-80 p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold  hover:text-green-400'>Contact</Link>
        <Link className='transition ease-in-out delay-80 p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold  hover:text-green-400'>Others</Link>
    </div>
    <div className='flex items-center p-2 gap-6'>
        <button className='class="w-20 px-4 py-3 bg-green-600 rounded-md text-white font-sans text-xl outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex'>LogIn</button>
        <button className='class="w-20 px-4 py-3 bg-green-600 rounded-md text-white font-sans text-xl outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex'>SignUp</button>
    </div>
</div>
  )
}

export default Navbar