import React from 'react'
import photo1 from './assets/Illustration 1.png'


export const About = () => {
    return (
        <>
            <div className='flex mt-2 md:mt-8 lg:mt-18 '>
                <div className='w-full lg:w-1/2 mt-5 lg:mt-20'>
                    <div className=' text-[#0B132A] font-medium text-2xl md:text-5xl '>
                        <p>Want anything to be </p>
                        <p className='lg:mt-2'>easy with <span className='font-bold {font-weight:700;}'>LaslesVPN.</span></p>
                    </div>
                    <div className='mt-2 md:mt-5 text-[#4F5665] font-small text-xs md:text-base'>
                        <p >Provide a network for all your needs with ease  and fun using <span className='font-bold {font-weight:500;}'> LaslesVPN</span> <span className='md:hidden'>discover interesting features from us.</span></p>
                        <p className='hidden md:block lg:mt-1'>discover interesting features from us.</p>
                    </div>
                    <div className='mt-4 md:mt-10 lg:mt-16 '>
                        <button className='rounded-lg  bg-[#F53838]  hover:shadow-xl hover:shadow-[#F5383859] py-2 px-6 md:py-5 md:px-20 text-sm md:font-bold md:text-base text-[#ffff]' >Get Started</button>
                    </div>
                </div>

                <div className='hidden lg:block w-1/2 mt-4 pl-4'>
                    <img src={photo1} alt='photo1' />
                </div>
            </div>

           

        </>

    )
}
