import React from 'react'

const SignIn = () => {
    return (
        <div className='mt-[10rem] w-full md:w-[35rem]  mx-auto'>
            <div className='w-full md:w[30rem] p-4'>
                <p className="text-xl md:text-3xl text-gray-600 font-bold">
                    Sign In on Tally Cases
                </p>
                <div className='border-gray-300 border-[1px] w-full p-4 mt-10'>
                    <p className='text-gray-500'>
                        To sign In to your business page, prefix <span className='text-gray-900 font-bold'>.tallycases.com</span> with your business subdomain
                    </p>
                    <p className='py-1 px-4 mt-[2rem] bg-gray-200 rounded-xl w-fit'>https://<span className='text-red-600'>business</span>.tallycases.com</p>
                </div>

            </div>

        </div>
    )
}

export default SignIn
