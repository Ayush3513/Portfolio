import React, { useState } from 'react'
import NavItems from './NavItems';

const Navbar = () => {

  const [Open, setOpen] = useState(false);
  const [mobile, setmobile] = useState(window.innerWidth <= 768);

  const toggelHandler = ()=>{
    setOpen((prev)=> !prev)
  }

  return (
    <header className='text-white absolute top-0 left-0 right-0 bg-black/90 z-50'>
        <div className="max-w-7xl py-5 flex items-center justify-between mx-auto c-space">
            <a href="/" className='text-neutral-400 text-xl font-bold hover:text-white transition-all'>Ayush</a>
            {mobile && (<label  className="flex flex-col gap-2 w-8">
      <input onClick={toggelHandler} className="peer hidden" type="checkbox" />
      <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]" />
      <div className="rounded-2xl h-[3px] w-full bg-white duration-500 peer-checked:-rotate-45" />
      <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]" />
    </label>)}
            <nav className='sm:flex hidden'><NavItems /></nav>
        </div>
        <div className={`nav-sidebar ${Open ? "max-h-screen" : "max-h-0"} `}>
          <nav className='p-5'>
            <NavItems />
          </nav>
        </div>
    </header>
  )
}

export default Navbar