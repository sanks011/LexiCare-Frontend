import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-br from-[#1CBBB4] to-[#0D8B86] rounded-lg px-6 md:px-10 lg:px-20'>
            {/* Left Section */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 m-auto md:py-[8vw] md:mb-[-20px]'>
                <div className='space-y-3'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight'>
                        Connect with Expert <br />
                        <span className='text-[#FF6B8B]'>Healthcare Specialists</span>
                    </h1>
                    <p className='text-white/90 text-lg font-light'>
                        Your path to better health starts here
                    </p>
                </div>

                <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl'>
                    <img className='w-24' src={assets.group_profiles} alt="Healthcare professionals" />
                    <p className='text-white text-sm font-light leading-relaxed'>
                        Join thousands of satisfied patients who trust<br className='hidden sm:block' /> our network of certified healthcare specialists.
                    </p>
                </div>

                <div className='flex gap-4 w-full md:w-auto'>
                    <a href='#speciality' 
                       className='flex items-center justify-center gap-2 bg-white px-8 py-3 rounded-full text-[#1CBBB4] font-medium text-sm hover:bg-[#FF6B8B] hover:text-white transition-all duration-300 shadow-lg shadow-teal-900/20'>
                        Book Appointment 
                        <img className='w-3 transition-transform group-hover:translate-x-1' src={assets.arrow_icon} alt="" />
                    </a>
                    <a href='#about' 
                       className='flex items-center justify-center gap-2 border border-white/30 px-8 py-3 rounded-full text-white font-medium text-sm hover:bg-white/10 transition-all duration-300'>
                        Learn More
                    </a>
                </div>
            </div>

{/* Right Section */}
<div className='md:w-1/2 relative mt-8 md:mt-0 flex items-end'>
    <div className='w-full'>
        <img 
            className='w-full rounded-lg shadow-xl' 
            src={assets.header_img} 
            alt="Healthcare consultation" 
        />
        {/* Floating Stats Card */}
        <div className='absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg shadow-teal-900/20 hidden md:block'>
            <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-[#1CBBB4]/10 rounded-full flex items-center justify-center'>
                    <svg className='w-5 h-5 text-[#1CBBB4]' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'/>
                    </svg>
                </div>
                <div>
                    <p className='text-sm font-semibold text-gray-800'>100+ Specialists</p>
                    <p className='text-xs text-gray-500'>Ready to help you</p>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Header