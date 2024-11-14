import React from 'react';
import { useField, FieldInputProps, FieldMetaProps, FormikProps } from 'formik';

type TextInputProps = {
  label?: string;
  className?: string;
  name: string;
  [key: string]: any;
};

export function TextInput({ label, className, name, ...props }: TextInputProps) {
  const [field, meta] = useField(name);

  return (
    <div className={`p-2 ${className}`}>
      {label ? (
        <label
          className={`text-gray-700 font-light text-xs`}
          htmlFor={props.id || name}
        >
          {label}
        </label>
      ) : null}
      <input
        className="px-2 py-2 w-full mt-1 hover:border-gray-600 placeholder:font-extralight placeholder:text-theme-dark-300 placeholder:text-base focus:outline-none border"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-300">{meta.error}</div>
      ) : null}
    </div>
  );
}