import SignIn from '@/ui/components/SignIn';
import React from 'react';
import { LoadingProvider } from '@/lib/LoadingContext';
import LoadingIndicator from '@/ui/components/loading/LoadingIndicator';

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
