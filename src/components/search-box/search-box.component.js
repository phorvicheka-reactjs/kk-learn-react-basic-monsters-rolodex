import React from 'react';

import './search-box.styles.css';

const SearchBox = ({ placeholder, handlerOnChange }) => {
    return (
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={handlerOnChange}
        />
    );
};

export default SearchBox;
