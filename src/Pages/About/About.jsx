import React from 'react'
import './About.css'
import FadeIn from '../../Styles/Reveal'
import { motion } from "framer-motion"; 

function About() {
    return (
        <section>
           <div className='about d-flex text-center pt-24'>
            <motion.h1
              initial={{opacity:0,scale:0.5}}
              whileInView={{opacity:1,scale:1}}
              viewport={{once:true}}
              transition={{duration:1}}
              layoutId='hello'
            >About Page</motion.h1>
           </div>
        </section>

    )
}

export default About