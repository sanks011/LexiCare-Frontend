import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#2A4365] md:mx-10'>
            <h1 className='text-3xl font-semibold'>Featured Specialists</h1>
            <p className='sm:w-1/2 text-center text-gray-600'>Connect with our most experienced and highly-rated specialists.</p>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-3 sm:px-0'>
                {doctors.slice(0, 8).map((item, index) => (
                    <div 
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                        className='bg-white border border-[#E2E8F0] rounded-xl overflow-hidden cursor-pointer hover:shadow-md hover:translate-y-[-10px] transition-all duration-500' 
                        key={index}
                    >
                        <div className='aspect-w-4 aspect-h-3'>
                            <img className='w-full h-full object-cover bg-[#F7FCFC]' src={item.image} alt={item.name} />
                        </div>
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 mb-2 ${item.available ? 'text-[#00A7B5]' : "text-gray-500"}`}>
                                <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-[#00A7B5]' : "bg-gray-500"}`}></span>
                                <span className="text-sm">{item.available ? 'Available' : "Not Available"}</span>
                            </div>
                            <h3 className='text-lg font-medium text-[#2A4365]'>{item.name}</h3>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} 
                className='mt-10 bg-[#00A7B5] text-white px-8 py-3 rounded-lg hover:bg-[#008C99] transition-all'
            >
                View All Specialists
            </button>
        </div>
    )
}

export default TopDoctors