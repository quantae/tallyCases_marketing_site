import { LoadingProvider } from '@/lib/LoadingContext';
import LoadingIndicator from '@/ui/components/loading/LoadingIndicator';
import Pricing from '@/ui/components/Pricing';
import React from 'react'

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
