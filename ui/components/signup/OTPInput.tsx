'use client'
import React, { useRef, useState } from 'react';
import Button from '@/ui/Button';


// declare type for the props


type InputProps = {
    length?: number;
    isVerified: boolean;
    message: string;
    resend: () => void;
    onComplete: (pin: string,) => void;
};


const OTPInput = ({ length = 4, isVerified, message,resend,onComplete }: InputProps) => {
    // if you're not using Typescript, simply do const inputRef = useRef()


    const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));


    // if you're not using Typescript, do useState()
    const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));


    const handleTextChange = (input: string, index: number) => {
        const newPin = [...OTP];
        newPin[index] = input;
        setOTP(newPin);


        // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.
        if (input.length === 1 && index < length - 1) {
            inputRef.current[index + 1]?.focus();
        }

        if (input.length === 0 && index > 0) {
            inputRef.current[index - 1]?.focus();
        }

        // if the user has entered all the digits, grab the digits and set as an argument to the onComplete function.

        if (newPin.every((digit) => digit !== '')) {
            onComplete(newPin.join(''));
        }
    };


    return (
        <div className="w-full p-4">
        {isVerified ? (
            <div>
                <p className="text-lg md:text-xl text-green-300 font-bold mb-4">SUCCESS!</p>
                <p className="text-slate-600 my-6">{message}</p>
                <p className="text-slate-600 my-6">
                    Click signIn to log in to your account.
                </p>
            </div>
        ) : (
            <div>
                <p className="text-lg md:text-xl text-gray-600 font-bold">OTP Verification</p>
                <p className="text-slate-600 my-6">
                    Successfully created your account. Enter OTP sent to your email to activate your account.
                </p>
                <div className={`grid grid-cols-6 gap-6`}>
                    {Array.from({ length }, (_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={OTP[index]}
                            onChange={(e) => handleTextChange(e.target.value, index)}
                            ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
                            className={`border border-solid border-slate-500 focus:border-slate-600 p-5 outline-none`}
                            style={{ marginRight: index === length - 1 ? '0' : '15px' }}
                        />
                    ))}
                </div>
                <p className="text-slate-00 my-6">{message}</p>
                <div className="flex items-center mt-6">
                   
                    <p className="text-gray-400">OTP code expired?</p>
                    <Button
                        label="Resend"
                        variant="borderless"
                        className=""
                        onClick={() => {
                           resend()
                            console.log('Resend OTP',)}}
                    />
                </div>
            </div>
        )}
    </div>
);
};


export default OTPInput;

