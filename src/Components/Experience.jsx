import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../Constants";
import { OrbitControls } from "@react-three/drei";
import Loader from "./Loader";
import Developer from "./Developer";

const Experience = () => {

const [animationName, setanimationName] = useState("idle");


  return (
    <section className="c-space my-20 lg:pt-30">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
                <ambientLight intensity={.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[50,80,50]} intensity={7} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} />
                <Suspense fallback={<Loader />}>
                    <Developer animationName={animationName} position-y={-3} rotation-x={.3} scale={3} />
                </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ name, pos, duration, title, animation, id, icon }) => (
                  <div key={id} onClick={()=>setanimationName(animation.toLowerCase())} onPointerOver={()=>setanimationName(animation.toLowerCase())} onPointerLeave={()=>setanimationName("idle")} className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5 ">
                        <p className="font-bold text-white-800">{name}</p>
                        <p className="text-sm mb-5">{pos} - {duration}</p>
                        <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
