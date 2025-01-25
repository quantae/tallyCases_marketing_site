'use client'
import type { Metadata } from "next";
import SignUpForm from '@/ui/components/signup/SignUpForm';
import React, { Suspense } from 'react';
import { LoadingProvider } from '@/lib/LoadingContext';
import LoadingIndicator from '@/ui/components/loading/LoadingIndicator';

const metadata: Metadata = {
  title: "Tally Cases - Sign Up",
  description: "Revenue Management Tool",
};

const page = () => {
  return (
    <LoadingProvider>
      <LoadingIndicator/>
      <div>
      <Suspense fallback={<div>Loading...</div>}>
      <title>Tally Cases -Sign Up</title>
     
        <SignUpForm />
      </Suspense>
    </div>  
    </LoadingProvider>
  
  )
}

export default page;
