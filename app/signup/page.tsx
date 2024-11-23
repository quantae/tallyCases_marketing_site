'use client'
import SignUpForm1 from '@/ui/components/signup/SignUpForm1';
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation';

const page = () => {
  return (
    <div>
<Suspense fallback={<div>Loading...</div>}>
<SignUpForm1 />
</Suspense>
      

    </div>
  )
}

export default page;
