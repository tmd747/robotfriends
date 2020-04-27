import React from 'react';
import './Scroll.css'

const Scroll = (props) => {
	return (
		<div className='scrollBar' style={{ overflowY: 'scroll', border: '1.5px solid #355B5A'}}>
			{props.children}
		</div>
		);
}

export default Scroll;