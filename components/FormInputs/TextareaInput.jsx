"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const TextareaInput = ({label,name,register,errors,isRequired=true,type="text",className="sm:col-span-2",placeholder=""}) => {
    
    return (
        <div className={className}>
            <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
            >
                {label}
            </label>
            <div className="mt-2">
                <textarea
                {...register(`${name}`, { required: isRequired })}
                name={name}
                id={name}
                type={type}
                rows={3}
                className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                placeholder={placeholder}
                />
                {errors.title && (
                <span className="text-sm text-red-600 ">
                    La description est requise!
                </span>
                )}
            </div>
        </div>
    );
}

export default TextareaInput;
