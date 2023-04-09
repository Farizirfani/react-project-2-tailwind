import React, { useState } from 'react'

const NavbarComp = () => {

  const [isOpen, setIsOpen ] = useState(false)

  return (
    <div className='sticky top-0 z-50'>
      <div className="bg-bg-1 shadow-md ">
        <div className='flex flex-col lg:flex-row'>
          <div className="flex items-center justify-between px-8 py-4 lg:py-0  border-b border-b-neutral-100 lg:border-b-0">
            <div>
              <a href="#home" className='lg:pl-6 font-extrabold text-3xl text-white'><span className='text-color-2'>M</span>edic.</a>
            </div>
            <div>
              <button onClick={() => setIsOpen(!isOpen)} className='block lg:hidden'>
                <i className={`${!isOpen ? 'block' : 'hidden'}   fa-solid fa-bars text-white text-xl`}></i>
                <i className={`${isOpen ? 'block' : 'hidden'}   fa-solid fa-xmark text-white text-xl`}></i>
              </button>
            </div>
          </div>
          <div className={`${isOpen ? 'block' : 'hidden'}  lg:flex flex-col lg:flex-row justify-end w-full py-4 lg:py-0 `}>
            <div className='flex flex-col lg:flex-row'>
              <a href="#service" className='block lg:mr-10 px-3 text-center py-3 lg:py-5 text-zinc-50 hover:text-white font-bold'>Service</a>
              <a href="#test" className='block lg:mr-10 px-3 text-center py-3 lg:py-5 text-zinc-50 hover:text-white font-bold'>About</a>
              <a href="#test" className='block lg:mr-10 px-3 text-center py-3 lg:py-5 text-zinc-50 hover:text-white font-bold'>Contact</a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarComp