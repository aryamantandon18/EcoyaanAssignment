import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/Home.css'

const Home = () => {
  return (
    <>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={100000}
        className= ''
      >
      <div className='absolute w-screen h-[100%] flex flex-col crim justify-center bg-[url("https://ecoyaan.com/images/carousel-1.png")] bg-cover bg-center' >
         <div className='absolute top-[25%] left-[14%]'>
         <p className='font-bold tracking-wide font-sans text-wrap text-4xl my-3 '>Buy Less, Buy Better!</p>
          <p className='text-2xl my-4'>Authentic source of truth for your sustainability needs.</p>
         <button className='bg-green-600 w-32 h-12 text-white rounded-3xl text-lg font-medium hover:bg-green-700 cursor-pointer'>About Us</button>
         </div>
        </div>
         
        <div>
          <img src="https://ecoyaan.com/images/carousel-2.png" alt="Item1" className='crim'/>
        </div>
        <div>
          <img src="https://ecoyaan.com/images/carousel-3.png" alt="Item3" className='crim'/>
        </div>
      </Carousel> 
      
    </>
  )
}

export default Home;


 {/* <img src="https://ecoyaan.com/images/carousel-1.png" alt="Item1" className='crim' />   */}