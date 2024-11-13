import React, { ReactNode } from 'react';

type LocationAndPhoneProps = {
  icon: ReactNode;
  title: string;
  body: string;
}

const LocationAndPhone = ({
  icon, 
  title = 'Our Location', 
  body = '23, Kaw Li Ya Street, South Okkalapa, Township, Yangon'
}: LocationAndPhoneProps) => {
  return (
    <div className='grid grid-cols-cus-1-6fr  md:grid-cols-cus-1-5fr items-center w-full md:w-[60%]'>
      <div className='h-full pt-4 flex items-start align-top'>
        <div className='w-full flex items-center justify-center '>
          {icon}
        </div>
      </div>
      <div className='md:p-4 pt-4 flex flex-col gap-2 rounded-lg'>
        <div className='font-bold md:text-xl text-base'>{title}</div>
        <div className='text-slate-500 md:text-base text-sm'>
          {body}
        </div>
      </div>
    </div>
  );
}

export default LocationAndPhone;
