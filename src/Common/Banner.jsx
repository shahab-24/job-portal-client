import React from 'react';
import { easeOut, motion } from "framer-motion";
import team3 from '../../src/assets/team/team3.jpg'
import team4 from '../../src/assets/team/team4.jpg'

const Banner = () => {
	return (
		<div className="hero bg-base-200 min-h-screen max-w-7xl mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse  px-20">
    <div className='flexl-1 mr-20'>
	<motion.img animate={{y: [50, 100, 50]}}
  transition={{duration:10, delay: 2, repeat: Infinity}}
  

      src={team3}
      className="max-w-sm w-72 rounded-3xl rounded-bl-none border-l-4 border-b-4 border-blue-400" />

<motion.img animate={{x: [150, 100, 150]}}
  transition={{duration:10, delay: 2, repeat: Infinity}}
  

      src={team4}
      className="max-w-sm w-72 rounded-3xl rounded-bl-none border-l-4 border-b-4 border-blue-400" />
      

      
	</div>
    <div className='flex-1'>
      
      <motion.h1 animate={{y: 50}} transition={{duration: 2, delay: 1, ease: easeOut, repeat: Infinity}}className="text-5xl font-bold py-10"> Latest 
		<motion.span animate={{color:['#a83232', '#a6a832', '#32a8a2']}}transition={{duration: 1.5, delay: 1, repeat: Infinity}}> Jobs </motion.span>
		 News! </motion.h1>
      <p className="py-6 w-[50%]">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>	
	);
};

export default Banner;