import React from 'react'
import {headerLogo} from '../assets/images';
 import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  const togglemenu=()=>{

  }
  return (
    <header className=' padding-x py-8 absolute z-10 w-full
    '>
        <nav className=' justify-between items-center flex max-container '>
            <a href="/">
              <img
              src={headerLogo}
              alt='LOGO'
              width={130}
              height={29}
              />
            </a>
            <ul className='flex-1 flex items-center justify-center gap-16 max-lg:hidden'>
             {navLinks.map((item)=>(
                <li key={item.label}>
                    <a href={item.href}
                    className=' font-montserrat leading-normal text-lg text-slate-gray p-3 hover:bg-coral-red hover:rounded-md hover:text-black transition-all'
                    >
                     {item.label}
                    </a>

                </li>
             ))}
            </ul>
                <div className=' hidden
                 max-lg:block' >
                <img
                src={hamburger}
                alt="HAMBERGER"
                width={25}
                height={25}
                />
                </div>
        </nav>
    </header>
  )
}

export default Nav