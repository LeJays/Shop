"use client"
import FormHeader from '@/components/dashboard/FormHeader';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextareaInput from '@/components/FormInputs/TextareaInput';
import TextInput from '@/components/FormInputs/TextInput';
import { X } from 'lucide-react';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';

const NewUnit = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);
    async function onSubmit(data) {
        console.log(data);
        setLoading(true);
        try {
            const response = fetch('/api/units', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                console.log(data);
                setLoading(false);
                reset();
            }
            
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    } 
    return (
        <div>
            {/*---------------------------HEADER-------------------------*/}
            <FormHeader title="Nouvelle Unité" href="/dashboard/inventory/" />
            {/*---------------------------FORM-------------------------*/}
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
            shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
                <div className="grid gap-4 sm:grid-cols-2">
                    <TextInput
                    label="Nom de l'unité"
                    name="title"
                    placeholder='Ex: Kilogramme, Pièce, Litre...'
                    isRequired={true}
                    register={register}
                    errors={errors}
                    className='w-full'
                    /> 
                    <TextInput
                    label="Abréviation"
                    name="abbreviation"
                    placeholder='Ex: Kg, Pc, L...'
                    isRequired={true}
                    register={register}
                    errors={errors} 
                    className='w-full'
                    />
                </div>
                
                {/* Submit Button */}
                <SubmitButton isLoading={loading} title="Enregistrer"/>
            </form>
        </div>
    );
}

export default NewUnit;