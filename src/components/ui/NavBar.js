import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
	const { user, dispatch } = useContext(AuthContext);
	const history = useHistory();

	const handleLogout = () => {
		history.replace('/login');
		dispatch({
			type: types.logout,
		});
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<i className="bi bi-bug-fill"></i>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								exact
								activeClassName="active"
								className="nav-link"
								to="/marvel"
							>
								Marvel
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								activeClassName="active"
								className="nav-link"
								to="/dc"
							>
								DC
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								activeClassName="active"
								className="nav-link"
								to="/search"
							>
								<i className="bi bi-search"></i> Search
							</NavLink>
						</li>
					</ul>
					<div className="d-flex mx-4">
						<span className="text-light">
							<i className="bi bi-person-fill"></i> {user.name}
						</span>
					</div>
					<div className="d-flex">
						<button
							className="nav-item btn btn-outline-light"
							onClick={handleLogout}
						>
							<i className="bi bi-door-closed-fill"></i> Logout
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
