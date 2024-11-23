import React from 'react';
import { useField, FieldInputProps, FieldMetaProps, FormikProps } from 'formik';

type TextInputProps = {
  label?: string;
  className?: string;
  name: string;
  [key: string]: any;
};

export function RadioButton({ label, className, name, ...props }: TextInputProps) {
  const [field, meta] = useField(name);

  return (
    <div className={`p-4 w-full flex justify-start items-center gap-4 hover:border-gray-600 mt-4 border ${className}`}>
     
     <input
        className="p-4 hover:border-gray-600 placeholder:font-extralight placeholder:text-theme-dark-300 placeholder:text-base focus:outline-none border"
        {...field}
        {...props}
      />
      {label ? (
        <label
          className={`text-gray-700 font-light text-base `}
          htmlFor={props.id || name}
        >
          {label}
        </label>
      ) : null}
     
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-300">{meta.error}</div>
      ) : null}
    </div>
  );
}

