
import React from 'react';
import free from './assets/Free.png';
import standard from './assets/Standard.png'
import premium from './assets/Premium.png'
import tick from './assets/tick.png';

export const Page2 = () => {
    return (
        <div id="pricing" className='py-14 mb-10 '>
            <div className='flex-wrap text-center'>
                <p className='text-[#0B132A] text-2xl md:text-4xl font-medium '>Choose Your Plan</p>
                <p className='text-[#4F5665] text-sm md:text-base font-normal mt-2 md:mt-6'><span>Let's choose the package that is best for you and explore it happily and</span> <br className='hidden md:block' /> <span> cheerfully.</span></p>
            </div>
            <div className='md:flex justify-around mt-4 md:mt-14 '>
                <div className='flex-wrap mb-4 md:mb-0 md:w-1/4 border-2 border-[#DDDDDD] hover:border-[#F53838] rounded-lg '>
                    <img src={free} alt='free' className='mx-auto mt-7 lg:mt-16' />
                    <p className='text-[#0B132A] text-lg font-medium mt-5 text-center '>Free Plan</p>
                    <div className='ml-12 md:ml-0 lg:ml-16 text-[#4F5665] text-sm font-normal flex-wrap '>
                        
                            <div className='flex items-center gap-x-3 mt-4 '>
                                <img src={tick} alt='tick' />
                                <p>Unlimited Bandwidth</p>
                            </div>
                            <div className='flex items-center gap-x-3 mt-4'>
                                <img src={tick} alt='tick' />
                                <p>Encrypted Connection</p>
                            </div>
                            <div className='flex items-center gap-x-3 mt-4'>
                                <img src={tick} alt='tick' />
                                <p>No Traffic Logs</p>
                            </div>
                            <div className='flex items-center gap-x-3 mt-4'>
                                <img src={tick} alt='tick' />
                                <p>Works on All Devices</p>
                            </div>
                       

                    </div>
                    <div className=' my-6 md:mt-24'>
                        <p className='text-[#0B132A] text-lg md:text-2xl font-medium  text-center'>Free</p>
                        <div className='flex justify-center mt-1 md:mt-3 font-medium md:font-bold text-sm md:text-base'>
                            <button className='text-[#F53855] border-2  rounded-full border-[#F53855] hover:bg-[#F53855] hover:shadow-xl hover:shadow-[#F5383859] hover:text-[#FFFFFF] py-2 px-6 md:px-12 '>Select</button>
                        </div>
                    </div>
                </div>

                <div className='flex-wrap mb-4 md:mb-0  md:w-1/4 border-2 border-[#DDDDDD] hover:border-[#F53838] rounded-lg '>
                    <img src={standard} alt='standard' className='mx-auto mt-7 lg:mt-16' />
                    <p className='text-[#0B132A] text-lg font-medium mt-5 text-center '>Standard</p>
                    <div className='ml-12 md:ml-0 lg:ml-16 text-[#4F5665] text-sm font-normal flex-wrap'>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>Unlimited Bandwidth</p>
                        </div>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>Encrypted Connection</p>
                        </div>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>No Traffic Logs</p>
                        </div>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>Works on All Devices</p>
                        </div>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>Connect Anyware</p>
                        </div>
                    </div>
                    <div className=' my-6  md:mt-14'>
                        <p className='text-[#0B132A] text-lg md:text-2xl font-medium  text-center'>$9 / mo</p>
                        <div className='flex justify-center mt-1 md:mt-3 font-medium md:font-bold text-sm md:text-base'>
                            <button className='text-[#F53855] border-2  rounded-full border-[#F53855] hover:bg-[#F53855] hover:shadow-xl hover:shadow-[#F5383859] hover:text-[#FFFFFF] py-2 px-6 md:px-12  '>Select</button>
                        </div>
                    </div>

                </div>

                <div className='flex-wrap mb-4 md:mb-0  md:w-1/4 border-2 border-[#DDDDDD] hover:border-[#F53838] rounded-lg'>
                    <img src={premium} alt='premium' className='mx-auto mt-7 lg:mt-16' />
                    <p className='text-[#0B132A] text-lg font-medium mt-5 text-center'>Premium</p>
                    <div className='ml-12 md:ml-0 lg:ml-16 text-[#4F5665] text-sm font-normal flex-wrap'>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>Unlimited Bandwidth</p>
                        </div>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>Encrypted Connection</p>
                        </div>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>No Traffic Logs</p>
                        </div>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>Works on All Devices</p>
                        </div>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>Connect Anyware</p>
                        </div>
                        <div className='flex items-start gap-x-3 mt-4'>
                            <img src={tick} alt='tick' />
                            <p>Get New Features</p>
                        </div>
                    </div>
                    <div className='my-6  lg:mt-7'>
                        <p className='text-[#0B132A] text-lg md:text-2xl font-medium  text-center'>$12 / mo</p>
                        <div className='flex justify-center mt-1 md:mt-3 font-medium md:font-bold text-sm md:text-base'>
                            <button className='text-[#F53855] border-2  rounded-full border-[#F53855] hover:bg-[#F53855] hover:shadow-xl hover:shadow-[#F5383859] hover:text-[#FFFFFF] py-2 px-6 md:px-12 '>Select</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
