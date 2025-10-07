import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import React from 'react';

export default function CollapsibleLinks({href, title}) {
    return (
        <Link   
        className="flex items-center justify-between pl-8 pr-4 py-2 hover:bg-slate-900 
        rounded-md transition-all duration-300 space-x-3" 
        href={href}>
            <span className='text-sm'>{title}</span>
            <PlusCircle className='w-4 h-4'/>
        </Link>
    );
}  

