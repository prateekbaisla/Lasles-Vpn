import React from 'react'

export const Page5 = () => {


    return (
        <div  className='md:relative md:mt-20 md:bg-[#F8F8F8]'>
            <div className='md:relative md:bottom-20 z-10 mx-2 lg:mx-20'>
                <div className=' bg-white md:flex flex-wrap md:mx-5  md:p-10 md:shadow-xl  '>
                    <div>
                        <p className='text-[#0B132A] text-2xl md:text-4xl font-medium'>Subscribe Now for <br className='hidden md:block' /> Get Special Features!</p>
                        <p className='text-[#4F5665] text-sm md:text-base font-normal mt-2 mb-4 md:mb-0'>Let's subscribe with us and find the fun.</p>
                    </div>
                    <div className='my-auto ml-auto  '>
                        <button className='rounded-lg  bg-[#F53838]  hover:shadow-xl hover:shadow-[#F5383859] py-2 px-6 md:py-5 md:px-20 text-sm md:font-bold md:text-base text-[#ffff]'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )


}