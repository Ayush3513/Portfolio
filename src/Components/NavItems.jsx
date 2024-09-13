import React from 'react'
import { navLinks } from '../Constants/index.js'

const NavItems = () => {
  return (
    <ul className='nav-ul '>
        {navLinks.map(({id,name,href})=>(
            <li className='nav-li' key={id}><a className='nav-li' href={href}>
                {name}
                </a></li>
        ))}
    </ul>
  )
}

export default NavItems