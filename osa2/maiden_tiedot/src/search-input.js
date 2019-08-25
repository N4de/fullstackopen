import React from 'react';

const SearchInput = ({setFilter}) => (
    <div>
        find countries <input onChange={setFilter} />
    </div>
)



export default SearchInput;