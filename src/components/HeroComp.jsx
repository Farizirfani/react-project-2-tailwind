import React from 'react'
import HandPhone from '../assets/img/phone.png'

const HeroComp = () => {
  return (
    <div className='hero bg-bg-1' id='home'>
      <div className=''>
        <div className="grid lg:grid-cols-2 place-items-center content-center w-full">
          <div className='lg:mt-5 m-4 p-4'>
              <h1 className='lg:text-5xl text-2xl text-white font-bold font-sans lg:tracking-wide animate__animated animate__fadeInUp'>Take Care of Your <br /> family's <span className='text-color-3'>health</span></h1>
              <p className=' text-white font-semibold m-4 lg:my-6 lg:pl-16 animate__animated animate__fadeInUp animate__delay-1s'>Make Promis Easily and Quickly, The Best Doctor <br /> Booking Service in Indonesia</p>
              <div className='flex justify-around'>
                <button className='bg-color-2 w-auto h-auto lg:px-5 lg:py-3 px-2 py-1 text-white rounded-3xl animate__animated animate__fadeInUp animate__delay-2s'>Download App</button>
                <button className='text-color-2 rounded-3xl border-2 border-white h-auto lg:px-5 lg:py-3 px-2 animate__animated animate__fadeInUp animate__delay-2s'><i class="fa-regular fa-circle-play"></i> Watch Video</button>
              </div>
          </div>
          <div className='w-50 animate__animated animate__tada animate__delay-2s'>
            <img className='scale-75 img-hor-vert -z-10' src={HandPhone} alt="handphone.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComp