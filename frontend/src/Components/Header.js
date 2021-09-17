import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

export default function Header(props) {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						{props.title}
					</Link>
					<button
						className="menu navbar-toggler"
						aria-label="Main Menu"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
					>
						<Hamburger></Hamburger>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact Us
								</Link>
							</li>
						</ul>
						{props.searchBar ? (
							<form className="d-flex">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button className="btn btn-outline-primary" type="submit">
									Search
								</button>
							</form>
						) : (
							''
						)}
					</div>
				</div>
			</nav>
		</header>
	);
}

Header.defaultProps = {
	title: 'Your Title Here',
	searchBar: false,
};

Header.protoTypes = {
	title: PropTypes.string,
	searchBar: PropTypes.bool,
};
