import React, { useEffect, useState } from 'react'

function Eyes() {
   
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const mover = document.querySelector(".blackMover");
    const rect = mover.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = rect.width / 2 - (rect.width * 0.75) / 2;

    if (distance < maxDistance) {
      setPosition({ x, y });
    } else {
      const angle = Math.atan2(y, x);
      setPosition({
        x: Math.cos(angle) * maxDistance,
        y: Math.sin(angle) * maxDistance,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


   const [rotate , setRotate] = useState(0)
   
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX = mouseX - window.innerWidth / 2
      let deltaY = mouseY - window.innerHeight / 2


      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      setRotate(angle-180)
   })
  })
  
   
    return (
      <div className="w-full h-screen text-[#F1F1F1] bg-[#F6F6F6] relative overflow-hidden">
        <div data-scroll data-scroll-speed="-.7" className='w-full h-full relative top-1/2 bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
          <div data-scroll data-scroll-speed = ".2" className="absolute  gap-10 flex top-1/4 left-1/3 -translate-x-[50%] -translate-y-[50%] ">
            <div className="biggest-circle w-[15vw] h-[15vw] bg-zinc-100 rounded-[50%] flex items-center justify-center ">
              <div className="blackMover w-[11vw] h-[11vw]  rounded-[50%] flex items-center justify-center">
                <div
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                  }}
                  className="relative black-circle h-[75%] w-[75%] bg-zinc-900 rounded-[50%] flex items-center justify-center">
                  <h1 className="text-xl">PLAY</h1>
                  <div
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    }}
                    className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5 w-full">
                    <div className="smallest-circle h-5 w-5 bg-zinc-100 rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="biggest-circle w-[15vw] h-[15vw] bg-zinc-100 rounded-[50%] flex items-center justify-center ">
              <div className="blackMover w-[11vw] h-[11vw] rounded-[50%] flex items-center justify-center">
                <div
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                  }}
                  className="relative black-circle h-[75%] w-[75%] bg-zinc-900 rounded-[50%] flex items-center justify-center">
                  <h1 className="text-xl">PLAY</h1>
                  <div
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    }}
                    className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5 w-full">
                    <div className="smallest-circle h-5 w-5 bg-zinc-100 rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Eyes