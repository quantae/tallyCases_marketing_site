import React from 'react';
import LocationAndPhone from '../components/LocationAndPhone';
import { IoLocationSharp } from 'react-icons/io5';

const address = {
    address: {
        title: 'Our Location',
        add: '23, Kaw Li Ya Street, South Okkalapa, Township, Yangon',
    }
}


const ContactSection = () => {
    return (
        <div className=' w-full flex flex-col justify-center relative'>
            <div className='w-full flex justify-center bg-green-100/25'>
                <div className='w-full md:w-[80%] p-8 '>
                    <div className='text-slate-500 pt-[10rem] pb-[3rem] '>
                        <h4 className='text-slate-600 mb-4'>CONTACT US</h4>
                        <p className='text-[1.6rem] font-medium'>Have a feature request, proposal or something else, <br /> <span className='text-[3rem]'>let's talk</span></p>
                    </div>
                </div>
            </div>
            <div className=' w-full flex justify-center'>
                <div className='w-full flex md:flex-row flex-col justify-start gap-12 md:gap-0 md:w-[80%] p-4'>
                    <div className='flex flex-col md:flex-row gap-8 w-full md:w-[50%] md:justify-start md:items-start md:align-middle md:pt-[5rem] md:pb-[15rem]'>
                        <LocationAndPhone icon={<IoLocationSharp className='w-[2rem] md:w-[2.5rem] h-full text-primary' />} title={address.address.title} body={address.address.add} />
                        
                        <LocationAndPhone icon={<IoLocationSharp className='w-[2.5rem] h-full text-primary' />} title={address.address.title} body={address.address.add} />
                    </div>
                    <div className='md:absolute h-[35rem] w-full md:w-[25rem] shadow-lg rounded-xl bg-white right-[11%] top-[10%]'>
                        hi
                    </div>

                </div>
            </div>



        </div>
    )
}

export default ContactSection
