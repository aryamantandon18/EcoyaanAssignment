import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navRef = useRef(null);
  const showNavbar =()=>{
    if (navRef.current) {
      navRef.current.classList.toggle('responsive');
    }
  }   
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
  return (
   <>
    <div className='md:hidden h-[6vh] md:h-[80px] max-w-screen w-full flex items-center shadow-xl z-10 fixed t-0 bg-white'>
    <FaBars className='w-16 text-2xl cursor-pointer  hover:text-green-500 ' onClick={showNavbar}/>
    <p className='text-2xl md:text-5xl font-sans font-semibold hover:text-green-500 cursor-pointer hover:scale-105 transition ease delay-80'>Ecoyaan</p>
    </div>
    <div className='navbar md:h-[80px] max-w-screen md:w-full flex md:justify-between shadow-xl z-10 fixed t-0 bg-white '
    ref={navRef}  >
    <div className='items-center flex md:gap-5'>
      {windowWidth<768 ? ( <div><FaTimes className='w-16 text-3xl  hover:text-green-500 cursor-pointer  transition ease delay-80 text-' onClick={showNavbar}/> </div>  ) :(
          <img src='https://tse2.mm.bing.net/th?id=OIP.zHP9bm5ZKQ2syBgQxfPOjgHaGx&pid=Api&P=0&h=180' className='w-16 hidden md:block'/>
      )}
        <p className='text-2xl md:text-5xl font-sans font-semibold hover:text-green-500 cursor-pointer hover:scale-105 transition ease delay-80'>Ecoyaan</p>
    </div>
    <div className='navbarLinks font-sans flex md:gap-8 items-center text-lg md:text-2xl'>
        <Link className='transition ease-in-out delay-80  p-2 md:hover:underline underline-offset-[29px] md:font-semibold focus:font-bold  hover:font-bold' to={"/"}>Home</Link>
        <Link className=' transition ease-in-out delay-80 p-2 md:hover:underline underline-offset-[29px] md:font-semibold focus:font-bold hover:font-bold' to={"/about"}>About</Link>
        <Link className=' transition ease-in-out delay-80 p-2 md:hover:underline underline-offset-[29px] md:font-semibold focus:font-bold  hover:font-bold'>Contact</Link>
        <Link className='transition ease-in-out delay-80 p-2 md:hover:underline underline-offset-[29px] md:font-semibold focus:font-bold  hover:font-bold'>Others</Link>
    </div>
    <div className='flex items-center md:p-2 md:gap-6 flex-col md:flex-row navbtnContainer' ref={navRef}>
        <button className='navbtn items-center class="md:w-20 md:px-4 md:py-3 md:bg-green-600 rounded-md md:text-white font-sans md:text-xl outline-none md:focus:ring-4 md:shadow-lg md:transform active:scale-y-75 md:transition-transform flex text-lg'>LogIn</button>
        <button className='navbtn items-center class="md:w-20 md:px-4 md:py-3 md:bg-green-600 rounded-md md:text-white font-sans md:text-xl outline-none md:focus:ring-4 md:shadow-lg md:transform active:scale-y-75 md:transition-transform flex text-lg'>SignUp</button>
    </div>  

</div>
   </>
  )
}

export default Navbar