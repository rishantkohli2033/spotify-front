import React, { useEffect, useState } from 'react';
import Header from '../main-content/header/Header';
import Content from '../main-content/content/Content';
import SearchInput from './search-input/SearchInput';
import useHomeSearch from '@/store/useHomeSearch';
import { getBrowseCategories, getFeaturedPlaylists, getGenres, getToken } from '@/lib/actions';
import { Skeleton } from '../ui/skeleton';
import SongItem from '../main-content/content/SongItem';

type SearchProps = {};

const Search:React.FC<SearchProps> = () => {
    const [accessToken, setAccessToken] = useState("");
    const {playerAuthor,loading, setLoading} = useHomeSearch();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const genToken = async () => {
            setLoading(true);
            const token = await getToken();
            if (!token) console.log("error");
            const res = await getFeaturedPlaylists(token);
            setAccessToken(token);
            setCategories(res);
            setLoading(false);
        }
        genToken();

    }, []);
    return (
        <>
        <div className='bg-neutral-900  mt-2 mb-2 rounded-lg  w-full overflow-hidden overflow-y-auto'>
            <Header/>
            <SearchInput />
        
            {!loading && <div className='m-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4'>
                {categories.map((category: any, idx: number) => (

                    <SongItem key={idx} songImage={category.images[0].url} songName={category.name} />

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
            </div>
        </>
        
    )
}
export default Search;