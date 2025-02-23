import React,{ useContext } from 'react';
import { useBlog } from '../BlogContext';

export default function Search() {
    const {searchQuery,setSearchQuery} = useBlog();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search"
                className="px-4 py-2 border rounded-4xl md:w-full w-40 max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>
    );
}
