import React, { useState } from 'react'
import logo from './assets/Vector.png'

export const Header = () => {

    const [togglemenu, setTogglemenu] = useState(false)

    const handletoggle = () => {
        setTogglemenu(false)
    }

    return (
        <>
            <div className='container flex items-center' >
                <div className='flex my-auto'>
                    <img src={logo} alt='logo' className='mr-2 text-sm ' ></img>
                    <h1 className='text-[#0B132A] text-lg md:text-xl font-medium my-auto'>Lasles<span className='text-[#0B132A] text-lg md:text-xl font-bold my-auto'>VPN</span></h1>
                </div>
                <div className='lg:hidden my-auto ml-auto' >
                    <svg onClick={() => setTogglemenu(!togglemenu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                </div>

                <div className='hidden mr-7 lg:flex gap-7 text-base font-normal md:my-auto mx-auto text-[#4F5665] ' >
                    <a className='hover:text-[#F53855]' href='/'>About</a>
                    <a className='hover:text-[#F53855]' href='#Features'>Features</a>
                    <a className='hover:text-[#F53855]' href='#pricing'>Pricing</a>
                    <a className='hover:text-[#F53855]' href='#testimonials'>Testimonials</a>
                    <a className='hover:text-[#F53855]' href='#help'>Help</a>
                </div>
                <div className='hidden md:block my-auto ml-auto font-medium text-base'>
                    <button className='mr-4'>Sign In</button>
                    <button className='text-[#F53855] rounded-[80px] border border-solid border-[#F53855] hover:bg-[#F53855] hover:text-white ml-4 py-2 px-10'>Sign Up</button>
                </div>
            
            </div>
            {togglemenu &&
                <div className='absolute right-4 mt-1 text-base font-normal text-[#4F5665]'>
                    <ul className='bg-gray-800 p-4 rounded text-white'>
                        <li onClick={handletoggle} ><button>Sign In</button></li>
                        <li onClick={handletoggle} ><button>Sign Up</button></li>
                        <li onClick={handletoggle} ><a href='/' >About</a></li>
                        <li onClick={handletoggle} ><a href='#features' >Features</a></li>
                        <li onClick={handletoggle} ><a href='#pricing' >Pricing</a></li>
                        <li onClick={handletoggle} ><a href='#testimonials' >Testimonials</a></li>
                        <li onClick={handletoggle} ><a href='#help' >Help</a></li>
                    </ul>
                </div>
            }
        </>

    )
}
