"use client"
import React, { useEffect, useState } from 'react';
import SidebarBodyItem from './sidebar-body-tem/SidebarBodyItem';
import { getBrowseCategories, getToken } from '@/lib/actions';

type SidebarBodyProps = {

};

const SidebarBody: React.FC<SidebarBodyProps> = () => {
    const [accessToken, setAccessToken] = useState("");

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const genToken = async () => {
            const token = await getToken();
            if (!token) console.log("error");
            const res = await getBrowseCategories(token);
            console.log(res);
            setAccessToken(token);
            setCategories(res);
        }
        genToken();

    }, []);
    return (
        <div className='flex flex-col gap-y-2 mt-4 px-3 overflow-y-auto'>
            {categories.map((category: any, idx: number) => (

                <SidebarBodyItem key={idx} itemImage={category.icons[0].url} itemName={category.name} />

            ))}
        </div>
        

    )
}
export default SidebarBody;