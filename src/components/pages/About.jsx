import React from 'react'
import { Link } from 'react-router-dom'
import TeamCard from '../TeamCard'

const About = () => {
  const TeamData=[
    {
      image:"https://ecoyaan.com/images/about-us-social-media-team-01.png",
      name:"Shruti",
      role:"SOCIAL MEDIA",
      para:"Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business",

    },{
      image:"https://ecoyaan.com/images/about-us-social-media-team-02.png",
      name:"URMIL",
      role:"SOCIAL MEDIA",
      para:"Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business",
    },{
        image:"https://ecoyaan.com/images/about-us-product-team-01.png",
        name:"DIVYA",
        role:"UX DESIGN",
        para:"Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on",
      },{
        image:"https://ecoyaan.com/images/about-us-product-team-02.png",
        name:"PRASHANITH",
        role:"ENGINEERING",
        para:"Prashanith is our front-end engineer, who brings the UX designs to life"
      },{
        image:"https://ecoyaan.com/images/about-us-product-team-03.png",
        name:"SAI ABHILASH",
        role:"ENGINEERING",
        para:"Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform",
      },{
        image:"https://ecoyaan.com/images/favicon.png",
        name:"???",
        role:"TEAM ECOYAAN",
        para:"This spot awaits you. Check out our"
      }

  ]
  return (
   <>
   <div className='bg-indigo-50 w-[100%] md:h-[70vh] flex px-4 md:px-28 py-16 md:py-36 flex-col md:flex-row'>
  <div className='md:w-[60%]'>
    <section className=' w-[100%] md:w-[70%] text-justify'>
    <p className='text-2xl md:text-5xl font-sans font-bold mb-6'>About Ecoyaan</p>
    <p className='text-md md:text-2xl pb-4 tracking-wide text-gray-800'>At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.</p>
    <p className='text-md md:text-2xl pb-4 tracking-wide text-gray-800'>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
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
   <div className='bg-[#fefce8] w-[100%] md:h-[70vh] flex px-4 md:px-28 py-12 flex-col'>
    <p className='text-2xl md:text-5xl font-sans font-bold mb-6 '>Our Values</p> 
     <div className='flex flex-col text-justify'>
      <div className='flex md:flex-row flex-col w-[100%] '>
      <div className='flex md:flex-row flex-col '>
        <img src='https://ecoyaan.com/images/Trust.png' className=' w-[100%] md:w-[50%] md:h-[50%]'/>
        <section>
          <p className='text-xl md:text-2xl font-semibold tracking-wider mb-1'>Trust</p>
          <p className='text-md md:text-xl tracking-wide'>We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
        </section>
      </div>
      <div className=' flex md:flex-row flex-col text-justify'>
        <img src='https://ecoyaan.com/images/Authenticity.png' className='w-[100%] md:w-[50%] md:h-[50%]'/>
        <section>
          <p className='text-xl md:text-2xl font-semibold tracking-wider mb-1'>Authenticity</p>
          <p className='text-md md:text-xl tracking-wide'>We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.</p>
        </section>
      </div>
     </div>

     <div className='flex md:flex-row flex-col w-[100%]  '>
      <div className='flex md:flex-row flex-col text-justify'>
        <img src='https://ecoyaan.com/images/Impact.png' className='w-[100%] md:w-[50%] md:h-[50%]'/>
      <section>
      <p className='text-xl md:text-2xl font-semibold tracking-wider mb-1'>Impact</p>
        <p className='text-md md:text-xl tracking-wide'>We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.</p>
      </section>
      </div>
      <div className='flex md:flex-row flex-col text-justify'>
        <img src='https://ecoyaan.com/images/FunAndEngaging.png' className='w-[100%] md:w-[50%] md:h-[50%]'/>
       <section>
       <p className='text-xl md:text-2xl font-semibold tracking-wider mb-1'>Fun & Engaging</p>
        <p className='text-md md:text-xl tracking-wide'>Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>
       </section>
      </div>
     </div>

     </div>
   </div>
{/* __________________________________________________________________________________________________ */}
<div className='bg-indigo-50 w-[100%]  md:h-[80vh] flex px-4 md:px-28 py-10 flex-col'>
     <p className='text-2xl md:text-5xl font-sans font-semibold md:mb-8'>Our Story</p> 
     <div className='flex md:flex-row flex-col'>
      <div className='flex flex-col md:w-[20%]'>
       <img src='https://ecoyaan.com/images/about-us-founding-team-01.png' className='ml-20 md:ml-0 w-[50%] md:w-[90%] mb-7 hover:scale-105 transition-all delay-80'/>
       <img src='https://ecoyaan.com/images/about-us-founding-team-02.png' className='ml-20 md:ml-0 w-[50%] md:w-[90%] hover:scale-105 transition-all delay-80'/>
      </div>
      <div className='text-justify'>
        <p className='md:text-2xl mx-2 md:mx-9 my-8 font-sans font-normal tracking-normal'>We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.</p>
        <p className='md:text-2xl mx-2 md:mx-9 my-8 font-sans font-normal tracking-normal'>Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.</p>
        <p className='md:text-2xl mx-2 md:mx-9 my-8 font-sans font-normal tracking-normal'>We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.</p>
        <p className='md:text-2xl mx-2 md:mx-9 my-8 font-sans font-normal tracking-normal'>As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.</p>
        <p className='md:text-2xl mx-2 md:mx-9 my-8 font-sans font-normal tracking-normal'>Connect with the founders on LinkedIn here:<Link>Abhishek Rao</Link> <Link>Sarwanjeet Singh</Link></p>
      </div>
      </div>
     </div>

     <div className='bg-[#fefce8] md:w-[100%] md:h-[120vh] flex px-4 md:px-28 py-10 flex-col gap-6'>
      <p className='text-2xl md:text-5xl font-sans font-semibold md:mb-8'>Meet the Team</p>
     <div className='flex md:gap-20 md:flex-row flex-col'>
     {TeamData && TeamData.slice(0,3).map((item)=>(
        <TeamCard name={item.name} image={item.image} role={item.role} para={item.para}/>
      ))}
     </div>
     <div className='flex md:gap-20 md:flex-row flex-col'>
     {TeamData && TeamData.slice(3).map((item)=>(
        <TeamCard name={item.name} image={item.image} role={item.role} para={item.para}/>
      ))}
     </div>
     </div>
   </>
  )
}

export default About