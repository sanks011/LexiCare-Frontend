import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col md:flex-row bg-gradient-to-br from-[#1CBBB4] to-[#0D8B86] rounded-lg px-6 sm:px-10 md:px-14 lg:px-20 my-20 mx-4 md:mx-10'>
            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-20'>
                <div className='space-y-4'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight'>
                        Consult with Top Healthcare <br className='hidden lg:block' />
                        <span className='text-[#FF6B8B]'>Specialists Today</span>
                    </h2>
                    <p className='text-white/90 text-sm md:text-base font-light max-w-md'>
                        Join thousands of patients who have found the right specialist for their needs
                    </p>
                </div>
                
                <div className='flex gap-4 mt-8'>
                    <button 
                        onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                        className='flex items-center justify-center gap-2 bg-white px-6 sm:px-8 py-3 rounded-full text-[#1CBBB4] font-medium text-sm hover:bg-[#FF6B8B] hover:text-white transition-all duration-300 shadow-lg shadow-teal-900/20'
                    >
                        Create Account
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                    <button 
                        onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} 
                        className='hidden sm:flex items-center justify-center gap-2 border border-white/30 px-6 sm:px-8 py-3 rounded-full text-white font-medium text-sm hover:bg-white/10 transition-all duration-300'
                    >
                        Browse Doctors
                    </button>
                </div>
            </div>
            
            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[40%] relative'>
                <div className='relative h-full'>
                    <img 
                        className='absolute bottom-0 right-0 max-w-full object-contain' 
                        src={assets.appointment_img} 
                        alt="Doctor appointment" 
                    />
                    {/* Stats Card */}
                    <div className='absolute top-10 left-4 bg-white p-4 rounded-xl shadow-lg shadow-teal-900/20'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-[#1CBBB4]/10 rounded-full flex items-center justify-center'>
                                <svg className='w-5 h-5 text-[#1CBBB4]' fill='currentColor' viewBox='0 0 20 20'>
                                    <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
                                </svg>
                            </div>
                            <div>
                                <p className='text-sm font-semibold text-gray-800'>100+ Specialists</p>
                                <p className='text-xs text-gray-500'>At your service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner