
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
function Featured() {
  const featuredData = [
    {
      name: "FYDE",
      image:
        "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
      h4Content: ["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"],
    },
    {
      name: "VISE",
      image:
        "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      h4Content: ["AGENCY", "COMPANY PRESENTATION"],
    },
  ];

  const featuredData2 = [
    {
      name: "TRAWA",
      image:
        "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
      h4Content: ["BRAND IDENTITY", "DESIGN RESEARCH ", "INVESTOR DECK"],
    },
    {
      name: "TRAWA",
      image:
        "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
      h4Content: ["BRANDED TEMPELATE"],
    },
  ];

 const [hoveringIndex, setHoveringIndex] = useState(null);

  

  return (
    <div className="min-h-[100vh] w-full bg-[#F1F1F1] text-[#212121] ">
      <div className="h-[14vw] w-full flex items-end px-14 py-8 border-b border-zinc-700">
        <h1 className='text-[4vw] tracking-tighter font-["Neue_Montreal"]'>
          Featured projects
        </h1>
      </div>
      <div className="relative min-h-screen w-full px-14 py-14 flex gap-5">
        {featuredData.map((elem, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() =>
                (index === 0 || index === 1) && setHoveringIndex(index)
              }
              onMouseLeave={() =>
                (index === 0 || index === 1) && setHoveringIndex(null)
              }
              className="w-[50%] flex flex-col gap-4">
              <h4 className="flex items-center gap-2 font-[300]">
                <FaCircle className="text-[0.8vw]"></FaCircle> {elem.name}
              </h4>
              <div className="box">
                <img className="rounded-xl" src={elem.image} alt="" />
              </div>
              <div className="flex items-center gap-2">
                {elem.h4Content.map((e, index) => (
                  <h4
                    key={index}
                    className="px-4 py-1 border border-[#212121] rounded-full inline-block">
                    {e}
                  </h4>
                ))}
              </div>
            </div>
          );
        })}
        <h1 className="absolute overflow-hidden top-[40%] left-[44%] -transform-x-[50%] -transform-y-[50%] text-[6vw] font-[700] tracking-tighter text-[#CDEA68]">
          {"FYDE".split("").map((e, index) => (
            <motion.span
              initial={{ y: "100%" }}
              animate={hoveringIndex === 0 ? { y: "0" } : { y: "100%" }}
              transition={{ easeIn: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="inline-block"
              key={index}>
              {e}
            </motion.span>
          ))}
        </h1>
        <h1 className=" absolute overflow-hidden top-[40%] left-[44%] -transform-x-[50%] -transform-y-[50%] text-[6vw] font-[700] tracking-tighter text-[#CDEA68]">
          {"VISE".split("").map((e, index) => (
            <motion.span
              initial={{ y: "100%" }}
              animate={hoveringIndex === 1 ? { y: "0" } : { y: "100%" }}
              transition={{ easeIn: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="inline-block"
              key={index}>
              {e}
            </motion.span>
          ))}
        </h1>
      </div>
      <div className="relative min-h-screen w-full px-14 py-14 flex gap-5">
        {featuredData2.map((elem, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() =>
                (index === 0 || index === 1) && setHoveringIndex(index)
              }
              onMouseLeave={() =>
                (index === 0 || index === 1) && setHoveringIndex(null)
              }
              className="w-[50%] flex flex-col gap-4">
              <h4 className="flex items-center gap-2 font-[300]">
                <FaCircle className="text-[0.8vw]"></FaCircle> {elem.name}
              </h4>
              <div className="box">
                <img className="rounded-xl" src={elem.image} alt="" />
              </div>
              <div className="flex items-center gap-2">
                {elem.h4Content.map((e, index) => (
                  <h4
                    key={index}
                    className="px-4 py-1 border border-[#212121] rounded-full inline-block">
                    {e}
                  </h4>
                ))}
              </div>
            </div>
          );
        })}
        <h1 className="absolute overflow-hidden top-[40%] left-[40%] -transform-x-[50%] -transform-y-[50%] text-[6vw] font-[700] tracking-tighter text-[#CDEA68]">
          {"TRAWA".split("").map((e, index) => (
            <motion.span
              initial={{ y: "100%" }}
              animate={hoveringIndex === 0 ? { y: "0" } : { y: "100%" }}
              transition={{ easeIn: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="inline-block"
              key={index}>
              {e}
            </motion.span>
          ))}
        </h1>
        <h1 className=" absolute overflow-hidden top-[40%] left-[38%] -transform-x-[50%] -transform-y-[50%] text-[6vw] font-[700] tracking-tighter text-[#CDEA68]">
          {"PREMIUM".split("").map((e, index) => (
            <motion.span
              initial={{ y: "100%" }}
              animate={hoveringIndex === 1 ? { y: "0" } : { y: "100%" }}
              transition={{ easeIn: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="inline-block"
              key={index}>
              {e}
            </motion.span>
          ))}
        </h1>
      </div>
      <div className="h-[50vh] w-full flex items-center justify-center">
        <h1 className='text-[#f1f1f1] bg-[#212121] px-4 py-4 font-["Neue_Montreal"] font-[500] flex items-center gap-10 rounded-full '>
          VIEW ALL CASE STUDIES <FaCircle className="text-[0.8vw]"></FaCircle>
        </h1>
      </div>
    </div>
  );
}

export default Featured;
