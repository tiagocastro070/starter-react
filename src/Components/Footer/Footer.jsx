import React from 'react';
import Store from '../../context.js';
import Cookies from '../../Components/Cookies/Cookies.jsx';

class Footer extends React.Component {
	
	render() {
		return (
			<div className="container text-center">
				<div className="p-3 mt-5 mb-2 bg-dark text-white-50 text-monospace">
					<small>{this.context.siteTitle} &copy; {new Date().getFullYear()}</small>
				</div>
				<Cookies />
			</div>
		)
	}
	
}

Footer.contextType = Store;

export default Footer;