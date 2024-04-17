import React from 'react'

const About = () => {
  return (
   <>
   <div className='bg-indigo-50 w-[100%] h-[70vh] flex px-32 py-36'>
  <div className='w-[60%]'>
    <section className=' w-[70%]'>
    <p className='text-5xl font-sans font-semibold mb-6'>About Ecoyaan</p>
    <p className='text-2xl pb-4 tracking-wide text-gray-800'>At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.</p>
    <p className='text-2xl pb-4 tracking-wide text-gray-800'>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
    <ul className='text-xl text-gray-800 list-disc px-6'>
      <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
      <li>Videos, posts, and quizzes on climate change and sustainability</li>
      <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
    </ul>
    </section>
  </div>
  <div className='w-[40%]'>
    <img src='https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png'/>
  </div>
   </div>
   <div className='bg-yellow-50 w-[100%] h-[70vh] flex px-32 py-16'>
    <p className='text-5xl font-sans font-semibold'>Our Values</p>
    
   </div>

   </>
  )
}

export default About