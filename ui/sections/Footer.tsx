import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='border-t-[0.5px] border-t-gray-300 w-full flex justify-center p-8'>
            <div className='py-[1rem] md:py-[5rem] flex justify-between w-full md:w-[80%] font-sans'>
                <div className='w-[18rem] md:w-[25rem flex flex-col gap-6'>
                    <p>Our purpose</p>
                    <p className='text-gray-500'>Platform which helps small-medium scale Diagnostic centers go digital easily without overhead cost</p>
                    <p className='text-gray-500'>
                    We dream of a future where all local small-medium scale diagnostic centers can adapt technology, no matter how small they are or how much they know about technology.
                    </p>
                    <p>Copyright 2024 - All rights reserved</p>
                </div>
                
                <div>
                    <ul className='text-lg text-gray-600'>
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
