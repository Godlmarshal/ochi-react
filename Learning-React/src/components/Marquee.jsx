
import { motion } from "framer-motion";

import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = ".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl text-[#F1F1F1]  bg-[#004D43]">
      <div className="moveText  border-t border-b border-zinc-500 whitespace-nowrap flex   overflow-hidden">
        <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className="text-[22vw] font-['Founders_Grotesk_Condensed'] font-[600]  tracking-tighter -mb-[8vw] pr-16 ">
          WE ARE OCHI
        </motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10 }} className="text-[22vw] font-['Founders_Grotesk_Condensed'] font-[600] tracking-tighter -mb-[8vw] pr-16">
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
