import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import './ScrollUp.css'

function ScrollUp() {

    const [visible,setVisible] = useState(false)

    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if(scrolled>300){
            setVisible(true);
        }else{
            setVisible(false)
        }
    }
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behaviour: 'smooth'
        })
    }
    window.addEventListener('scroll',toggleVisible)
  return (
      <div className='scrollButton' >
        <FaArrowUp className='text-primary bg-black p-2 shadow-md rounded-full' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}/>
      </div>
  )
}

export default ScrollUp
