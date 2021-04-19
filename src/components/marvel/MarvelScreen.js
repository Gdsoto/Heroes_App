import React from 'react';
import HeroesList from '../heroes/HeroesList';

const MarvelScreen = () => {
	return (
		<>
			<h2>Marvel Comics</h2>
			<hr />
			<HeroesList publisher={'Marvel Comics'} />
		</>
	);
};

export default MarvelScreen;
