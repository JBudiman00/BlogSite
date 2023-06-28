'use client'

import { useRouter } from 'next/navigation';

export default function NavBar () {
    const router = useRouter();
    const tabElement = [
        'flex',
        'flex-col',
        'w-32',
        'justify-center',
        'items-center',
        'hover:bg-[#9F825B]'
    ].join(' ');

    return (
        <div className="grid grid-cols-8 bg-[#DAC09B] h-16 sticky text-[#82614A]">
            <div className="flex flex-row col-span-7 items-stretch">
                <div 
                    className={tabElement}
                    onClick={() => router.push('/')}    
                >
                    <p className="text-lg">Home</p>
                </div>
                <div 
                    className={tabElement}
                    onClick={() => router.push('/nathan')}    
                >
                    <p className="text-lg">Nathan</p>
                </div>
                <div 
                    className={tabElement}
                    onClick={() => router.push('/chloe')}    
                >
                    <p className="text-lg">Chloe</p>
                </div>
                <div 
                    className={tabElement}
                    onClick={() => router.push('/us')}    
                >
                    <p className="text-lg">Chloe+Nathan</p>
                </div>
                <div 
                    className={tabElement}
                    onClick={() => router.push('/timeline')}    
                >
                    <p className="text-lg">Timeline</p>
                </div>
            </div>
            <div className="flex flex-row col-span-1 justify-end">
                <div 
                    className={tabElement}
                    onClick={() => router.push('/')}    
                >
                    <p className="text-lg ">Contact</p>
                </div>
            </div>
        </div>
    );
}