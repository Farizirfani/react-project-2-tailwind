import React from 'react';
import img1 from '../assets/img/img-1.png';
import img2 from '../assets/img/img-2.png';
import img3 from '../assets/img/img-3.png';

const AboutComp = () => {
  return (
    <div className='h-full bg-bg-3' id='about'>
        <div className='lg:px-28 lg:py-28'>
          <div className='grid lg:grid-cols-2 place-items-center content-center w-full'>
            <div className='lg:my-5'>
              <img src={img1} alt="" />
            </div>
            <div>
              <p className='font-semibold text-xl text-bg-1'>lorem</p>
              <h1 className='font-bold text-5xl lg:my-3 text-bg-1'>Find doctor near you</h1>
              <p className='font-light text-lg text-bg-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quidem dignissimos tempora aliquid maxime quaerat recusandae vel ducimus repudiandae officiis expedita nam nisi non delectus debitis qui, esse ex cum.</p>
              <div className=' flex justify-around lg:my-4'>
                <div className='grid grid-cols-2'>
                  <i class="fa-solid fa-user-nurse text-3xl text-color-2 self-center"></i>
                  <div className='flex flex-col'>
                    <h1 className='text-bg-1 font-bold text-md'>Nurse</h1>
                    <h1>Lorem</h1>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <i class="fa-solid fa-tablets text-3xl text-color-2 text-end mx-3 self-center"></i>
                  <div className='flex flex-col'>
                    <h1 className='text-bg-1 font-bold text-md'>medication</h1>
                    <h1>Lorem</h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className='font-semibold text-xl text-bg-1'>lorem</p>
              <h1 className='font-bold text-5xl lg:my-3 text-bg-1'>direct consultation with a doctor</h1>
              <p className='font-light text-lg text-bg-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quidem dignissimos tempora aliquid maxime quaerat recusandae vel ducimus repudiandae officiis expedita nam nisi non delectus debitis qui, esse ex cum.</p>
              <div className=' flex justify-around lg:my-4'>
                <div className='grid grid-cols-2'>
                  <i class="fa-solid fa-user-nurse text-3xl text-color-2 self-center"></i>
                  <div className='flex flex-col'>
                    <h1 className='text-bg-1 font-bold text-md'>Nurse</h1>
                    <h1>Lorem</h1>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <i class="fa-solid fa-tablets text-3xl text-color-2 text-end mx-3 self-center"></i>
                  <div className='flex flex-col'>
                    <h1 className='text-bg-1 font-bold text-md'>medication</h1>
                    <h1>Lorem</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:my-5'>
              <img src={img2} alt="" />
            </div>
            <div className='lg:my-5'>
              <img src={img3} alt="" />
            </div>
            <div>
              <p className='font-semibold text-xl text-bg-1'>lorem</p>
              <h1 className='font-bold text-5xl lg:my-3 text-bg-1 '>quick and precise</h1>
              <h1 className='font-bold text-5xl lg:my-3 text-bg-1 '>diagnosis by experts</h1>
              <p className='font-light text-lg text-bg-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quidem dignissimos tempora aliquid maxime quaerat recusandae vel ducimus repudiandae officiis expedita nam nisi non delectus debitis qui, esse ex cum.</p>
              <div className=' flex justify-around lg:my-4'>
                <div className='grid grid-cols-2'>
                  <i class="fa-solid fa-user-nurse text-3xl text-color-2 self-center"></i>
                  <div className='flex flex-col'>
                    <h1 className='text-bg-1 font-bold text-md'>Nurse</h1>
                    <h1>Lorem</h1>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <i class="fa-solid fa-tablets text-3xl text-color-2 text-end mx-3 self-center"></i>
                  <div className='flex flex-col'>
                    <h1 className='text-bg-1 font-bold text-md'>medication</h1>
                    <h1>Lorem</h1>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default AboutComp