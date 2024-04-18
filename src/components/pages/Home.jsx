import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/Home.css'
import image2 from '../../images/th.jpeg'
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
     <div className=''>
     <Carousel
        infiniteLoop
        autoPlay
        useKeyboardArrows
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        showIndicators={true}
        interval={100000}
        className= 'banner'
      >
      <div className=' w-[100%] h-[70%] bg-[url("https://ecoyaan.com/images/carousel-1.png")] bg-cover bg-center' >
         <div className='absolute left-[14%] top-[24%] banDiv flex flex-col items-start'>
         <p className='font-bold tracking-wide  text-4xl my-3 heading'>Buy Less,Buy Better!</p>
          <p className='md:text-2xl my-4 para'>Authentic source of truth for your sustainability needs.</p>
          <Link to={"/about"}><button className='bg-green-600 w-32 h-12 text-white rounded-3xl text-lg font-medium hover:bg-green-700 cursor-pointer btn'>About Us</button></Link>
         </div>
        </div>
         
        <div className='w-[100%] h-[70%] bg-[url("https://ecoyaan.com/images/carousel-2.png")] bg-cover bg-center' >
        <div className='absolute left-[14%] top-[24%] banDiv flex flex-col items-start'>
         <p className='font-bold tracking-wide  text-4xl my-3 heading'>Buy Less,Buy Better!</p>
          <p className='md:text-2xl my-4 para'>Authentic source of truth for your sustainability needs.</p>
         <button className='bg-green-600 w-32 h-12 text-white rounded-3xl text-lg font-medium hover:bg-green-700 cursor-pointer btn'>About Us</button>
         </div>
        </div>

        <div className='w-[100%] h-[70%] bg-[url("https://ecoyaan.com/images/carousel-3.png")] bg-cover bg-center' >
        <div className='absolute left-[14%] top-[24%] banDiv flex flex-col items-start'>
         <p className='font-bold tracking-wide  text-4xl my-3 heading'>Buy Less,Buy Better!</p>
          <p className='md:text-2xl my-4 para'>Authentic source of truth for your sustainability needs.</p>
        <Link to={"/about"}><button className='bg-green-600 w-32 h-12 text-white rounded-3xl text-lg font-medium hover:bg-green-700 cursor-pointer btn'>About Us</button></Link>
         </div>
        </div>
        <div className=''>
          <img src="https://ecoyaan.com/images/carousel-3.png" alt="Item3" className='hidden'/>
        </div>
      </Carousel> 
     </div>

      <div className='h-[70vh] md:h-[80vh] md:bg-green-100 flex md:-my-14 home2 '>
     <div className=' box w-full md:w-[60%] bg-white h-[70%] my-auto md:rounded-r-[100px] flex flex-col justify-center '> 
      <section className='w-[70%] mx-auto md:pr-28 break-all'>
      <p className='boxHeading text-2xl md:text-4xl font-sans font-semibold flex flex-wrap md:tracking-wide mb-6'>Join our community in creating a more sustainable future for everyone</p>
     <p className=' boxPara text-xl md:mb-4 md:flex-wrap flex-shrink-3'>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</p>
     <p className='text-xl flex-wrap pb-4'>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
      </section>
     </div>

     <img src='https://ecoyaan.com/images/Impact.png' alt='image2' className=' joinImage md:h-[46vh] md:w-[40%] relative md:top-[18%] top-[13%]'/>     
      </div>
      
      
      <div className='h-[100vh] md:h-[80vh] md:bg-green-100 flex md:-my-14 home2'>
      <img src={image2} alt='image2' className=' joinImage h-[50vh] md:w-[40%] relative md:top-[18%] top-[70%] rounded-full p-10'/>  
     <div className='box w-full md:w-[60%] bg-white h-[70%] my-auto md:rounded-l-[100px] flex flex-col justify-center relative md:-top-0 -top-64'> 
      <section className='w-[70%] mx-auto md:pr-28 break-all'>
      <p className='text-2xl md:text-4xl font-sans font-semibold flex flex-wrap tracking-wide mb-6 '>Carefully curated Eco-friendly products</p>
     <p className='text-xl mb-4 flex-wrap '>We believe that every purchase you make can have a positive impact on the planet and the future.</p>
     <p className='text-xl flex-wrap '>Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</p>
      </section>
     </div>   
      </div>

      <div className='h-[120vh] md:h-[80vh] md:bg-green-100 flex md:-my-14 home2 '>
     <div className='box w-full md:w-[60%] bg-white h-[70%] my-auto md:rounded-r-[100px] flex flex-col justify-center '> 
      <section className='w-[70%] mx-auto md:pr-28 break-all '>
      <p className='text-2xl md:text-4xl font-sans font-semibold flex flex-wrap tracking-wide mb-6 '>For businesses that care deeply about sustainability</p>
     <p className='text-xl mb-4 flex flex-wrap '>Do you run a business that is committed to sustainability in every aspect of your work?</p>
     <p className='text-xl mb-4 flex flex-wrap'>Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?</p>
     <p className='text-xl flex flex-wrap mb-5'>If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:</p>
     <button className='bg-green-600 md:w-32 w-24 md:h-12 text-white rounded-3xl md:text-lg font-medium hover:bg-green-700 cursor-pointer p-2'>Contact us</button>
      </section>
     </div>

      <div className='md:w-[40%]'>
      <img src='https://ecoyaan.com/images/OurStory4.png' alt='image2' className=' mx-auto joinImage md:h-[46vh] md:w-[80%] relative md:top-[18%] -top-16'/>     
      </div>
      </div>
    </>
  )
}

export default Home;


 {/* <img src="https://ecoyaan.com/images/carousel-1.png" alt="Item1" className='crim' />   */}