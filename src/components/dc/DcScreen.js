import React from 'react';
import HeroesList from '../heroes/HeroesList';

const DcScreen = () => {
	return (
		<>
			<h2>Dc Comics</h2>
			<hr />
			<HeroesList publisher={'DC Comics'} />
		</>
	);
};

export default DcScreen;
