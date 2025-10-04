import { Check, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import SalesActivityCard from './SalesActivityCard';
import InventorySummaryCard from './InventorySummaryCard';

const SalesOverview = () => {
    const inventorySummary = [
        {
            title: "Quantite en stocks",
            number: 300,
        },
        {
            title: "Quantite en attente",
            number: 500,
        },
    ];

    const salesActivity=[
        {
            title: "À emballer",
            number: 3,
            unit: "Qte",
            href: "#", 
            color: "text-blue-600",
        },
        {
            title: "À expédier",
            number: 30,
            unit: "Pkgs",
            href: "#", 
            color: "text-red-600",
        },
        {
            title: "À livrer",
            number: 2,
            unit: "Qte",
            href: "#", 
            color: "text-green-600",
        },
        {
            title: "À facturer",
            number: 0,
            unit: "Pkgs",
            href: "#", 
            color: "text-orange-600",
        },
    ];
    
    return (
        <div className='bg-blue-50 border-b border-slate-300 grid grid-cols-12 gap-4'>
            {/* SALES ACTIVITY */}
            <div className="col-span-8 border-r border-slate-300 p-8">
                <h2 className='mb-6 text-xl'>Aperçu des ventes</h2>
                <div className="pr-8 grid grid-cols-4 gap-4">
                    {/* card */}
                    {
                        salesActivity.map((item,i)=>{
                            return(
                                <SalesActivityCard item={item} key={i}/>
                            )
                        })
                    }
                    
                </div>
            </div>
            {/* INVENTORY SUMMARY */}
            <div className="col-span-4 p-8">
            <h2 className='mb-6 text-xl'>Résumé des stocks</h2>
            <div className="">
                {
                    inventorySummary.map((item, i)=>{
                        return (
                            <InventorySummaryCard item={item} key={i}/>
                        )
                    })
                }
            </div>
            </div>
        </div>
    );
}

export default SalesOverview;
