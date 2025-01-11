import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='border-t-[0.5px] border-t-gray-300 w-full flex justify-center p-8'>
            <div className='py-[1rem] md:py-[1rem] flex gap-12 flex-col-reverse md:flex-row md:justify-between w-full md:w-[80%] font-sans'>
                <div className='w-[18rem] md:w-[25rem flex flex-col gap-6'>
                    <p className='text-gray-600 font-bold'>Our purpose</p>
                    <p className='text-gray-500'>Provide digital inclusion to small-to-medium size Diagnostic centers without the overhead cost that comes with other custom digital solutions.</p>
                    <p className='text-gray-500'>
                        We dream of a future where all local small-to-medium scale diagnostic centers can adapt technology, no matter how small they are or how much they know about technology.
                    </p>

                    <p className='text-gray-700'>
                        contact us: hello@tallycases.com
                    </p>
                    <p>Copyright 2024 - All rights reserved</p>
                </div>

                <div className='flex flex-col gap-6'>
                    <p className='text-gray-600 font-bold'>Our Team</p>
                    
                        <div className='flex items-center md:items-start md:flex-col  gap-4'>
                            <Image src="https://www.ogerald.com/_next/image?url=%2Fassets%2Fself2.jpg&w=1080&q=75" height={100} width={90} alt='profile image' className='rounded-full object-cover [object-position:50%_20%]' style={{ objectPosition: '50% 20%' }} />
                            <div className=''>
                                <p className='text-slate-600'>Gerald Ofori-Atta</p>
                                <p className='text-gray-400 text-xs'>Ultrasound in Medicine Specialist</p>
                                <p className='text-gray-400 text-xs'>Web Developer</p>
                            </div>
                        </div>
                        <div className='flex items-center md:items-start md:flex-col  gap-4'>
                            <Image src="https://media.istockphoto.com/id/653035772/vector/default-female-avatar-profile-picture-icon-grey-woman-photo-placeholder.jpg?s=612x612&w=0&k=20&c=QlcDo93JeJZLNgedBqplFtjPEeFBDrs1YH4Rdt0NHf8=" height={100} width={90} alt='profile image' className='rounded-full object-cover [object-position:50%_20%]' style={{ objectPosition: '50% 20%' }} />
                            <div className=''>
                                <p className='text-slate-600'>Marina Coffie</p>
                                <p className='text-gray-400 text-xs'>Project Manager</p>
                               
                            </div>
                        </div>

                    
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
