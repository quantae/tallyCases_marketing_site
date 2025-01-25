'use client';
import React, { useRef, useState, useEffect } from 'react';
import Button from '@/ui/Button';
import { useRouter } from 'next/navigation';

type InputProps = {
    length?: number;
    isVerified: boolean;
    message: string;
    resend: () => void;
    onComplete: (pin: string) => void;
};

const OTPInput = ({
    length = 6,
    isVerified,
    message,
    resend,
    onComplete,
}: InputProps) => {
    const inputRef = useRef<HTMLInputElement[]>([]);
    const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));
    const [otpApiMessage, setOtpApiMessage] = useState<string>("");
    const router = useRouter();


    useEffect(() => {
        if (message) {
            setOtpApiMessage(message)
        }
    }, [message])


    useEffect(() => {
        if (otpApiMessage) {
            const timer = setTimeout(() => {
                setOtpApiMessage('')
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [otpApiMessage])




    const handleTextChange = (input: string, index: number) => {
        const newPin = [...OTP];
        newPin[index] = input;
        setOTP(newPin);

        // Focus on the next input field if a digit is entered
        if (input.length === 1 && index < length - 1) {
            inputRef.current[index + 1]?.focus();
        }

        // Focus on the previous field if the current field is emptied
        if (input.length === 0 && index > 0) {
            inputRef.current[index - 1]?.focus();
        }

        // Trigger onComplete if all digits are entered
        if (newPin.every((digit) => digit !== '')) {
            onComplete(newPin.join(''));
        }
    };

    return (
        <div className="w-full p-4">
            {isVerified ? (
                <div>
                    <p className="text-lg md:text-xl text-green-300 font-bold mb-4">
                        SUCCESS!
                    </p><p className="text-slate-600 my-6">{message}</p>
                    {/* <p className="text-slate-600 my-6">{otpApiMessage}</p> */}
                    <p className="text-slate-600 my-6">
                        Check your email for login details. Reset your password by using &ldquo;forgot password button&ldquo;</p>
                    <Button label='Log In' className='py-2' onClick={() => {
                        router.push('/signin')
                    }} />
                </div>
            ) : (
                <div>
                    <p className="text-lg md:text-xl text-gray-600 font-bold">
                        OTP Verification
                    </p>
                    <p className="text-slate-600 my-6">
                        Successfully created your account. Enter the OTP sent to your email
                        to activate your account.
                    </p>
                    <div className="grid grid-cols-6 gap-6">
                        {Array.from({ length }, (_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={OTP[index]}
                                onChange={(e) => handleTextChange(e.target.value, index)}
                                ref={(ref) => {
                                    if (ref) {
                                        inputRef.current[index] = ref;
                                    }
                                }}
                                className="border border-solid border-slate-500 focus:border-slate-600 p-5 outline-none"
                                style={{ marginRight: index === length - 1 ? '0' : '15px' }}
                            />
                        ))}
                    </div>

                    <p className="text-slate-500 my-6">{otpApiMessage}</p>

                    <div className="flex items-center mt-6">
                        <p className="text-gray-400">OTP code expired?</p>
                        <Button
                            label="Resend"
                            variant="borderless"
                            className="ml-2"
                            onClick={() => {
                                resend();
                                // console.log('Resend OTP');
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default OTPInput;
