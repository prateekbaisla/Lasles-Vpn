import React from 'react';
import logo from './assets/Vector.png';
import facebook from './assets/Facebook.png';
import twitter from './assets/Twitter.png';
import instagram from './assets/Instagram.png';

export const Footer = () => {
    return (
        
        <div id="help" className='flex-wrap md:flex md:justify-between bg-[#F8F8F8] pt-3 md:pt-0 pb-5 md:pb-10 px-5 md:px-12 lg:px-24 mt-6 md:mt-0'>
            <div className='w-full md:w-1/2  mx-auto'>
                <div className='flex '>
                    <img src={logo} alt='logo' className='mr-2 text-sm ' />
                    <h1 className='text-[#0B132A] text-lg md:text-xl font-medium my-auto'>Lasles<span className='text-[#0B132A] text-lg md:text-xl font-bold my-auto'>VPN</span></h1>
                </div>
                <p className='text-[#4F5665] text-sm md:text-base font-normal mt-5'><span className='font-medium'>LaslesVPN </span>is a private virtual network that has <br className='hidden md:block' /> unique features and has high security.</p>
                <div className='flex mt-8 ml-0 md:mr-12'>
                    <img src={facebook} alt='Facebook' />
                    <img src={twitter} alt='Twitter' />
                    <img src={instagram} alt='Instagram' />
                </div>
                <p className='text-[#4F5665] text-sm md:text-base font-normal'>©2020LaslesVPN</p>
            </div>



            <div className='w- full md:w-1/2 flex mt-5 md:mt-0'>
                <div className='w-3/4'>
                    <p className='text-[#0B132A] text-medium md:text-lg font-medium mb-4'>Product</p>
                    <ul className='text-[#4F5665] text-sm md:text-base font-normal space-y-4'>
                        <li><button>Download</button></li>
                        <li><button>Pricing</button></li>
                        <li><button>Locations</button></li>
                        <li><button>Server</button></li>
                        <li><button>Countries</button></li>
                        <li><button>Blog</button></li>
                    </ul>
                </div>
                <div className='w-3/4'>
                    <p className='text-[#0B132A] text-medium md:text-lg font-medium mb-4'>Engage</p>
                    <ul className='text-[#4F5665] text-sm md:text-base font-normal space-y-4'>
                        <li><button>LaslesVPN?</button></li>
                        <li><button>FAQ</button></li>
                        <li><button>Tutorials</button></li>
                        <li><button>About Us</button></li>
                        <li><button>Privacy Policy</button></li>
                        <li><button>Terms of Service</button></li>
                    </ul>
                </div>
                <div className='w-3/4 '>
                    <p className='text-[#0B132A] text-medium md:text-lg font-medium mb-4'>Earn Money</p>
                    <ul className='text-[#4F5665] text-sm md:text-base font-normal space-y-4'>
                        <li><button>Affiliate</button></li>
                        <li><button>Become Partner</button></li>
                    </ul>
                </div>
            </div>
        </div>


    );
};