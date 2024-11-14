import React from 'react'
import FeatureList from '../components/FeatureList';
import { featureData } from '@/lib/data';

const FeaturesSection = () => {
    return (
        <div className='w-full flex items-center justify-center -z-10'>
        <section className='w-full md:w-[80%] pt-[5rem] pb-[5rem] flex flex-col p-4 items-center'>
            <div className='flex flex-col gap-4 w-full md:w-[70%] lg:w-[60%] xl:w-[40%] mb-[5rem] text-center'>
                <h4 className='font-sans text-4xl font-medium text-gray-600'>Main Features</h4>
                <p className='text-lg text-slate-500'>Create receipts and manage your center with a seamless and intuitive user interface.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10'>
                {featureData?.map((feature, index) => (
                    <FeatureList key={index} body={feature.description} title={feature.title} />
                ))}
            </div>
        </section>
    </div>
    )
}

export default FeaturesSection;
