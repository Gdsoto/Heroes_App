import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import getHeroesById from '../../selectors/gerHeroesById';

const heroImages = require.context('../../assets/img', true);

const HeroesScreen = ({ history }) => {
	const { heroId } = useParams();
	const hero = getHeroesById(heroId);

	if (!hero) {
		return <Redirect to="/" />;
	}

	const handleReturn = () => {
		if (history.length <= 2) {
			history.push('/');
		}
		history.goBack();
	};

	const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters,
	} = hero;

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					src={heroImages(`./${heroId}.jpg`).default}
					alt={heroId}
					className="img-thumbnail animate__animated animate__flipInX"
				/>
			</div>
			<div className="col-8">
				<h3>{superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego: </b>
						{alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher: </b>
						{publisher}
					</li>
					<li className="list-group-item">
						<b>First Appearance: </b>
						{first_appearance}
					</li>
					<li className="list-group-item">
						<h5>Characters</h5>
						<p>{characters}</p>
						<button className="btn btn-dark" onClick={handleReturn}>
							Return
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HeroesScreen;
