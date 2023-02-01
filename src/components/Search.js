import React from "react"
import {BsSearch} from 'react-icons/bs';

const Search = ({ handleSearchNote }) => {
    return (
        <div className="searchContainer">
            <BsSearch className="searchIcon" size='1.3em' />
            <input onChange={(e) => handleSearchNote(e.target.value)} className="searchBar" type="text" placeholder="Type To Search Note"></input>
        </div>
    );
};

export default Search;