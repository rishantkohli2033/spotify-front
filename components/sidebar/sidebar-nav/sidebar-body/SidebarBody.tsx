"use client"
import React, { useEffect, useState } from 'react';
import SidebarBodyItem from './sidebar-body-tem/SidebarBodyItem';
import { getBrowseCategories, getToken } from '@/lib/actions';
import useHomeSearch from '@/store/useHomeSearch';
import LoadingSkeleton from '@/components/loading-skeleton/LoadingSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

type SidebarBodyProps = {

};

const SidebarBody: React.FC<SidebarBodyProps> = () => {
    const [accessToken, setAccessToken] = useState("");
    const {playerAuthor,loading, setLoading} = useHomeSearch();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const genToken = async () => {
            setLoading(true);
            const token = await getToken();
            if (!token) console.log("error");
            const res = await getBrowseCategories(token);
            
            setAccessToken(token);
            setCategories(res);
            setLoading(false);
        }
        genToken();

    }, []);
    return (
        <>
            {!loading && <div className='flex flex-col gap-y-2 mt-4 px-3 overflow-y-auto'>
                {categories.map((category: any, idx: number) => (

                    <SidebarBodyItem key={idx} itemImage={category.icons[0].url} itemName={category.name} />

                ))}
            </div>}
            {
                loading && [...Array(18)].map((_,idx:number) => (
                    <div key={idx}>

                        <div  className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md m-2'>
                            <Skeleton className='h-20 w-20 bg-neutral-800 ' />
                            <div className='flex flex-col gap-y-1 overflow-hidden'>
                            <Skeleton className='h-4 w-28 bg-neutral-800 ' />
                            
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
        

    )
}
export default SidebarBody;