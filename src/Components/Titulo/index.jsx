import React from "react";
import { motion } from "framer-motion"

const Titulo = ()=>{

    return(
       
        <motion.h1 
        initial={{ opacity: 0, scale: 0.5,rotateY:-180 }}
    animate={{ opacity: 1, scale: 1,y:0,rotateY:0 }}
    transition={{ duration: 2, }}>Probando animaciones</motion.h1>
    )
};
export {Titulo}