import { LoadingProvider } from '@/lib/LoadingContext';
import Blog from '@/ui/components/blog/Blog';
import LoadingIndicator from '@/ui/components/loading/LoadingIndicator';
import Pricing from '@/ui/components/Pricing';
import React from 'react'

const page = () => {
    return (
        <LoadingProvider>
            <LoadingIndicator/>
              <div>
<Blog/>
        </div>
        </LoadingProvider>
      
    )
}

export default page;
