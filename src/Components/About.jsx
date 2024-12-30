import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "./Button"

const About = () => {

  const [isCopy, setisCopy] = useState(false);

  const copyHandler = ()=>{
    navigator.clipboard.writeText("ayushchavda2020@gmail.com")

    setisCopy(true)

    setTimeout(() => {
      setisCopy(false)
    }, 1500);
  }

  return (
    <section id="about" className="c-space my-20 lg:pt-28">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 w-full ">
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              className="w-full sm:h-[276px] h-fit object-contain"
              src="/assets/grid1.png"
              alt="grid-1"
            />
            <div className="">
              <p className="grid-headtext">Hi,I'm Ayush</p>
              <p className="grid-subtext">
              Hi, I'm Ayush. I craft interactive, scalable web solutions using React, Next.js, AWS, animations, and modern web technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-2 ">
          <div className="grid-container">
            <img
              className="w-full sm:h-[276px] h-fit object-contain"
              src="/assets/grid2.png"
              alt="grid-2"
            />
            <div className="">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                React | Next | Node | Express | MongoDB | Posgresql | AWS | Docker | CI/CD | Redux | TypeScript | TailwindCSS |  GSAP | Framer Motion
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 xl:mb-[8vw] ">
          <div className="grid-container ">
            <div className="rounded-3xl w-full sm:h-[320px]  flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
              
            </div>
            <div className="">
                <p className="grid-headtext">I work remotely across most timezones.</p>
                <p className="grid-subtext">
                  I'm based on India, with remote work available.
                </p>
               <a href="#contact">
               <Button name="Contact Me" isBeam classContainer="w-full mt-16" />
               </a>
              </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 xl:mb-[13vw] ">
          <div className="grid-container ">
            <img className="w-full sm:h-[266px] h-fit object-contain" src="/assets/grid3.png" alt="grid-3"  />
            <div className="space-y-4 xl:pt-32">
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Code isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2 xl:mt-[-8vw] xl:mb-[13vw] ">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[226px] sm:h-[276px] h-fit object-cover sm:object-top"/>
            <div className="space-y-2 mt-10 ">
            <p className="grid-headtext">Contact Me</p>
              <div className="copy-container" onClick={copyHandler}>
                <img className="" src={isCopy ? "assets/tick.svg" : "assets/copy.svg"} alt="" />
                <p className="lg:text-2xl md:text-xl font-medium text-grey_gradient text-zinc-400" >ayushchavda2020</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
