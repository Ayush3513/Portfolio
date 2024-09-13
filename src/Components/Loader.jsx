import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {

   const {progress} =  useProgress()

  return (
    <Html as='div' center style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"column"}}>
        <span className='canvas-loader'/>
        <p style={{fontSize:14,color:"#f1f1f1",fontWeight:800,marginTop:40}}>
            {progress === 0 ? "loading..." : `${progress.toFixed(2)}%`}
        </p>
    </Html>
  )
}

export default Loader