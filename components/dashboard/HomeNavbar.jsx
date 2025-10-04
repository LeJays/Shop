"use client"
import { Building2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HomeNavbar = () => {
    const pathname = usePathname()
    console.log(pathname)
    const navLinks = [
        {
            title: "Tableau de Bord",
            href: "/dashboard/home/overview",
        },
        {
            title: "Commencer",
            href: "/dashboard/home/getting-started",
        },
        {
            title: "Dernière mise à jour",
            href: "/dashboard/home/updates",
        },
        {
            title: "Notifications",
            href: "/dashboard/home/annoucements",
        },
    ];
    return (
        <div className='h-32 p-5 header-bg bg-slate-50 border-b border-slate-300'>
            <div className="flex space-x-3">
                <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
                    <Building2/>
                </div>
                <div className="flex flex-col">
                    <p className='text-slate-700 font-semibold'>SALUT, JAMES WALTER</p>
                    <span className='text-sm'>JaymyShop</span>
                </div>
            </div>
            <nav className='sticky mt-6 flex space-x-4'>
                {
                    navLinks.map((item,i) => {
                        return (
                            <Link 
                                key={i} 
                                href={item.href} 
                                className={`${pathname === item.href ? "py-1 border-b-2 border-blue-600" : "py-1"}`}
                            >
                                {item.title}
                            </Link>
                        )
                    })
                }
            </nav>
        </div>
    );
}

export default HomeNavbar;
