'use client'
import React, { useEffect, useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useSearchParams } from 'next/navigation';
import { useLoading } from '@/lib/LoadingContext';
import {sendGTMEvent} from '@next/third-parties/google'

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
    subscriptionPlan: ""
};



const SignUpForm = () => {
    const { setIsLoading } = useLoading();
    const searchParams = useSearchParams();
    const initialPlan = searchParams.get('plan');
    const [selectedPlan, setSelectedPlan] = useState<string | null>(initialPlan);


    const [isOtpStep, setIsOtpStep] = useState<boolean>(false);
    const [isOtpVerified, setIsOtpVerified] = useState<boolean>(false);
    const [otpMessage, setOtpMessage] = useState<string>('');
    const [signUpApiMessage, setSignUpApiMessage] = useState<string>('');


    const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPlan(event.target.value);
    };

    const handleSubmit = async (values: SignUpFormValues, { setSubmitting }: FormikHelpers<SignUpFormValues>) => {

        setIsLoading(true);
        try {
            sendGTMEvent({event: 'Register business Sign Up button', value: "User clicked"})
            const response = await fetch(`${process.env.NEXT_PUBLIC_SIGNUP_API}`, {
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

            localStorage.setItem('tallycases', values.businessRepEmail);
            setSignUpApiMessage(data?.message)

            if (data?.success === true) {
                setIsOtpStep(true);
                handleOTPGenerate();
            }

            // Optionally handle success (e.g., redirect the user, show a success message)
        } catch (error) {
            console.error('Error submitting the form:', error);
            // Optionally handle error (e.g., show an error message)
        } finally {
            setIsLoading(false)
        }
    };

    const handleOTPGenerate = async () => {
        const email = localStorage.getItem("tallycases");
        const emailData = {
            email
        }

        //console.log('Submitted', email);
        setIsLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_GENERATE_OTP}`, {
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
            //  console.log('Form submitted successfully:', data);
            setOtpMessage(data?.sendOTPMail?.message)
            if (data?.sendOTPMail?.success === true) {
                setIsOtpStep(true);
            }
            // Optionally handle success (e.g., redirect the user, show a success message)
        } catch (error) {
            console.error('Error Generating OTP:', error);
            // Optionally handle error (e.g., show an error message)
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOTP = async (otp: string) => {
        const email = localStorage.getItem("tallycases");
        const emailData = {
            email,
            otp
        }

        // console.log('Submitted', emailData);

        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_VERIFY_OTP}`, {
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
            // console.log('OTP :', otpData);
            if (otpData?.success === true) {
                setIsOtpVerified(true);
            }
            setOtpMessage(otpData?.message)
            // Optionally handle success (e.g., redirect the user, show a success message)
        } catch (error) {
            console.error('Error Verifying OTP:', error);
            // Optionally handle error (e.g., show an error message)
        } finally {
            setIsLoading(false)
        }
    };


    useEffect(() => {
        if (signUpApiMessage) {
            const timer = setTimeout(() => {
                setSignUpApiMessage('')
            }, 10000)
            return () => clearTimeout(timer)
        }
    }, [signUpApiMessage])

    return (
        <div className="w-full md:w-[35rem] mx-auto mt-[10rem]">
            {isOtpStep ? (<OTPInput onComplete={(otp) => {
                handleVerifyOTP(otp)
                // console.log('OPT opened')
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
                        businessRepEmail: Yup.string().email('Invalid email address').required(),
                        businessName: Yup.string()
                            .min(4, 'Must be at least 4 characters')
                            .max(100, 'Must not be more than 50')
                            .required('Required'),
                        businessSubdomain: Yup.string()
                            .min(4, 'Must be at least 4 characters')
                            .max(60, 'Must not be more than 60 characters')
                            .required('Required'),
                        businessPhoneNumber: Yup.string().required()
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
                                    // checked={selectedPlan}
                                    // onChange={handlePlanChange}
                                    />
                                    <RadioButton label='Pro' name='subscriptionPlan'
                                        type='radio'
                                        id='ProPlan'
                                        value='Pro'
                                    // checked={selectedPlan}
                                    // onChange={handlePlanChange}
                                    />
                                </div>

                            </section>
                            <section>
                                <p className="text-base mt-4 text-gray-600 font-light">
                                    Business Representative Details
                                </p>
                                <TextInput
                                    label='First name'
                                    name="businessRepFirstName"
                                    placeholder="Business rep first name"
                                    id="businessRepFirstName"
                                    type="text"
                                />
                                <TextInput
                                    label='Last name'
                                    name="businessRepLastName"
                                    placeholder="Business rep last name"
                                    id="businessRepLastName"
                                    type="text"
                                />
                                <TextInput
                                    label='email'
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
                                    placeholder="short one word for your domain. eg. my-business, mybusiness, business "
                                />
                               
                                <TextInput
                                    label="Business Phone number"
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

                                <p className='text-red-400 text-sm p-4 font-light'>{signUpApiMessage}</p>


                            </section>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
};

export default SignUpForm;
