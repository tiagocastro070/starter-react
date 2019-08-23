import React from 'react';
import instance from '../../services/api.js'

class About extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			users: [],
			loading: true
		}
	}

	buildComponent() {
		const authors = this.state.users;
		const data = authors.map((author, index) => {
            return (
                <div className="col-md-3" key={index}>
                    {author.name}
                </div>
            )
        });

		return (
            <div className="row">
                {data}
            </div>
        )
	}

	async componentDidMount() {
		const { data } = await instance.get('/users');
        this.setState({users: data});
	}

	render() {
		return (
			<div className="container">
				<h1>About Page</h1>
				<img src="https://via.placeholder.com/100x100" alt="Imagem"/>
				<ul>
					{ this.buildComponent() }
					{ /* this.state.data.map(person => <li>{person.name}</li>) */ }
				</ul>
			</div>
		)
	}

}

export default About;