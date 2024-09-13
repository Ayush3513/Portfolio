import React, { Suspense, useState } from "react";
import { myProjects } from "../Constants/index.js";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import Loader from "../Components/Loader.jsx"
import Comupter from "./Comupter.jsx";

const Projects = () => {


  const [currentIndex, setcurrentIndex] = useState(0);
  const currentProject = myProjects[currentIndex]

  const handleNavigation = ( direction) => {
    setcurrentIndex(prevI => {
      if(direction === "previous") {
        return prevI === 0? myProjects.length - 1 : prevI - 1
      }
      else if (direction === "next") {
        return prevI === myProjects.length - 1? 0 : prevI + 1
      }
    })
  }

  return (
    <section className="c-space my-20 xl:mt-[-27vw]">
      <p className="head-text">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="relative flex flex-col gap-5  sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 absolute top-0 right-0 object-cover rounded-xl"
            />
          

          <div
            className="p-3 backdrop:filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt=""
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag,i)=>(
                <div key={i} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>  
              ))}
            </div>

            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank">
                    <p>Check Live Site</p>
                    <img src="/assets/arrow-up.png" alt="" rel="noreferrer" className="w-3 h-3" />
                  </a>
          </div>

          <div className="flex justify-between  items-center mt-7">
            <button className="arrow-btn " onClick={()=> handleNavigation("previous")}>
              <img className="h-4 w-4" src="/assets/left-arrow.png" alt="" />
            </button>
            <button className="arrow-btn " onClick={()=> handleNavigation("next")}>
              <img className="h-4 w-4" src="/assets/right-arrow.png" alt="" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10,10,10]} intensity={2} />
            <Center >
              <Suspense fallback={<Loader />}>
                  <group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                    <Comupter txt={currentProject.texture} />
                  </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI /2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
