import React from 'react'
import Button from '../Button'
import Image from 'next/image'

const MainSection = () => {
    return (
        <div className='min-h-svh w-full  bg-primary'>
            <section>
                <div className='flex flex-col items-center m-auto justify-center md:w-[80%]'>
                    <div className='mt-[10rem] w-full flex flex-col justify-center items-center align-middle gap-6'>
                        <h1 className='text-white text-[2.5rem] font-bold text-center'>Revenue Management Tool <br />for your Imaging Clinic</h1>
                        <p className='text-center text-gray-400'>Point of sale system for diagnostic centers and Imaging Clinics</p>
                        <div className='flex gap-8 flex-row'>
                            <Button label='Start for free' variant='secondary' className=' text-white' />
                            {/* <Button label='Start for free' variant='borderless' className='text-white' /> */}
                        </div>
                    </div>
                    <div className="relative w-full h-64 md:h-[40rem] mt-[2rem]">
                        <Image
                            src="/assets/product_mockup.png"
                            alt="mockup"
                            layout="fill"
                            className="object-contain"
                        />
                    </div>


                </div>
            </section>

        </div>
    )
}

export default MainSection
