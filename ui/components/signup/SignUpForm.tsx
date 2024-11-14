import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from "yup";
import { SignUpFormValues } from '@/lib/types';

// components
import { TextInput } from '@/ui/inputs/TextInput';
import Button from '@/ui/Button';



// Initial Form values
const initialValues: SignUpFormValues = {
    firstName: "",
    lastName: "",
    businessName: "",
    businessSubdomain: "",
    businessPhoneNumber: "",
    businessEmail: "",

};

const handleSubmit = async (values: SignUpFormValues, {setSubmitting}: FormikHelpers<SignUpFormValues>) => {

    try {
        // code to handle form submission
        console.log('Submitted values:', values);
    } finally {
        setSubmitting(false);
    }
}


const SignUpForm = () => {
    
    return (
        <div className="">
            <Formik
                initialValues={initialValues}
                validateOnChange
                validateOnBlur
                onSubmit={handleSubmit}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .min(3, "Must be at least 2 characters")
                        .max(20, "Must me less than 24 characters")
                        .required("Required"),
                    lastName: Yup.string()
                        .min(2, "Must be at least 10 characters")
                        .max(20, "Must not be more than 20 characters")
                        .required("Required"),
                    businessName: Yup.string().min(4, "Must be at least 4 characters")
                        .max(100, "Must not be more than 100 characters")
                        .required("Required"),
                    businessSubdomain: Yup.string().min(4, "Must be at least 4 characters")
                        .max(20, "Must not be more than 100 characters")
                        .required("Required"),
                    businessPhoneNumber: Yup.string().min(12, "Must be at least 13 characters")
                        .max(12, "Must not be more than 100 characters")
                        .required("Required"),
                    businessEmail: Yup.string().email('Invalid email address')

                })}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <div className="w-full md:w-[35rem] mx-auto mt-[10rem]">
                            <div className="bg-theme-white p-4 h-fit rounded-2xl ">
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
                                        placeholder="last Name"
                                    />




                                </section>
                            </div>
                            <div className="bg-theme-white h-fit p-4 rounded-2xl">
                                <p className="text-base mt-4 text-gray-600 font-light">
                                    Business Details
                                </p>
                                <section>
                                    <TextInput
                                        label="business Name"
                                        name="businessName"
                                        id="businessName"
                                        type="text"
                                        placeholder="Name of the parent Business"
                                    />

                                    <TextInput
                                        label="business Subdomain"
                                        name="businessSubdomain"
                                        id="businessSubdomain"
                                        type="text"
                                        placeholder="subdomain for business"
                                    />
                                    <TextInput
                                        label="Business Email"
                                        name="businessEmail"
                                        id="businessEmail"
                                        type="email"
                                        placeholder="example@email.com"
                                    />

                                 

                                    <div role="group" aria-labelledby="">

                                    </div>

                                    <div className="w-full border-[0.3px] border-opacity-40 my-6 border-theme-primaryLight"></div>
                                    <div className="flex flex-col gap-4">
                                        <Button
                                            label={ isSubmitting ? "Processing..." : "Sign Up"}
                
                                            variant="primary"
                                            className="p-2"
                                            type="submit"
                                            disabled={isSubmitting}
                                        />
                        
                                    </div>
                                </section>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUpForm
