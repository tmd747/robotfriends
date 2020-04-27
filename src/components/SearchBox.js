import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
		<input 
			className='pa3 ba b--#355B5A bg-lightest-blue tc'
			type='search' 
			placeholder='Search Robots' 
			onChange={searchChange}
		/>
		</div>
	);
}

export default SearchBox;