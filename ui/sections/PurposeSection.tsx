import React from 'react';
import Button from '../Button';
import Image from 'next/image';

const PurposeSection = () => {
    return (
        <div className='w-full flex justify-center bg-slate-200 p-4'>
            <section className='w-full md:w-[80%] pt-[6rem] pb-[6rem] flex py-[11rem]'>
                <div className='h-10rem w-full border-[1px] border-slate-200 bg-white flex justify-between'>
                    <div className=' w-full md:w-[70%] lg:w-[60%] xl:w-[50%] p-[5rem] flex flex-col gap-4 sm:gap-6 lg:gap-10'>
                        <h3 className='text-3xl font-bold text-text'>Our Purpose</h3>
                        <p className='text-lg text-slate-500'>We aim to help traditional retail and wholesale businesses in Myanmar go digital easily, without any initial costs for our software.<br /><br />

                            We dream of a future where all local businesses can adapt technology, no matter how small or big they are or how much they know about technology.</p>
                        <Button label='Learn More' className='w-[10rem]' />
                    </div>
                    <div className="relative w-full flex flex-row justify-end">
                        <Image src='/assets/purpose_image.png' alt="mockup"
                            width={500} height={600}
                            className="object-contain" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurposeSection;
