'use client'
import SignUpForm from '@/ui/components/signup/SignUpForm';
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation';

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpForm />
      </Suspense>
    </div>
  )
}

export default page;
