/** @format */

import React from "react";
import { FaRegCircle } from "react-icons/fa6";

function About() {
  return (
    <div data-scroll data-section data-scroll-speed="-.3" className="min-h-screen w-full bg-[#CDEA68] rounded-3xl text-[#212121] font-['Neue_Montreal']">
      <div className="upperText flex items-center px-6 md:px-14 h-[50vh] w-full border-b-[1px] border-[#99AD53]">
        <h2 className="font-['Neue_Montreal'] text-[6vw] md:text-[4vw] leading-[6vw] md:leading-[4vw] font-[400] mt-6 md:mt-12">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h2>
      </div>
      <div className="lowerText px-6 md:px-14 py-5 flex flex-col md:flex-row items-start md:items-stretch justify-between w-full h-auto md:h-[50vh]">
        <p className="w-full md:w-[30%] text-[4vw] md:text-[2vw] mb-4 md:mb-0">
          What you can expect:
        </p>
        <div className="middleText w-full md:w-[50%] h-full md:mr-[8vw] flex flex-col gap-6">
          <p className="w-full md:w-[90%] text-[3vw] md:text-[1.5vw] self-center">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="w-full md:w-[90%] text-[3vw] md:text-[1.5vw] self-center">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="w-full md:w-[20%] h-full flex flex-col justify-center">
          {["Instagram", "Behance", "Facebook", "LinkedIn"].map(
            (elem, index) => {
              return (
                <a
                  key={index}
                  className="text-[3vw] md:text-[1.5vw] mb-2 md:mb-0">
                  {elem}
                </a>
              );
            }
          )}
        </div>
      </div>
      <div className="aboutImg h-auto md:h-[80vh] border-t border-[#99ad53] flex flex-col md:flex-row items-start justify-between px-6 md:px-14 py-6 md:py-0">
        <div className="text w-full md:w-[50%] mb-4 md:mb-0">
          <h1 className="text-[6vw] md:text-[4vw] tracking-tight font-[450]">
            Our approach:
          </h1>
          <button className="py-4 px-8 bg-[#212121] text-white mt-[1.5vw] md:mt-[0.7vw] rounded-full flex items-center gap-4 md:gap-10">
            READ MORE{" "}
            <FaRegCircle className="bg-white rounded-full text-[1.5vw] md:text-[0.7vw]" />
          </button>
        </div>
        <div className="photo w-full md:w-[50%] flex items-center justify-center p-5">
          <img
            className="h-[85%] w-full rounded-xl overflow-hidden object-fill"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
