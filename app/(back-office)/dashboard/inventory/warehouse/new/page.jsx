"use client"
import FormHeader from '@/components/dashboard/FormHeader';
import SelectInput from '@/components/FormInputs/SelectInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextareaInput from '@/components/FormInputs/TextareaInput';
import TextInput from '@/components/FormInputs/TextInput';
import { X } from 'lucide-react';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';

const NewWarehouse = () => {
    const selectOptions = [
        {
            label: "Principal",
            value: "principal"
        },
        {
            label: "Secondaire",
            value: "secondaire"
        },
    ]
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
            const response = fetch('/api/warehouse', {
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
            <FormHeader title="Nouvelle Entrepôt" href="/dashboard/inventory/" />
            {/*---------------------------FORM-------------------------*/}
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
            shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
                <div className="grid gap-4 sm:grid-cols-2">
                    <SelectInput
                    register={register}
                    label="Type d'entrepôt"
                    name={"type"}
                    options={selectOptions}
                    className='w-full'
                    />
                    <TextInput
                    label="Nom de l'entrepôt"
                    name="title"
                    isRequired={true}
                    register={register}
                    errors={errors}
                    className='w-full'
                    placeholder="Entrez le nom de l'entrepôt"
                    /> 
                    <TextInput
                    label="Localisation"
                    name="location"
                    isRequired={true}
                    register={register}
                    errors={errors}
                    placeholder="Entrez la localisation"
                    />
                    <TextareaInput
                    label="Description"
                    name="description"
                    placeholder='Entrez une description'
                    isRequired={false}
                    register={register}
                    errors={errors} 
                    />
                </div>


                {/* Submit Button */}
                <SubmitButton isLoading={loading} title="Enregistrer"/>
            </form>
        </div>
    );
}

export default NewWarehouse;