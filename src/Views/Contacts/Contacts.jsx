/* eslint-disable no-useless-constructor */
import React from 'react';

import Form from '../../Components/Form/Form';

class Contacts extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<h1>Contacts Page</h1>
				<Form />
			</div>
		)
	}

}

export default Contacts;