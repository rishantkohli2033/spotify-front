import React from 'react';
import Header from '../main-content/header/Header';
import Content from '../main-content/content/Content';
import SearchInput from './search-input/SearchInput';

type SearchProps = {};

const Search:React.FC<SearchProps> = () => {
    
    return (
        <div className='bg-neutral-900  mt-2 mb-2 rounded-lg  w-full overflow-hidden overflow-y-auto'>
            <Header/>
            <SearchInput />
        </div>
    )
}
export default Search;