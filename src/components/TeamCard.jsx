import React from 'react'

const TeamCard = ({image,name,role,para}) => {
  return (
    <div className='h-[40%] md:w-[25vw] flex flex-col items-center'>
       <div className='flex flex-col items-center'>
       <img src={image} alt="Profile" className=' w-[100%] h-[200px] mb-4 hover:scale-110 transition-all duration-80'/>
        <p className='md:text-3xl font-semibold my-2'>{name}</p>
        <p className='md:text-2xl font-normal text-red-500 py-2 mb-4'>{role}</p>
       </div>
        <p className='text-2xl flex text-justify tracking-wide w-[100%] font-normal text-[#8d8f8f]'>{para}</p>
    </div>
  )
}

export default TeamCard