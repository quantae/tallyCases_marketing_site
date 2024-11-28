'use client'
import React from 'react';
import{Riple} from 'react-loading-indicators';
import { useLoading } from '@/lib/LoadingContext';


const LoadingIndicator = () => {
  const {isLoading} = useLoading();

  if (!isLoading) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999] bg-slate-400/10'>
       <Riple size="large" text="Tally" color="#8c8c8c"/>
    </div>
  )
}

export default LoadingIndicator
