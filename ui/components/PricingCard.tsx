'use client'
import React from 'react';
import Button from '../Button';
import { FaCheck } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

interface PricingCardProps {
   subscriptionPlan: string;
   amount: string;
   planFeatures: Array<string>
}

const PricingCard = ({ subscriptionPlan, amount, planFeatures}:PricingCardProps) => {
    const router = useRouter();
    return (
        <div className='border-gray-300 border-[1px] w-full p-4 mt-10 flex flex-col justify-center max-w-[20rem]'>
            <div className='flex flex-col justify-center items-center gap-2 mb-10'>
                <p className='font-bold text-slate-500 text-3xl'>{subscriptionPlan}</p>
                <p className='font-medium text-slate-600 text-3xl'>{amount}</p>
                <p className='font-light text-slate-500'>per month</p>
            </div>


            <ul className=' text-slate-500 space-y-4'>
                {planFeatures?.map((feature:string, index:number) => (
                    <li key={index} className='flex items-center gap-2'><FaCheck/> {feature}</li> 
                ))}
            </ul>
            <Button label='Choose Plan' className='p-4 mt-8' onClick={() => router.push(`/signup?plan=${subscriptionPlan}`)}/>
        </div>
    )
}

export default PricingCard
