import React from 'react'
import global from './assets/Global.png'
import sponsor from './assets/Sponsored.png'

export const Page3 = () => {
  return (
    <div > 
        <div className='text-center mt-12'>
            <p className='text-[#0B132A] text-2xl md:text-4xl font-medium'>Huge Global Network <br/>of Fast VPN </p>
            <p className='text-[#4F5665] text-sm md:text-base font-normal mt-1 md:mt-3 '>See <span className='font-medium'>LaslesVPN </span>everywhere to make it easier for you when you move <br className='hidden md:block'/> locations.</p>
        </div>
        <img src={global} alt='global' className='mt-4 md:mt-16 mx-auto'/>
        <img src={sponsor} alt='sponsor' className='mt-2 md:mt-6 mx-auto'/>

    </div>
  )
}
