import React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { SignUpFormValues } from '@/lib/types';
import { TextInput } from '@/ui/inputs/TextInput';
import Button from '@/ui/Button';

// Initial Form values
const initialValues: SignUpFormValues = {
    firstName: '',
    lastName: '',
    businessName: '',
    businessSubdomain: '',
    businessPhoneNumber: '',
    businessRepEmail: '',
};

// Submit handler
const handleSubmit = async (
    values: SignUpFormValues,
    { setSubmitting }: FormikHelpers<SignUpFormValues>
) => {
    try {
        console.log('Form submitted with values:', values);
        // Add your API or form submission logic here
    } catch (error) {
        console.error('Error during form submission:', error);
    } finally {
        setSubmitting(false);
    }
};

const SignUpForm = () => {
    return (
        <div className="w-full md:w-[35rem] mx-auto mt-[10rem]">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .min(3, 'Must be at least 2 characters')
                        .max(20, 'Must be less than 24 characters')
                        .required('Required'),
                    lastName: Yup.string()
                        .min(2, 'Must be at least 2 characters')
                        .max(20, 'Must not be more than 20 characters')
                        .required('Required'),
                    businessName: Yup.string()
                        .min(4, 'Must be at least 4 characters')
                        .max(100, 'Must not be more than 100 characters')
                        .required('Required'),
                    businessSubdomain: Yup.string()
                        .min(4, 'Must be at least 4 characters')
                        .max(20, 'Must not be more than 100 characters')
                        .required('Required'),
                    businessPhoneNumber: Yup.string()
                        .min(12, 'Must be at least 12 characters')
                        .max(12, 'Must not be more than 12 characters')
                        .required('Required'),
                    businessRepEmail: Yup.string().email('Invalid email address'),
                })}
            >
               <Form>
               <div className=" p-4 h-fit rounded-2xl">
                            <p className="text-xl md:text-3xl text-gray-600 font-bold">
                                Sign up on Tally Cases
                            </p>
                            <section>
                                <p className="text-base mt-4 text-gray-600 font-light">
                                    Business Representative Details
                                </p>
                                <TextInput
                                    name="firstName"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name of admin user or business Rep"
                                />
                                <TextInput
                                    name="lastName"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </section>
                        </div>
                        <div className="bg-theme-white h-fit p-4 rounded-2xl mt-6">
                            <p className="text-base mt-4 text-gray-600 font-light">Business Details</p>
                            <section>
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
                                <TextInput
                                    label="Business Email"
                                    name="businessRepEmail"
                                    id="businessRepEmail"
                                    type="email"
                                    placeholder="example@email.com"
                                />
                                <div className="w-full border-[0.3px] border-opacity-40 my-6 border-theme-primaryLight"></div>
                                <div className="flex flex-col gap-4">
                                    <button className='bg-black text-white hover:bg-slate-800 py-2' type='submit'>
                                        Sign Up
                                    </button>
                                    {/* <Button
                    label={isSubmitting ? 'Processing...' : 'Sign Up'}
                    variant="primary"
                    className="p-2"
                    type="submit" // Ensure the button type is 'submit'
                    disabled={isSubmitting}
                  /> */}
                                </div>
                            </section>
                        </div>
                
               </Form>
                
                       
                
            </Formik>
        </div>
    );
};

export default SignUpForm;
