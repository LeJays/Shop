"use client"
import FixedHeader from '@/components/dashboard/FixedHeader';
import OptionCard from '@/components/dashboard/OptionCard';
import { Boxes, FolderOpen, Network, ScrollText, Shirt, ShoppingCart, Trello, Wallet2Icon, WalletCards, Warehouse } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Inventory = () => {
    const optionCard =[
        {
            title: "Catégories",
            description: "Organisez vos articles en catégories pour une gestion simplifiée.",
            link: "/dashboard/inventory/Categories/new",
            linkTitle: "Créer une catégorie",
            enabled: true,
            icon: Network,
        },
        {
            title: "Articles & Services",
            description: "Gérez vos articles et services standards que vous vendez.",
            link: "/dashboard/inventory/items/new",
            linkTitle: "Créer un article",
            enabled: true,
            icon: Shirt,
        },
        {
            title: "Marques",
            description: "Ajoutez et gérez les marques de vos produits.",
            link: "/dashboard/inventory/brands/new",
            linkTitle: "Gérer les marques",
            enabled: true,
            icon: Trello,
        },
        {
            title: "Unités",
            description: "Créez et gérez les unités de mesure pour vos articles.",
            link: "/dashboard/inventory/units/new",
            linkTitle: "Créer une unité",
            enabled: true,
            icon: Boxes ,
        },
        {
            title: "Entrepôts",
            description: "Gérez vos entrepôts et suivez les niveaux de stock.",
            link: "/dashboard/inventory/warehouse/new",
            linkTitle: "Ajouter un entrepôt",
            enabled: true,
            icon: Warehouse,
        },
        {
            title: "Ajustements de stock",
            description: "Effectuez des ajustements de stock pour corriger les écarts.",
            link: "/dashboard/inventory/adjustments",
            linkTitle: "Nouveau Ajustement",
            enabled: true,
            icon: WalletCards,
        },
    ]
    return (
        <div>
            <FixedHeader newLink="/dashboard/inventory/items/new"/>
            <div className="grid grid-col-1 lg:grid-cols-2 py-8 px-16 gap-6">
                {
                    optionCard.map((card,i)=>{
                        return (
                            <OptionCard key={i} optionData={card}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Inventory;
