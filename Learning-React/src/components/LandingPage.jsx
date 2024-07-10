import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-.3" className="h-screen w-full pt-0.5">
      <div className="textStructure mt-40 md:mt-36 px-4 md:px-14">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((elem, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width: "10vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration: 1}} className="relative -top-[1vw] md:-top-[0.85vw] mr-2 rounded-md md:h-[5.7vw]">
                    <img
                      className="w-[15vw] md:w-[10vw] rounded-md object-cover"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="text-[10vw] md:text-[7.5vw] leading-[10vw] md:leading-[7vw] tracking-tighter font-[500] font-['Founders_Grotesk_Condensed']">
                  {elem}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-400 mt-16 md:mt-24 flex flex-col md:flex-row md:items-center  justify-between py-16 px-4 md:px-14 md:py-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((elem, index) => {
          return (
            <p
              key={index}
              className="text-md font-[300] md:text-md  tracking-light leading-none mb-2 md:mb-0"
            >
              {elem}
            </p>
          );
        })}
        <div className="startBtn flex items-center gap-2 mt-4 md:mt-0">
          <div className="border border-zinc-500 rounded-[50px] px-4 py-1 font-light text-sm md:text-md">
            START THE PROJECT
          </div>
          <div className="circle p-1.5 flex items-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-45">
              <FaArrowUpLong className="text-zinc-500 text-xs md:text-sm" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
