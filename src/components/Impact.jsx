import { HeartPulse, Stethoscope, TrendingUp,Earth } from 'lucide-react'
import React from 'react'

const Impact = () => {
    return (
        <>
            <div className='bg-primary gap-3 md:gap-0 flex flex-col md:flex-row items-center justify-between text-white p-8 rounded-xl shadow-lg my-15 mx-5'>
                <div className='flex flex-col items-center gap-2 text-xl md:text-2xl p-4 text-center'><h1 className='text-3xl md:text-4xl font-bold' ><HeartPulse className='inline w-10 h-10'/> 5000+</h1><p className='text-xl md:text-2xl font-semibold'>Patients Helped</p></div>
                <div className='flex flex-col items-center gap-2 text-xl md:text-2xl p-4 text-center'><h1 className='text-3xl md:text-4xl font-bold'><Stethoscope className='inline w-10 h-10'/> 1000+</h1><p className='text-xl md:text-2xl font-semibold'>Verified Doctors</p></div>
                <div className='flex flex-col items-center gap-2 text-xl md:text-2xl p-4 text-center'><h1 className='text-3xl md:text-4xl font-bold'><TrendingUp className='inline w-10 h-10'/> 99%</h1><p className='text-xl md:text-2xl font-semibold'>Satisfaction Rate</p></div>
                <div className='flex flex-col items-center gap-2 text-xl md:text-2xl p-4 text-center'><h1 className='text-3xl md:text-4xl font-bold'><Earth className='inline w-10 h-10'/> 50+</h1><p className='text-xl md:text-2xl font-semibold'>Global Reach</p></div>
            </div>
        </>
    )
}

export default Impact