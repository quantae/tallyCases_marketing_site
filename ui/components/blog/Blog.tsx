import React from 'react';
import PricingCard from '../PricingCard';
import { pricingData } from '@/lib/data';

const Blog = () => {
    return (
        <div>
            <div className="w-full md:w-[45rem] mx-auto mt-[10rem]">
                <div className='w-full p-4 flex flex-col items-center'>
                    <p className="text-xl md:text-3xl text-gray-600 font-bold">
                        Tutorial Section on Tally Cases Platform
                    </p>
                    <p className="text-lg md:text-lg text-gray-500 ">
                        Easy and straightforward know-how tutorials
                    </p>
                    <div className=' w-full p-4 mt-10 flex flex-col justify-center items-center  md:items-start md:flex-row gap-4'>
                      <p className='text-slate-500'>No tutorials yet</p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Blog
