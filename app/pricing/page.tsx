import { LoadingProvider } from '@/lib/LoadingContext';
import type { Metadata } from "next";
import LoadingIndicator from '@/ui/components/loading/LoadingIndicator';
import Pricing from '@/ui/components/Pricing';
import React from 'react'


export const metadata: Metadata = {
    title: "Tally Cases - Pricing",
    description: "Revenue Management Tool",
  };

const page = () => {
    return (
        <LoadingProvider>
            <LoadingIndicator/>
               <div>
         <Pricing/>
        </div>
        </LoadingProvider>
     
    )
}

export default page;
