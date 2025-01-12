import { LoadingProvider } from '@/lib/LoadingContext';
import type { Metadata } from "next";
import Blog from '@/ui/components/blog/Blog';
import LoadingIndicator from '@/ui/components/loading/LoadingIndicator';
import Pricing from '@/ui/components/Pricing';
import React from 'react'


export const metadata: Metadata = {
    title: "Tally Cases- Blog Page",
    description: "Revenue Management Tool",
  };

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
