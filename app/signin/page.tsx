import SignIn from '@/ui/components/SignIn';
import type { Metadata } from "next";
import React from 'react';
import { LoadingProvider } from '@/lib/LoadingContext';
import LoadingIndicator from '@/ui/components/loading/LoadingIndicator';

export const metadata: Metadata = {
    title: "Tally Cases - Sign In",
    description: "Revenue Management Tool",
  };

const page = () => {
    return (
        <LoadingProvider>
            <LoadingIndicator/>
             <div>
            <SignIn/>
        </div>
        </LoadingProvider>
       
    )
}

export default page;
