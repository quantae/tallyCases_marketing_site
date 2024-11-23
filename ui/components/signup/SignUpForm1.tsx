'use client'
import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useSearchParams } from 'next/navigation';

import Button from '@/ui/Button';
import { TextInput } from '@/ui/inputs/TextInput';
import { SignUpFormValues } from '@/lib/types';
import OTPInput from './OTPInput';
import { RadioButton } from '@/ui/inputs/RadioButton';

const initialValues: SignUpFormValues = {
    businessRepFirstName: "",
    businessRepLastName: "",
    businessRepEmail: "",
    businessName: "",
    businessSubdomain: "",
    businessPhoneNumber: "",
    subscriptionPlan:""
};



const SignUpForm1 = () => {
   const searchParams = useSearchParams();
    const initialPlan = searchParams.get('plan');
    const [selectedPlan, setSelectedPlan] = useState<string | null>(initialPlan);


    const [isOtpStep, setIsOtpStep] = useState<boolean>(false);
    const [isOtpVerified, setIsOtpVerified] = useState<boolean>(false);
    const [otpMessage, setOtpMessage] = useState<string>('');
    const [signUpMessage, setSignUpMessage] = useState<string>('');

   
     const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPlan(event.target.value);
    };

    const handleSubmit = async (values: SignUpFormValues, { setSubmitting }: FormikHelpers<SignUpFormValues>) => {
        console.log('handleSubmit initiated', values);

        try {
            const response = await fetch('https://www.tallycases.localhost:9000/api/v1/business/create-business', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Form submitted successfully:', data);
            localStorage.setItem('tallycases', values.businessRepEmail);
            setSignUpMessage(data?.message)

            if (data?.success === true) {
                setIsOtpStep(true);
                handleOTPGenerate();
            }

            // Optionally handle success (e.g., redirect the user, show a success message)
        } catch (error) {
            console.error('Error submitting the form:', error);
            // Optionally handle error (e.g., show an error message)
        } finally {
            setSubmitting(false);
        }
    };

    const handleOTPGenerate = async () => {
        const email = localStorage.getItem("tallycases");
        const emailData = {
            email
        }

        console.log('Submitted', email);

        try {
            const response = await fetch('https://www.tallycases.localhost:9000/api/v1/otp/generate-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(emailData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Form submitted successfully:', data);
            setOtpMessage(data?.message)
            if (data?.success === true) {
                setIsOtpStep(true);
            }
            // Optionally handle success (e.g., redirect the user, show a success message)
        } catch (error) {
            console.error('Error Generating OTP:', error);
            // Optionally handle error (e.g., show an error message)
        } finally {

        }
    };

    const handleVerifyOTP = async (otp: string) => {
        const email = localStorage.getItem("tallycases");
        const emailData = {
            email,
            otp
        }

        console.log('Submitted', emailData);

        try {
            const response = await fetch('https://www.tallycases.localhost:9000/api/v1/otp/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(emailData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const otpData = await response.json();
            console.log('OTP :', otpData);
            if (otpData?.success === true) {
                setIsOtpVerified(true);
            }
            setOtpMessage(otpData?.message)
            // Optionally handle success (e.g., redirect the user, show a success message)
        } catch (error) {
            console.error('Error Verifying OTP:', error);
            // Optionally handle error (e.g., show an error message)
        } finally {

        }
    };

    return (
        <div className="w-full md:w-[35rem] mx-auto mt-[10rem]">
            {isOtpStep ? (<OTPInput onComplete={(otp) => {
                handleVerifyOTP(otp)
                console.log('OPT opened')
            }} resend={handleOTPGenerate} length={6} isVerified={isOtpVerified} message={otpMessage} />) : (
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={Yup.object({
                        businessRepFirstName: Yup.string()
                            .min(3, 'Must be at least 2 characters')
                            .max(20, 'Must be less than 24 characters')
                            .required('Required'),
                        businessRepLastName: Yup.string()
                            .min(2, 'Must be at least 2 characters')
                            .max(20, 'Must not be more than 20 characters')
                            .required('Required'),
                        businessRepEmail: Yup.string().email('Invalid email address'),
                        businessName: Yup.string()
                            .min(4, 'Must be at least 4 characters')
                            .max(100, 'Must not be more than 100 characters')
                            .required('Required'),
                        businessSubdomain: Yup.string()
                            .min(4, 'Must be at least 4 characters')
                            .max(20, 'Must not be more than 100 characters')
                            .required('Required'),
                        businessPhoneNumber: Yup.string()
                            .min(12, 'Must be 12 digits')
                            .max(12, 'Must not exceed 12 digits'),
                            subscriptionPlan: Yup.string().required(),
                    })}
                >
                    {({ isSubmitting }) => (
                        <Form className="p-4 h-fit rounded-2xl">
                            <p className="text-xl md:text-3xl text-gray-600 font-bold">
                                Sign up on Tally Cases
                            </p>
                            <section className='mb-12'>
                                <p className="text-base mt-4 text-gray-600 font-light">
                                    Subscription Plan
                                </p>
                            <div className='flex flex-row justify-center gap-4'>
                                <RadioButton label='Basic' name='subscriptionPlan'
                                type='radio'
                                id='BasicPlan'
                                value='Basic'
                                checked={selectedPlan === 'Basic'}
                                onChange={handlePlanChange}
                                />
                                 <RadioButton label='Pro' name='subscriptionPlan'
                                type='radio'
                                id='ProPlan'
                                value='Pro'
                                checked={selectedPlan === 'Pro'}
                onChange={handlePlanChange} 
                                />
                            </div>
                                
                            </section>
                            <section>
                                <p className="text-base mt-4 text-gray-600 font-light">
                                    Business Representative Details
                                </p>
                                <TextInput
                                    name="businessRepFirstName"
                                    placeholder="Business rep first name"
                                    id="businessRepFirstName"
                                    type="text"
                                />
                                <TextInput
                                    name="businessRepLastName"
                                    placeholder="Business rep last name"
                                    id="businessRepLastName"
                                    type="text"
                                />
                                <TextInput
                                    name="businessRepEmail"
                                    id="businessRepEmail"
                                    type="email"
                                    placeholder="example@email.com"
                                />
                            </section>
                            <section className="h-fit rounded-2xl mt-16">
                                <p className="text-base mt-4 text-gray-600 font-light">Business Details</p>

                                <TextInput
                                    label="Business Name"
                                    name="businessName"
                                    id="businessName"
                                    type="text"
                                    placeholder="Name of the parent Business"
                                />
                                <TextInput
                                    label="Business Subdomain"
                                    name="businessSubdomain"
                                    id="businessSubdomain"
                                    type="text"
                                    placeholder="Subdomain for business"
                                />
                                <p className='text-red-400 text-sm p-4 font-light'>{signUpMessage}</p>
                                <TextInput
                                    label="Business Phone"
                                    name="businessPhoneNumber"
                                    id="businessPhoneNumber"
                                    type="tel"
                                    placeholder="233240234567"
                                />
                                <div className="w-full border-[0.3px] border-opacity-40 my-6 border-theme-primaryLight"></div>
                                <Button
                                    label={isSubmitting ? 'Submitting...' : 'Sign Up'}
                                    className="py-2 w-full"
                                    type="submit"
                                    disabled={isSubmitting}
                                />
                            </section>
                        </Form>
                    )}
                </Formik>
            )}




        </div>
    );
};

export default SignUpForm1;
