import React from 'react';
import photo2 from './assets/Illustration 2.png';
import check from './assets/check.png';

export const Page1 = () => {
    return (
        <div id="Features" className='flex mb-12 mt-12 py-12'>
            <div className='hidden md:block md:w-1/2'>
                <img src={photo2} alt='Illustration' />
            </div>
            <div className='w-full md:w-1/2 lg:ml-28 mt-auto '>
                <p className=' text-2xl md:text-4xl font-medium mb-4'>
                    <span>We Provide Many</span><br />
                    <span>Features You Can Use</span>
                </p>
                <p className='mb-4 text-[#4F5665]  text-xs md:text-base font-medium'>
                   <span>You can explore the features that we provide with fun and </span> <br className='hidden md:block'/>
                   <span>have their own functions each feature.</span> 
                </p>
                <div className='flex items-center mb-4 text-[#4F5665]  text-xs md:text-base font-medium' >
                <img src={check} className='mr-1 md:mr-3' alt='Check' />
                    <p>Powerful online protection.</p>
                </div>
                <div className='flex items-center mb-4 text-[#4F5665]  text-xs md:text-base font-medium' >
                    <img src={check} alt='check' className='mr-1 md:mr-3' />
                    <p>Internet without borders.</p>
                </div>
                <div className='flex items-center mb-4 text-[#4F5665]  text-xs md:text-base font-medium' >
                    <img src={check} alt='check' className='mr-1 md:mr-3'/>
                    <p>Supercharged VPN.</p>
                </div>
                <div className='flex items-center mb-4 text-[#4F5665]  text-xs md:text-base font-medium' >
                    <img src={check} alt='check' className='mr-1 md:mr-3' />
                    <p>No specific time limits.</p>
                </div>
            </div>
        </div>
    );
};
