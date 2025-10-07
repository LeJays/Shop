"use client"
import FixedHeader from '@/components/dashboard/FixedHeader';
import OptionCard from '@/components/dashboard/OptionCard';
import { Boxes, FolderOpen, ScrollText, Shirt, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Inventory = () => {
    const optionCard =[
        {
            title: "Groupes d'articles",
            description: "Gérez vos groupes d'articles pour une organisation efficace.",
            link: "#",
            linkTitle: "Nouveau Groupe",
            enabled: false,
            icon: Boxes,
        },
        {
            title: "Articles & Services",
            description: "Gérez vos articles et services standards que vous vendez.",
            link: "/new",
            linkTitle: "Nouveau Produit",
            enabled: true,
            icon: Shirt,
        },
        {
            title: "produits Composés",
            description: "Créez et gérez des produits composés à partir de vos articles existants.",
            link: "#",
            linkTitle: "Nouveau Produit Composé",
            enabled: true,
            icon: ShoppingCart,
        },
        {
            title: "Listes de Prix",
            description: "Créez et gérez des listes de prix pour différents segments de clients.",
            link: "#",
            linkTitle: "Nouvelle Liste de Prix",
            enabled: false,
            icon: ScrollText ,
        }
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
