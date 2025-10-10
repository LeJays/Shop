"use client"
import FormHeader from '@/components/dashboard/FormHeader';
import SelectInput from '@/components/FormInputs/SelectInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextareaInput from '@/components/FormInputs/TextareaInput';
import TextInput from '@/components/FormInputs/TextInput';
import { Pencil, X } from 'lucide-react';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { UploadButton, UploadDropzone } from '@/lib/uploadthing';

const NewItem = () => {
    const [imageUrl, setImageUrl] = useState("");
    const suppliers = [
        { label: "Fournisseur A", value: "supplier-a" },
        { label: "Fournisseur B", value: "supplier-b" },
        { label: "Fournisseur C", value: "supplier-c" },
    ];
    const warehouses = [
        { label: "Entrepôt Principal", value: "main-warehouse" },
        { label: "Entrepôt Secondaire", value: "secondary-warehouse" },
        { label: "Entrepôt Tertiaire", value: "tertiary-warehouse" },
    ];
    const units = [
        { label: "Pièce", value: "piece" },
        { label: "Kg", value: "kg" }, 
        { label: "Litre", value: "litre" },
        { label: "Mètre", value: "metre" },
    ];
    const brands = [
        { label: "Apple", value: "apple" },
        { label: "Samsung", value: "samsung" },
        { label: "Sony", value: "sony" },
        { label: "LG", value: "lg" },
    ]; 
    const categories = [
        { label: "Electronique", value: "advvhdhdw563vfe6t3" },
        { label: "Meubles", value: "hdvhwvd636tt776872d" },
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
        data.imageUrl = imageUrl;
        console.log(data);
        setLoading(true);
        try {
            const response = fetch('/api/items', {
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
            <FormHeader title="Nouvel Article" href="/dashboard/inventory/" />
            {/*---------------------------FORM-------------------------*/}
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
            shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
                <div className="grid gap-4 sm:grid-cols-2">
                    <TextInput
                    label="Nom de l'article"
                    name="title"
                    isRequired={true}
                    register={register}
                    errors={errors}
                    className='w-full'
                    placeholder="Entrez le nom de l'article (ex: Samsung Galaxy S24 Ultra)"
                    />

                    <SelectInput
                    register={register}
                    label="Choisir la catégorie de l'article"
                    name={"categoryId"}
                    options={categories}
                    className='w-full'
                    />
                     
                    <TextInput
                    label="SKU (identifiant unique de l'article)"
                    name="sku"
                    isRequired="true"
                    register={register}
                    errors={errors}
                    placeholder="Entrez le SKU (ex: SKU12345)"
                    className='w-full'
                    />

                    <TextInput
                    label="Code-barres"
                    name="barcode"
                    isRequired="false"
                    register={register}
                    errors={errors}
                    placeholder="Entrez le code-barres (ex: 123456789012)"
                    className='w-full'
                    />

                    <TextInput
                    label="Quantité"
                    name="qty"
                    isRequired={true}
                    register={register}
                    errors={errors}
                    placeholder="Ex: 100"
                    className='w-full'
                    />

                    <SelectInput
                    name="unitId"
                    label="Unité de mesure"
                    register={register}
                    className='w-full'
                    options={units}
                    />

                    <SelectInput
                    name="brandId"
                    label="Marque de l'article"
                    register={register}
                    className='w-full'
                    options={brands}
                    />

                    <TextInput
                    label="Prix d'achat"
                    name="buyingPrice"
                    isRequired={true}
                    register={register}
                    errors={errors}
                    type='number'
                    placeholder="Entrez le prix d'achat (ex: 400000)"
                    className='w-full'
                    />

                    <TextInput
                    label="Prix de vente"
                    name="sellingPrice"
                    type='number'
                    isRequired={true}
                    register={register}
                    errors={errors}
                    placeholder="Entrez le prix de vente (ex: 500000)"
                    className='w-full'
                    />

                    <SelectInput
                    name="supplierId"
                    label="Fournisseur (Optionnel)"
                    register={register}
                    errors={errors}
                    className='w-full'
                    options={suppliers}
                    />

                    <TextInput
                    label="Point d'alerte"
                    name="reOrderPoint"
                    type='number'
                    isRequired={true}
                    register={register}
                    errors={errors}
                    placeholder="Entrez le point d'alerte(stock minimum ex: 10)"
                    className='w-full'
                    />

                    <SelectInput
                    name="warehouseId"
                    label="Choisir l'entrepôt de stockage de l'article"
                    register={register}
                    className='w-full'
                    options={warehouses}

                    />

                    <TextInput
                    label="poids (kg) (Optionnel)"
                    name="weight"
                    type='number'
                    isRequired={false}
                    register={register}
                    errors={errors}
                    placeholder="Entrez le poids en kg de l'article (ex: 2)"
                    className='w-full'
                    />

                    <TextInput
                    label="Dimensions de l'article (LxlxH) (Optionnel)"
                    name="dimensions"
                    isRequired={false}
                    register={register}
                    errors={errors}
                    placeholder="Entrez les dimensions en cm (ex: 10x5x15)"
                    className='w-full'
                    />

                    <TextInput
                    label="TVA (%)"
                    name="taxRate"
                    type='number'
                    isRequired={true}
                    register={register}
                    errors={errors}
                    placeholder="Entrez le taux de TVA (ex: 19)"
                    className='w-full'
                    />


                    <TextareaInput
                    label="Description (Optionnel)"
                    name="description"
                    placeholder='Entrez une description'
                    isRequired={false}
                    register={register}
                    errors={errors} 
                    />

                    <TextareaInput
                    label="Remarques (Optionnel)"
                    name="notes"
                    placeholder="Entrez une remarque sur l'article (s'il y a lieu)"
                    isRequired={false}
                    register={register}
                    errors={errors} 
                    />
                </div>

                {/* Course Image */}

                {/* Upload thing */}
                <div className="col-span-full">
                <div className="flex justify-between items-center mb-4">
                    <label
                    //htmlFor="course-image"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Image de l'article (Optionnel)
                    </label>
                    {imageUrl && (
                    <button
                        onClick={() => setImageUrl("")}
                        type="button"
                        className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
                    >
                        <Pencil className="w-5 h-5" />
                        <span>Change Image</span>
                    </button>
                    )}
                </div>
                {imageUrl ? (
                    <Image
                    src={imageUrl}
                    alt="Item image"
                    width={1000}
                    height={667}
                    className="w-full h-64 object-cover"
                    />
                ) : (
                    <UploadDropzone
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        setImageUrl(res[0].ufsUrl);
                        // Do something with the response
                        console.log(res);
                        console.log("Upload Completed");
                    }}
                    onUploadError={(error) => {
                        // Do something with the error.
                        console.log(`ERROR! ${error.message}`);
                    }}
                    />
                )}
                </div>


                {/* Submit Button */}
                <SubmitButton isLoading={loading} title="Enregistrer"/>
            </form>
        </div>
    );
}

export default NewItem;