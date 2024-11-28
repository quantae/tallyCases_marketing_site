'use client'
import SignUpForm from '@/ui/components/signup/SignUpForm';
import React, { Suspense } from 'react';
import { LoadingProvider } from '@/lib/LoadingContext';
import LoadingIndicator from '@/ui/components/loading/LoadingIndicator';


const page = () => {
  return (
    <LoadingProvider>
      <LoadingIndicator/>
      <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpForm />
      </Suspense>
    </div>  
    </LoadingProvider>
  
  )
}

export default page;
