import React from 'react'
import { motion } from 'framer-motion'
import {PropTypes} from 'prop-types'


function Fade({children,width}) {
  return (
    <motion.div
        style={{position:"relative",width}}
        variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1,y:0}
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
      transition={{duration:2}}
    >
      {children}
    </motion.div>
  )
}
    Fade.propTypes={
    children:PropTypes.element.isRequired,
    width:PropTypes.oneOf(['fit-content','100%'])
  }
    Fade.defaultProps = {
    width: 'fit-content'
  }

export default Fade
