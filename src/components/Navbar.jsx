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
    <div className='lg:hidden h-[6vh] md:h-[9vh] lg:h-[80px] max-w-screen w-full flex items-center shadow-xl z-10 fixed t-0 bg-white'>
    <FaBars className='w-16 text-2xl cursor-pointer  hover:text-green-500 ' onClick={showNavbar}/>
    <p className='text-2xl lg:text-5xl font-sans font-semibold hover:text-green-500 cursor-pointer hover:scale-105 transition ease delay-80'>Ecoyaan</p>
    </div>
    <div className='navbar lg:h-[80px] max-w-screen lg:w-full flex lg:justify-between shadow-xl z-10 fixed t-0 bg-white '
    ref={navRef}  >
    <div className='items-center flex lg:gap-5'>
      {windowWidth<1000 ? ( <div><FaTimes className='w-16 text-3xl  hover:text-green-500 cursor-pointer  transition ease delay-80 text-' onClick={showNavbar}/> </div>  ) :(
          <img src='https://tse2.mm.bing.net/th?id=OIP.zHP9bm5ZKQ2syBgQxfPOjgHaGx&pid=Api&P=0&h=180' className='w-16 hidden lg:block'/>
      )}
        <p className='text-2xl lg:text-5xl font-sans font-semibold hover:text-green-500 cursor-pointer hover:scale-105 transition ease delay-80'>Ecoyaan</p>
    </div>
    <div className='navbarLinks font-sans flex lg:gap-8 items-center text-lg lg:text-2xl'>
        <Link className='transition ease-in-out delay-80  p-2 lg:hover:underline underline-offset-[29px] lg:font-semibold focus:font-bold  hover:font-bold' to={"/"} onClick={showNavbar}>Home</Link>
        <Link className=' transition ease-in-out delay-80 p-2 lg:hover:underline underline-offset-[29px] lg:font-semibold focus:font-bold hover:font-bold' to={"/about"} onClick={showNavbar}>About</Link>
        <Link className=' transition ease-in-out delay-80 p-2 lg:hover:underline underline-offset-[29px] lg:font-semibold focus:font-bold  hover:font-bold' onClick={showNavbar}>Contact</Link>
        <Link className='transition ease-in-out delay-80 p-2 lg:hover:underline underline-offset-[29px] lg:font-semibold focus:font-bold  hover:font-bold' onClick={showNavbar}>Others</Link>
    </div>
    <div className='flex items-center lg:p-2 lg:gap-6 flex-col lg:flex-row navbtnContainer' ref={navRef}>
        <button className='navbtn items-center class="lg:w-20 lg:px-4 lg:py-3 lg:bg-green-600 rounded-md lg:text-white font-sans lg:text-xl outline-none lg:focus:ring-4 lg:shadow-lg lg:transform active:scale-y-75 lg:transition-transform flex text-lg' onClick={showNavbar}>LogIn</button>
        <button className='navbtn items-center class="lg:w-20 lg:px-4 lg:py-3 lg:bg-green-600 rounded-md lg:text-white font-sans lg:text-xl outline-none lg:focus:ring-4 lg:shadow-lg lg:transform active:scale-y-75 lg:transition-transform flex text-lg' onClick={showNavbar}>SignUp</button>
    </div>  

</div>
   </>
  )
}

export default Navbar