import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ReactLogo = (props) => {
    const reactRef = useRef()

    useGSAP(() => {
        gsap.to(reactRef.current.rotation, {
            z: Math.PI * 2,  // Changed from rotateZ to z
            duration: 16,
            repeat: -1,  // Changed from true to -1 for infinite repeats
            ease: "linear"  // Added for smooth rotation
        })
    })
   
    const { nodes, materials } = useGLTF('/models/react.glb')
    return (
        <group ref={reactRef} {...props} dispose={null}>
            <group scale={0.01}>
                <mesh 
                    castShadow
                    receiveShadow
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 7.935, 18.102]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[39.166, 39.166, 52.734]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo