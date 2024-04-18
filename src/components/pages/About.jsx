import React from 'react'

const About = () => {
  return (
   <>
   <div className='bg-indigo-50 w-[100%] md:h-[70vh] flex px-4 md:px-28 py-24 md:py-36 flex-col md:flex-row'>
  <div className='md:w-[60%]'>
    <section className=' w-[100%] md:w-[70%]'>
    <p className='text-2xl md:text-5xl font-sans font-bold mb-6'>About Ecoyaan</p>
    <p className='text-lg md:text-2xl pb-4 tracking-wide text-gray-800'>At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.</p>
    <p className='text-lg md:text-2xl pb-4 tracking-wide text-gray-800'>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
    <ul className='md:text-xl text-gray-800 list-disc px-6'>
      <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
      <li>Videos, posts, and quizzes on climate change and sustainability</li>
      <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
    </ul>
    </section>
  </div>
  <div className='w-[80%] mt-12 mx-auto md:w-[40%] hover:scale-110 transition ease-in-out delay-100 '>
    <img src='https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png' 
    className='rounded-xl'
    />
  </div>
   </div>
   {/* ---------------------------------------------------------------------------------------- */}
   <div className='bg-yellow-50 w-[100%] h-[70vh] flex px-28 py-12 flex-col'>
    <p className='text-2xl md:text-5xl font-sans font-semibold md:mb-8'>Our Values</p> 
     <div className='flex flex-col'>
      <div className='flex w-[100%] '>
      <div className='flex'>
        <img src='https://ecoyaan.com/images/Trust.png' className='w-[50%] h-[50%]'/>
        <section>
          <p className='md:text-2xl font-semibold tracking-wider mb-1'>Trust</p>
          <p className='text-xl tracking-wide'>We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
        </section>
      </div>
      <div className='flex'>
        <img src='https://ecoyaan.com/images/Authenticity.png' className='w-[50%] h-[50%]'/>
        <section>
          <p className='md:text-2xl font-semibold tracking-wider mb-1'>Authenticity</p>
          <p className='text-xl tracking-wide'>We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.</p>
        </section>
      </div>
     </div>

     <div className='flex '>
      <div className='flex'>
        <img src='https://ecoyaan.com/images/Impact.png' className='w-[50%] h-[50%]'/>
      <section>
      <p className='md:text-2xl font-semibold tracking-wider mb-1'>Impact</p>
        <p className='text-xl tracking-wide'>We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.</p>
      </section>
      </div>
      <div className='flex'>
        <img src='https://ecoyaan.com/images/FunAndEngaging.png' className='w-[50%] h-[50%]'/>
       <section>
       <p className='md:text-2xl font-semibold tracking-wider mb-1'>Fun & Engaging</p>
        <p className='text-xl tracking-wide'>Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>
       </section>
      </div>
     </div>

     </div>
   </div>
{/* __________________________________________________________________________________________________ */}
<div className='bg-indigo-50 w-[100%]  h-[70vh] flex px-28 py-12 flex-col'>
     <p className='text-2xl md:text-5xl font-sans font-semibold md:mb-8'>Our Story</p> 
     
     </div>

   </>
  )
}

export default About