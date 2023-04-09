import React from 'react';
import Slider from 'react-slick';

import img1 from '../assets/img/img-1.png';
import img2 from '../assets/img/img-2.png';
import img3 from '../assets/img/img-3.png';

const AboutComp = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className='h-full bg-bg-3' id='about'>
        <div className='lg:px-28 lg:py-28'>
          <div className='grid lg:grid-cols-2 place-items-center content-center w-full'>
            <div className='lg:my-5' data-aos-delay="400" data-aos="fade-right" data-aos-duration="3000">
              <img src={img1} alt="" />
            </div>
            <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1500">
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
            <div data-aos-delay="400" data-aos="fade-right" data-aos-duration="1500">
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
            <div className='lg:my-5' data-aos="fade-left"  data-aos-delay="200" data-aos-duration="3000">
              <img src={img2} alt="" />
            </div>
            <div className='lg:my-5' data-aos-delay="400" data-aos="fade-right" data-aos-duration="3000">
              <img src={img3} alt="" />
            </div>
            <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1500">
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
            <div>
            </div>
          </div>
          <div className='lg:my-4'>
            <h1 className='text-center self-center text-4xl font-bold text-bg-1'>What they says about us</h1>
              <Slider {...settings} className='my-8'>
                <div className='bg-bg-2 rounded-xl lg:w-full lg:h-full lg:py-10 lg:px-20 lg:mx-2'>
                  <div className='flex flex-wrap text-star gap-2 lg:my-4'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <p className='lg:pr-5 font-semibold text-bg-1 text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus dolorum aperiam corrupti sed animi voluptate rem eius fugit, ad quae vel rerum fuga saepe earum quasi, ducimus consectetur explicabo aliquam. Amet dolor deserunt omnis praesentium velit unde rem?</p>
                    <div className='flex flex-wrap my-3'>
                      <i class="fa-solid fa-user text-2xl text-bg-1 mx-3 self-center"></i>
                      <div className='flex flex-col justify-start'>
                        <h1 className='text-bg-1 font-bold text-lg'>Person</h1>
                        <h1 className='text-bg-1 font-light text-sm'>Lorem</h1>
                      </div>
                </div>
                  </div>
                </div>
                <div className='bg-bg-2 rounded-xl lg:w-full lg:h-full lg:py-10 lg:px-20 lg:mx-2'>
                  <div className='flex flex-wrap text-star gap-2 lg:my-4'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <p className='lg:pr-5 font-semibold text-bg-1 text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus dolorum aperiam corrupti sed animi voluptate rem eius fugit, ad quae vel rerum fuga saepe earum quasi, ducimus consectetur explicabo aliquam. Amet dolor deserunt omnis praesentium velit unde rem?</p>
                    <div className='flex flex-wrap my-3'>
                      <i class="fa-solid fa-user text-2xl text-bg-1 mx-3 self-center"></i>
                      <div className='flex flex-col justify-start'>
                        <h1 className='text-bg-1 font-bold text-lg'>Person</h1>
                        <h1 className='text-bg-1 font-light text-sm'>Lorem</h1>
                      </div>
                </div>
                  </div>
                </div>
                <div className='bg-bg-2 rounded-xl lg:w-full lg:h-full lg:py-10 lg:px-20 lg:mx-2'>
                  <div className='flex flex-wrap text-star gap-2 lg:my-4'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <p className='lg:pr-5 font-semibold text-bg-1 text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus dolorum aperiam corrupti sed animi voluptate rem eius fugit, ad quae vel rerum fuga saepe earum quasi, ducimus consectetur explicabo aliquam. Amet dolor deserunt omnis praesentium velit unde rem?</p>
                    <div className='flex flex-wrap my-3'>
                      <i class="fa-solid fa-user text-2xl text-bg-1 mx-3 self-center"></i>
                      <div className='flex flex-col justify-start'>
                        <h1 className='text-bg-1 font-bold text-lg'>Person</h1>
                        <h1 className='text-bg-1 font-light text-sm'>Lorem</h1>
                      </div>
                </div>
                  </div>
                </div>
                <div className='bg-bg-2 rounded-xl lg:w-full lg:h-full lg:py-10 lg:px-20 lg:mx-2'>
                  <div className='flex flex-wrap text-star gap-2 lg:my-4'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <p className='lg:pr-5 font-semibold text-bg-1 text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere temporibus dolorum aperiam corrupti sed animi voluptate rem eius fugit, ad quae vel rerum fuga saepe earum quasi, ducimus consectetur explicabo aliquam. Amet dolor deserunt omnis praesentium velit unde rem?</p>
                    <div className='flex flex-wrap my-3'>
                      <i class="fa-solid fa-user text-2xl text-bg-1 mx-3 self-center"></i>
                      <div className='flex flex-col justify-start'>
                        <h1 className='text-bg-1 font-bold text-lg'>Person</h1>
                        <h1 className='text-bg-1 font-light text-sm'>Lorem</h1>
                      </div>
                </div>
                  </div>
                </div>
              </Slider>
          </div>
        </div>
    </div>
  )
}

export default AboutComp