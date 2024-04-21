import React, { useRef } from 'react';
import person1 from './assets/person1.png';
import person2 from './assets/person2.png';
import person3 from './assets/person3.png';
import person4 from './assets/person4.jpg';
import star from './assets/review.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        img: person1,
        name: 'Viezh Robert',
        place: 'Warsaw, Poland',
        starating: '4.5',
        star: star,
        para: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
    },
    {
        img: person2,
        name: 'Yessica Christy',
        place: 'Shanxi, China',
        starating: '4.5',
        star: star,
        para: '“I like it because I like to travel far and still can connect with high speed.”.',
    },
    {
        img: person3,
        name: 'Kim Young Jou',
        place: 'Seoul, South Korea',
        starating: '4.5',
        star: star,
        para: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
    },
    {
        img: person4,
        name: 'Dinesh',
        place: 'Krishnagiri',
        starating: '4.5',
        star: star,
        para: '“I am dinesh who created this front-end website thank you for watching and you are so welcome here”.',
    },
];

export const Page4 = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Adjust for medium screens
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640, // Adjust for small screens
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div id="testimonials">
            <div>
                <p className="text-[#0B132A] text-2xl md:text-4xl font-medium text-center">
                    Trusted by Thousands of <br className='hidden md:block'/> Happy Customer
                </p>
                <p className="text-[#4F5665] text-sm md:text-base font-normal text-center mt-2 md:mt-5">These are the stories of our customers who have joined us with great <br className='hidden md:block' />pleasure when using this crazy feature.</p>
            </div>
            <div>
                <div>
                    <Slider ref={slider => {
                        sliderRef = slider;
                    }}
                        {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index} className="mt-5 md:mt-10  h-[230px] w-[400px] p-4 md:p-8 border-2 border-[#DDDDDD] hover:border-[#F53838] rounded-lg">
                                <div className="flex">
                                    <img src={review.img} alt={review.name} className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" />
                                    <div className="flex flex-col ml-4">
                                        <div className="text-[#0B132A] text-base md:text-lg font-medium">{review.name}</div>
                                        <div className="text-[#4F5665] text-sm md:text-base font-normal">{review.place}</div>
                                    </div>
                                    <div className="flex my-auto  ml-auto  ">
                                        {review.starating}
                                        <img src={star} alt='star' className='ml-2 my-auto w-[13.23px] h-[12.64px] ' />
                                    </div>
                                </div>
                                <p className="text-[#0B132A] text-sm md:text-base font-normal mt-4">{review.para}</p>
                            </div>
                        ))}
                    </Slider>

                </div>

                <div className=' mt-8 text-[#F53838]  flex justify-center md:justify-end lg:mr-28'>
                    <div className='flex '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-[60px] h-[60px] hover:fill-[#F53838] hover:stroke-white " onClick={previous}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-[60px] h-[60px]  hover:fill-[#F53838] hover:text-white" onClick={next}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    );
};
