import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'

const HeroCamera = ({children,isMobile}) => {
const heroRef = useRef()

useFrame((state,delta)=>{
     !isMobile && (easing.damp3(state.camera.position,[0,0,6],0.25,delta))

     if(!isMobile){
      easing.dampE(heroRef.current.rotation,[-state.pointer.y/3,state.pointer.x/5,0],0.25,delta)
     }
     
})
  return (
    <group ref={heroRef}>{children}</group>
  )
}

export default HeroCamera