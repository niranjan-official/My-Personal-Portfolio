import React from 'react'

const SkillBox = ({icon, title, description}) => {
    console.log(icon);
  return (
    <div className="h-full flex flex-col items-center text-center justify-center bg-primary rounded-[0.4rem] shadow-md p-4 text-black">
        <img src={icon} className='w-44 h-44' alt="" />
        <h3 className='font-bold text-xl'>{title}</h3>
        <p className='text-sm mt-4'>{description}</p>
    </div>
  )
}

export default SkillBox
