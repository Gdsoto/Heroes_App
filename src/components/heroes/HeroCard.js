import React from 'react';
import { Link } from 'react-router-dom';

const heroImages = require.context('../../assets/img', true);

const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
}) => {
	return (
		<div className="col mb-3">
			<div className="card">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={heroImages(`./${id}.jpg`).default} alt={id} className="card-img" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{superhero}</h5>
							<p className="card-text">{alter_ego}</p>
							<p className="card-text">
								<small className="text-muted">{first_appearance}</small>
							</p>
							<Link to={`./hero/${id}`}>Mas...</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroCard;
