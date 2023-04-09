import React from 'react'

const ServiceComp = () => {
  return (
    <div className='h-full bg-bg-2 m-auto' id='service'>
        <div className='lg:px-28 lg:py-20'>
            <div>
                <h1 className='text-color-3 text-lg font-bold uppercase lg:my-6' data-aos="fade-up" >features</h1>
                <h1 className='lg:text-4xl text-2xl font-semibold lg:tracking-wide' data-aos="fade-up" >All service in your hands</h1>
            </div>
            <div className='grid lg:grid-cols-3 lg:gap-12  md:grid-2 md:gap-2 lg:py-20'>
                <div className='rounded-xl shadow-xl p-7 h-72' data-aos="fade-up" data-aos-delay="100">
                    <div className='text-color-2'>
                        <i class="fa-solid fa-user-doctor text-4xl lg:m-5"></i>
                    </div>
                    <div >
                        <h1 className='text-gray-900 font-bold text-xl'>Med Care</h1>
                        <p className='font-normal py-4 text-lg'>All General practisioners and specialist have been verified</p>
                    </div>
                </div>
                <div className='rounded-xl shadow-xl p-7 h-72' data-aos="fade-up" data-aos-delay="200">
                    <div className='text-color-2'>
                        <i class="fa-solid fa-hospital text-4xl lg:m-5"></i>
                    </div>
                    <div >
                        <h1 className='text-gray-900 font-bold text-xl'>Med Hospital</h1>
                        <p className='font-normal py-4 text-lg'>find hospitals around you with complate information</p>
                    </div>
                </div>
                <div className='rounded-xl shadow-xl p-7 h-72' data-aos="fade-up" data-aos-delay="400">
                    <div className='text-color-2'>
                        <i class="fa-solid fa-comment-medical text-4xl lg:m-5"></i>
                    </div>
                    <div >
                        <h1 className='text-gray-900 font-bold text-xl'>Med Consult</h1>
                        <p className='font-normal py-4 text-lg'>Consult your health and family Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='rounded-xl shadow-xl p-7 h-72' data-aos="fade-up" data-aos-delay="600">
                    <div className='text-color-2'>
                        <i class="fa-solid fa-microscope text-4xl lg:m-5"></i>
                    </div>
                    <div >
                        <h1 className='text-gray-900 font-bold text-xl'>Med Lab</h1>
                        <p className='font-normal py-4 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, corrupti!</p>
                    </div>
                </div>
                <div className='rounded-xl shadow-xl p-7 h-72' data-aos="fade-up" data-aos-delay="800">
                    <div className='text-color-2'>
                        <i class="fa-solid fa-receipt text-4xl lg:m-5"></i>
                    </div>
                    <div >
                        <h1 className='text-gray-900 font-bold text-xl'>Med Receipt</h1>
                        <p className='font-normal py-4 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat recusandae perspiciatis provident.</p>
                    </div>
                </div>
                <div className='rounded-xl shadow-xl p-7 h-72' data-aos="fade-up" data-aos-delay="1000">
                    <div className='text-color-2'>
                        <i class="fa-solid fa-truck-medical text-4xl lg:m-5"></i>
                    </div>
                    <div >
                        <h1 className='text-gray-900 font-bold text-xl'>Med Ambulance</h1>
                        <p className='font-normal py-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at vitae!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceComp