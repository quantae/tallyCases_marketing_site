import React from 'react'
import Button from '../Button'
import Image from 'next/image'

const MainSection = () => {
    return (
        <div className='min-h-svh w-full -z-10'>
            <section>
                <div className='flex flex-col items-center m-auto justify-center md:w-[80%] p-4'>
                    <div className='mt-[10rem] w-full flex flex-col justify-center items-center align-middle gap-6'>
                        <h1 className=' text-[2.5rem] md:text-[3rem] font-bold font-sans text-center text-gray-600'>Revenue Management Tool <br />for Diagnostic Centers.</h1>
                        <p className='text-center text-gray-500 md:text-xl font-sans'>The platform the helps small-medium scale Diagnostic centers go digital easily without overhead cost </p>
                        <div className='flex flex-col justify-center'>
                            <Button label='Register your center' variant='primary' className='py-4' />
                            <div className='flex items-center md:hidden mt-2'>
                                <p className='text-gray-400'>Already onboard? </p>
                                <Button label='Sign In' variant='borderless' />
                            </div>
                        </div>
                    </div>
                    <div className=' bg-gray-100 rounded-lg w-full md:w-[90%] p-1 md:p-6 mt-[4rem]'>
                        <div className="relative w-full h-64 md:h-[40rem]">
                            <Image
                                src="/assets/dash_overview.png"
                                alt="mockup"
                                layout="fill"
                                className="object-contain z-[0] rounded-lg"
                            />
                        </div>
                    </div>



                </div>
            </section>

        </div>
    )
}

export default MainSection
