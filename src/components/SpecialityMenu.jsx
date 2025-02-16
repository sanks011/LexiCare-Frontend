import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#2A4365]'>
            <h1 className='text-3xl font-semibold'>Find Your Specialist</h1>
            <p className='sm:w-1/2 text-center text-gray-600'>Connect with experienced specialists who can help you achieve your wellness goals.</p>
            <div className='flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto pb-4'>
                {specialityData.map((item, index) => (
                    <Link 
                        to={`/doctors/${item.speciality}`} 
                        onClick={() => scrollTo(0, 0)} 
                        className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0 group hover:translate-y-[-10px] transition-all duration-500' 
                        key={index}
                    >
                        <div className='w-20 h-20 sm:w-24 sm:h-24 mb-3 bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-4 group-hover:border-[#00A7B5] transition-all'>
                            <img className='w-full h-full object-contain' src={item.image} alt={item.speciality} />
                        </div>
                        <p className='text-gray-700'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu