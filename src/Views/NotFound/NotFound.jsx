import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

class NotFound extends React.Component {
	render() {
		return (
			<div className="text-center">
				<img src={ logo } alt=""width="120" height="120" />
				<h1 className="display">Page not found</h1>
				<p className="lead">The page you are looking for was not found. Go back to homepage.</p>
				<Link to="/" className="btn btn-primary">Homepage</Link>
			</div>
		)
	}
}

export default NotFound;