/* eslint-disable no-useless-constructor */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.scss';
import logo from '../../images/logo.svg';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link className="navbar-brand" to="/">
						<img src={ logo } alt="" width="60" height="60" />
					</Link>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to="/" exact>Home</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to="/about">About</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to="/contacts">Contacts</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to="/privacy-policy">Privacy Policy</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to="/stylesheet">Stylesheet</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to="/api" strict>API</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to="/404">404</NavLink></li>
						</ul>
					</div>
				</nav>
				<br/>
				<br/>
			</div>
		)
	}

}

export default Header;