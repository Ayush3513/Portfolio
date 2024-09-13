import React from 'react'

const Button = ({name, isBeam=false , classContainer}) => {
  return (
    <button className={`btn ${classContainer}`}>
        {isBeam && (<span className='h-3 w-3 flex relative '>
            <span className='btn-ping' />
            <span className='btn-ping_dot' />
        </span>)}
        {name}</button>
  )
}

export default Button