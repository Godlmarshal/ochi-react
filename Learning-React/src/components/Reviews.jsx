/** @format */

import React from "react";

function Reviews() {
    const borderTexts = [
      {
        company: "Planetly",
        contact: "Nina Walloch",
        status: "READ",
      },
      {
        company: "Workiz Easy",
        contact: "Tomer Levy",
        status: "READ",
      },
      {
        company: "Premium Blend",
        contact: "Ellen Kim",
        status: "READ",
      },
      {
        company: "Hypercare Systems",
        contact: "Brendan Goss",
        status: "READ",
      },
      {
        company: "Officevibe",
        contact: "Raff Labrie",
        status: "READ",
      },
      {
        company: "Orderlion",
        contact: "Stefan Strohmer",
        status: "READ",
      },
      {
        company: "Black Book",
        services: "Services",
        contact: "Jaci Smith",
        status: "READ",
      },
      {
        company: "Trawa Energy",
        contact: "David Budde",
        status: "READ",
      },
    ];



  return (
    <div className="min-h-screen w-full text-[#212121] font-['Neue_Montreal']">
      <div className="h-[9vw] w-full  flex items-end px-14 py-6 border-b border-zinc-400">
        <h1 className="text-[4vw] font-[500]">Clients' reviews</h1>
      </div>
      <div className="h-[calc(100vh-9vw)] w-full  px-14 py-5 flex items-center">
        <div className="w-[50%] h-full  flex">
          <div className="w-[50%] h-full">
            <a href="#" className=" underline">
              Karman Ventures
            </a>
          </div>
          <div className="w-[50%] h-full flex-col flex gap-[6vw]">
            <a href="#">Services:</a>
            <div>
              <h4 className="px-4 py-1 border w-fit border-[#212121] rounded-full mb-2 text-sm ">
                INVESTOR DECK
              </h4>
              <h4 className="px-4 py-1 border w-fit border-[#212121] rounded-full text-sm ">
                SALES DECK
              </h4>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full ">
          <div className="h-8  flex items-center justify-between">
            <a href="#">William Barnes</a>
            <a className="text-zinc-400 text-md" href="#">
              READ
            </a>
          </div>
          <div className="h-[calc((100vh-9vw)-8rem)] w-[70%] grid place-items-start place-content-end">
            <div className="mb-6">
              <img
                height={100}
                width={100}
                className="rounded-xl"
                src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                alt=""
              />
            </div>
            <p className=" leading-[2vw]  text-md">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
          </div>
          <div className="borderTexts w-full h-[75vh] border-t border-zinc-400">
              {borderTexts.map((borderText, index) => (
                <div key={index} className="borderText w-[100%] h-[9vh] flex items-center justify-between border-b border-zinc-400 px-14">
                  <div className="text-md underline text-[#212121]">{borderText.contact}</div>
                  <div className="text-md  text-[#212121]">{borderText.company}</div>
                  <div className="text-md underline text-[#212121]">{borderText.status}</div>
                </div>
              ))}
          </div>
    </div>
  );
}

export default Reviews;
