import React, { useState } from 'react'
import NavItems from './NavItems';

const Navbar = () => {

  const [Open, setOpen] = useState(false);

  const toggelHandler = ()=>{
    setOpen((prev)=> !prev)
  }

  return (
    <header className='text-white fixed top-0 left-0 right-0 bg-black/90 z-50'>
        <div className="max-w-7xl py-5 flex items-center justify-between mx-auto c-space">
            <a href="/" className='text-neutral-400 text-xl font-bold hover:text-white transition-all'>Ayush</a>
            <button onClick={toggelHandler} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden' aria-label='Toggle Menu'><img className='h-6 w-6' src={Open ? "public/assets/close.svg" : "public/assets/menu.svg" } alt="toggle" /></button>
            <nav className='sm:flex hidden'><NavItems /></nav>
        </div>
        <div className={`nav-sidebar ${Open ? "max-h-screen" : "max-h-0"}`}>
          <nav className='p-5'>
            <NavItems />
          </nav>
        </div>
    </header>
  )
}

export default Navbar