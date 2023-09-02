import React, { useState } from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'
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
        <FaArrowCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}/>
      </div>
  )
}

export default ScrollUp
