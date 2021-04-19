import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import useForm from '../../Hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = ({ history }) => {
	const { search } = useLocation();
	const { q = '' } = queryString.parse(search);

	const [formValue, handleInputChange] = useForm({
		searchText: q,
	});

	const { searchText } = formValue;
	const heroesFilteres = useMemo(() => getHeroesByName(q), [q]);

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`?q=${searchText}`);
	};

	return (
		<div>
			<h1>Search Hero</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Hero..."
							className="form-control"
							name="searchText"
							value={searchText}
							autoComplete="off"
							onChange={handleInputChange}
						/>
						<div className="d-grid mt-3">
							<button type="submit" className="btn btn-success">
								Search
							</button>
						</div>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />

					{q === '' && <div className="alert alert-info">Search a hero ..</div>}
					{q !== '' && heroesFilteres.length === 0 && (
						<div className="alert alert-warning">Hero not found</div>
					)}
					{heroesFilteres.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchScreen;
