/* eslint-disable no-useless-constructor */
import React from 'react';
import { Redirect , NavLink, Link } from 'react-router-dom';

import Store from '../../context.js';

import './Header.scss';
import logo from '../../images/logo.svg';

class Header extends React.Component {

	constructor(props) {
		super(props);
		
		this.changeLang = this.changeLang.bind(this);
	}

	changeLang(lang) {
		this.context.myApp.setLang(lang);
		window.location.href = `${window.location.origin}/${lang}`;
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
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to={`/${this.context.myApp.setLang()}`} exact>Home</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to={`/${this.context.myApp.setLang()}/about`}>About</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to={`/${this.context.myApp.setLang()}/contacts`}>Contacts</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to={`/${this.context.myApp.setLang()}/privacy-policy`}>Privacy Policy</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to={`/${this.context.myApp.setLang()}/stylesheet`}>Stylesheet</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to={`/${this.context.myApp.setLang()}/api`} strict>API</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--selected" to={`/${this.context.myApp.setLang()}/404`}>404</NavLink></li>
							<li className="nav-item"><button className="nav-lang" onClick={() => this.changeLang('pt')}>PT</button></li>
							<li className="nav-item"><button className="nav-lang" onClick={() => this.changeLang('en')}>EN</button></li>
						</ul>
					</div>
				</nav>
				<br/>
				<br/>
			</div>
		)
	}

}

Header.contextType = Store;

export default Header;