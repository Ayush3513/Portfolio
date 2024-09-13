import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import HackerRoom from './HackerRoom'
import Loader from './Loader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../Constants/index'
import Target from './Target'
import ReactLogo from './ReactLogo'
import Cube from './Cube'
import Rings from './Ring'
import HeroCamera from './HeroCamera'
import Button from './Button'

const Hero = () => {
  // const x = useControls("hackerRoom",{
  //   positionX:{
  //     value:2.5,
  //     min:-10,
  //     max:10
  //   },
  //   positionY:{
  //     value:2.5,
  //     min:-10,
  //     max:10
  //   },
  //   positionZ:{
  //     value:2.5,
  //     min:-10,
  //     max:10
  //   },
  //   scale:{
  //     value:1,
  //     min:0.08,
  //     max:10
  //   }
  //   ,
  //   rotationX:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   rotationY:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   rotationZ:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   }
  // })

const [isMo, setIsMo] = useState(window.innerWidth <= 768);

let isSmall = useMediaQuery({maxWidth:480})
 let isMobile = useMediaQuery({maxWidth: 768})
 let isTablet = useMediaQuery({maxWidth:1024,minWidth: 768})

 const sizes = calculateSizes(isSmall ,isMobile ,isTablet)

  return (
    <section className='min-h-screen flex flex-col w-full relative'>
        <div className="w-full flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className=' font-medium text-2xl sm:text-5xl text-white text-center font-generalsans'>Hi,I am Ayush <span className='waving-hand'>👋</span></p>
        <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
        </div>
        <div className="w-full h-full absolute inset-0">
        
            <Canvas className='h-screen w-screen'>
              <Suspense fallback={<Loader />}>
              <HeroCamera isMobile={isMo}>
                
              <HackerRoom scale={sizes.deskScale} 
                  position={sizes.deskPosition} 
                  rotation={[0.1,3.13,0]} />

              </HeroCamera >
                  <group>
                    {!isMo && (<>
                      <Target position={sizes.targetPosition} />
                    <ReactLogo position={sizes.reactLogoPosition} />
                    <Cube position={sizes.cubePosition} />
                    <Rings position={sizes.ringPosition} />
                    </>)}
                  </group>

                <ambientLight intensity={1} />
                <directionalLight position={[10,10,10]} intensity={5} />
                <perspectiveCamera makedefault position={[0,0,30]}  />
              </Suspense>
            </Canvas>
        </div>
        <div className="absolute left-0 right-0 bottom-7 w-full z-10 c-space">
          <a href="#about">
            {<Button name="Let's Work Together" isBeam classContainer="sm:w-fit w-full sm:min-w-96 "/>}
          </a>
        </div>
    </section>
  )
}

export default Hero