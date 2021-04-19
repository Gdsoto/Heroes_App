import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DcScreen from '../components/dc/DcScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/NavBar';

const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-5">
				<Switch>
					<Route exact path="/marvel" component={MarvelScreen} />
					<Route exact path="/hero/:heroId" component={HeroesScreen} />
					<Route exact path="/dc" component={DcScreen} />
					<Route exact path="/search" component={SearchScreen} />
					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
	);
};

export default DashboardRoutes;
