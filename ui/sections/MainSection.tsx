'use client'
import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {sendGTMEvent} from '@next/third-parties/google'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tally Cases ",
    description: "Revenue Management Tool",
  };
const MainSection = () => {
    const router = useRouter();
   
    return (
        <div className='min-h-svh w-full'>
            <section>
                <div className='flex flex-col items-center m-auto justify-center md:w-[80%] p-4'>
                    <div className='mt-[10rem] w-full flex flex-col justify-center items-center align-middle gap-6'>
                        <h1 className=' text-[2.5rem] md:text-[3rem] font-bold font-sans text-center text-gray-600'>Revenue Management Tool <br />for Imaging Clinics.</h1>
                        <p className='text-center text-gray-500 md:text-xl font-sans'>We help small-to-medium size businesses go digital easily without overhead cost </p>
                        <div className='flex flex-col justify-center'>
                            <Button label='Register your Center' variant='primary' className='py-4 font-sans text-lg font-normal' onClick={() => {
                                sendGTMEvent({event: 'Register your Center Button', value: 'User clicked'})
                                router.push('/signup')
                                
                                }} />
                            <div className='flex items-center md:hidden mt-2'>
                                <p className='text-gray-400 font-sans'>Already onboard? </p>
                                <Button label='Sign In' variant='borderless' className='' onClick={() => {
                                    router.push('/signin')
                                    sendGTMEvent({event: 'Sign In button', value: 'User clicked'})
                                    }}/>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-gray-100 rounded-lg w-full md:w-[90%] p-1 md:p-6 mt-[4rem] relative -z-10'>
                        <div className="w-full h-64 md:h-[40rem] relative">
                            <Image
                                src="/assets/dash_overview.png"
                                alt="mockup"
                                layout="fill"
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>



                </div>
            </section>

        </div>
    )
}

export default MainSection
