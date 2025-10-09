"use client"
import { BaggageClaim, BarChart4, Cable, ChevronLeft, FolderOpen, Home, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import SubscriptionCard from './SubscriptionCard';
import SidebarDropdownLink from './SidebarDropdownLink';
import CollapsibleLinks from './CollapsibleLinks';

const Sidebar = () => {
    const inventoryLinks = [
        {
            title: "Articles",
            href: "/dashboard/inventory/",
        },
        {
            title: "Catégories",
            href: "/dashboard/inventory/",
        },
        {
            title: "Marques  ",
            href: "/dashboard/inventory/",
        },
        {
            title: "Units",
            href: "/dashboard/inventory/",
        },
        {
            title: "Entrepôts",
            href: "/dashboard/inventory/",
        },
        {
            title: "Adjustements du stock",
            href: "/dashboard/inventory/",
        },
    ];
    const salesLinks = [
        {
            title: "Clients",
            href: "#",
        },
        {
            title: "Commandes Clients",
            href: "#",
        },
        {
            title: "Emballages",
            href: "#",
        },
        {
            title: "Livraisons",
            href: "#",
        },
        {
            title: "Factures",
            href: "#",
        },
        {
            title: "Reçus de Vente",
            href: "#",
        },
        {
            title: "Paiements Enregistrés",
            href: "#",
        },
        {
            title: "Retours Clients",
            href: "#",
        },
        {
            title: "Note de Crédit",
            href: "#",
        }
    ];
    return (
        <div className='w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed'>
            {/* Top Part */}
            <div className="flex flex-col">
                {/* Logo */}
                <Link href="#" className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
                    <ShoppingCart/>
                    <span className='text-x1 font-semibold'> GestiShop </span>
                </Link>
                {/* Links */}
                <nav className='flex flex-col gap-3 px-3 py-6'>
                    <Link className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md'
                    href="#">
                        <Home className='w-4 h-4'/>
                        <span>Acceuil</span>
                    </Link>

                    {/* Menu Stock */}
                    <SidebarDropdownLink title="Stock" items={inventoryLinks} icon={BaggageClaim}/>

                    {/* Menu Ventes */}
                    <SidebarDropdownLink title="Ventes" items={salesLinks} icon={ShoppingCart}/>
                    
                    <button className='p-2 flex items-center space-x-2'>
                        <ShoppingBag className='w-4 h-4'/>
                        <span>Achats</span>
                    </button>
                    <Link className='flex items-center space-x-2'
                    href="#">
                        <Cable className='w-4 h-4'/>
                        <span>Intégrations</span>
                    </Link>
                    <Link className='p-2 flex items-center space-x-2'
                    href="#">
                        <BarChart4 className='w-4 h-4'/>
                        <span>Rapports</span>
                    </Link>
                    <Link className='p-2 flex items-center space-x-2'
                    href="#">
                        <FolderOpen className='w-4 h-4'/>
                        <span>Documents</span>
                    </Link>
                </nav>
                <SubscriptionCard/>
            </div>
            
            {/* Bottom */}
            <div className="flex flex-col">
                <button className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
                    <ChevronLeft/>
                </button>
            </div>
            {/* Subscription Card */}
            {/* Footer */}
        </div>
    );
}

export default Sidebar;
