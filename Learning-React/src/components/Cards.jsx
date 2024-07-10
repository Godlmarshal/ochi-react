import React from 'react'

function Cards() {
  return (
    <div className="h-[80vh] w-full flex px-14 gap-5 mt-[8vw]">
      <div className=" relative h-[70%] w-[50%] rounded-xl bg-[#004D43] flex items-center justify-center">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <h4 className=" top-[85%] left-[5%] absolute px-4 py-1 border w-fit border-[#CDEA68] text-[#CDEA68] rounded-full mb-2 text-sm font-[600]">
          &copy;2019-2022
        </h4>
      </div>
      <div className="relative h-[70%] w-[25%] rounded-xl bg-[#212121] flex items-center justify-center">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          alt=""
        />
        <h4 className=" top-[85%] left-[5%] absolute px-4 py-1 border w-fit border-[#F1F1F1] text-[#F1F1F1] tracking-tighter rounded-full mb-2 text-sm font-[600]">
          RATING 5.0 ON CLUTCH
        </h4>
      </div>
      <div className="relative h-[70%] w-[25%] rounded-xl bg-[#212121] flex items-center justify-center">
        <img
          height={50}
          width={125}
          src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          alt=""
        />
        <h4 className=" top-[85%] left-[5%] absolute px-4 py-1 border w-fit border-[#F1F1F1] text-[#F1F1F1] tracking-tighter rounded-full mb-2 text-sm font-[600]">
          BUSINESS BOOTCAMP ALUMNI
        </h4>
      </div>
    </div>
  );
}

export default Cards