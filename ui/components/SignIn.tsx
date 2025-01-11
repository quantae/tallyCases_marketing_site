import React from 'react'

const SignIn = () => {
    return (
        <div className='mt-[10rem] w-full md:w-[35rem]  mx-auto'>
            <div className='w-full md:w[30rem] p-4'>
                <p className="text-xl md:text-3xl text-gray-600 font-bold">
                    Login to Tally Cases
                </p>
                <div className='border-gray-300 border-[1px] w-full p-4 mt-10'>
                    <p className='text-gray-500'>
                        Sign In to your business page by entering your business domain into your address bar.
                    </p>
                    <br/>
                    <p className='text-gray-500'>
                        Business URL is a prefix of <span className='text-gray-900 font-bold'>.tallycases.com</span> with your business subdomain. 
                    </p>
                    
                    <p className='mt-[2rem] text-gray-500 pl-1'>Example</p>
                    <p className='py-1 px-4 mt-[0.2rem] bg-gray-200 rounded-xl w-fit'><span className='text-red-600'>subdomain</span>.tallycases.com</p>
                </div>

            </div>

        </div>
    )
}

export default SignIn
