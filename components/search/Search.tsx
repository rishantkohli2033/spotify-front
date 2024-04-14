import React, { useEffect, useState } from 'react';
import Header from '../main-content/header/Header';
import SearchInput from './search-input/SearchInput';
import useHomeSearch from '@/store/useHomeSearch';
import { getFeaturedPlaylists, getToken } from '@/lib/actions';
import SongItem from '../main-content/content/SongItem';
import LoadingSkeleton from '../loading-skeleton/LoadingSkeleton';

type SearchProps = {};

const Search:React.FC<SearchProps> = () => {
    const [accessToken, setAccessToken] = useState("");
    const {playerAuthor,loading, setLoading} = useHomeSearch();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const genToken = async () => {
            setLoading(true);
            const token = await getToken();
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

                    <SongItem key={idx} songImage={category.images[0].url} songName={category.name} search={true}/>

                ))}
                
            </div>}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4'>
                
            
            {
                loading && [...Array(18)].map((_,idx)=>(
                    <div key={idx}>
                    <LoadingSkeleton  />
                    <div >

                    </div >
                    </div>
                ))
            }
            </div>
            </div>
        </>
        
    )
}
export default Search;