import React from 'react'
import FeatureList from '../components/FeatureList'

const FeaturesSection = () => {
    return (
        <div className=' w-full flex justify-center'>
            <section className='w-full md:w-[80%] pt-[5rem] pb-[5rem] flex flex-col p-4'>
                <div className='flex flex-col gap-4 w-full md:w-[70%] lg:w-[60%] xl:w-[40%] mb-[5rem] justify-start'>
                    <p className='text-primary text-xl'>Features</p>
                    <h4 className='text-4xl font-medium text-text'>Main Features of Tally Cases</h4>
                    <p className='text-lg text-slate-500'>Experience a seamless and intuitive user interface fully equipped with support for the Myanmar & English language.</p>
                </div>
                <div className='flex flex-wrap justify-between gap-4 sm:gap-6 lg:gap-10'>
                    <FeatureList body='Intuitive Categories, Units, & Items in One Seamless Experience.' title='Empower Your Team' />
                    <FeatureList body='Intuitive Categories, Units, & Items in One Seamless Experience.' title='Empower Your Team' />
                    <FeatureList body='Intuitive Categories, Units, & Items in One Seamless Experience.' title='Empower Your Team' />
                    <FeatureList body='Intuitive Categories, Units, & Items in One Seamless Experience.' title='Empower Your Team' />
                </div>
            </section>

        </div>
    )
}

export default FeaturesSection;
