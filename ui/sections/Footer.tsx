import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='border-t-[0.5px] border-t-gray-300 w-full flex justify-center p-8'>
            <div className='py-[1rem] md:py-[1rem] flex gap-12 flex-col-reverse md:flex-row md:justify-between w-full md:w-[80%] font-sans'>
                <div className='w-[18rem] md:w-[25rem flex flex-col gap-6'>
                    <p className='text-gray-600 font-bold'>Our purpose</p>
                    <p className='text-gray-500'>Provide a platform which allows small-to-medium scale Diagnostic centers go digital easily without overhead cost that comes with custom digital solutions used by large scale clinics</p>
                    <p className='text-gray-500'>
                    We dream of a future where all local small-to-medium scale diagnostic centers can adapt technology, no matter how small they are or how much they know about technology.
                    </p>

                    <p className='text-gray-700'>
                    contact us: hello@tallycases.com
                    </p>
                    <p>Copyright 2024 - All rights reserved</p>
                </div>
                
                <div>
                <p className='text-gray-600 font-bold mb-4'>Quick Links</p>
                    <ul className='text-lg text-gray-500'>
                        <li><Link href='#'>Pricing</Link></li>
                        <li><Link href='#'>Team</Link></li>
                        <li><Link href='#'>Blog</Link></li>
                        <li><Link href='#'>Twitter X</Link></li>
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Footer
