import React from 'react'
import HandPhone from '../assets/img/phone.png'

const PromotionComp = () => {
  return (
    <div className='h-100 bg-color-3'>
        <div className='lg:px-28 lg:py-10 px-5 py-3'>
            <div className="grid lg:grid-cols-2 place-items-center content-center w-full">
                <div className='lg:mt-5 m-4 p-4'>
                    <h1 className='lg:text-4xl text-2xl text-white font-bold font-sans lg:tracking-wide '>What are you waiting for? <br /> Download now for free</h1>
                    <p className=' text-white font-semibold m-4 lg:my-6 lg:pl-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur corporis, ratione tempora maxime est saepe. Rem ab quam reiciendis.</p>
                </div>
                <div className='w-72'>
                    <img className=' img-hor-vert -z-10' src={HandPhone} alt="handphone.png" />
                </div>
                </div>
            </div>
    </div>
  )
}

export default PromotionComp