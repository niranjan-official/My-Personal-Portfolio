import React, { Suspense } from "react";
import "./Main.css";
import MainPage from "../../components/Main-Page/MainPage";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";



function Main() {
  return (
    <>
      <Navbar />
      <motion.div
        // variants={{
        //     hidden: {opacity:0, y:150},
        //     visible: {opacity:1,y:0}
        // }}
        // initial="hidden"
        // animate="visible"
        // transition={{duration:0.5,delay:0.25}}
      >
        <MainPage />
      </motion.div>
    </>
  );
}

export default Main;
