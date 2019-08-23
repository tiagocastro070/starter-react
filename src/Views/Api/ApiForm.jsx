import React from 'react';
import Button from '../../Components/Button/Button.jsx';
import Alert from '../../Components/Alert/Alert.jsx';
import Form from '../../Components/Form/Form.jsx';
import Input from '../../Components/Form/Input/Input.jsx';
import Pristine from 'pristinejs';

import instance from '../../services/api.js'

/**
 * API Form Demo
 * 
 * @author João Crulhas - https://github.com/joaoCrulhas
 */

class Api extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name:'',
				email: '',
				zona: '',
			},
			sendSuccess: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e, value, stateValue) {
		this.setState(prevState => ({
			user: {
				...prevState.user,
				[stateValue]: value,
			}
		}));
	}

	async handleSubmit(event) {
		event.preventDefault();

		const pristine = new Pristine( event.target.closest('form') );

		if ( pristine.validate() ) {
			const { user } = this.state;
			const { status } = await instance.post('/posts',  user);
			if (status === 201) {
				this.setState({sendSuccess: true});
				setTimeout(() => {
					this.setState({sendSuccess: false});
				}, 3000);
			}
		}
	}

	render() {
		let alert;
		const showSuccess = this.state.sendSuccess;
		if (showSuccess) {
			alert = <Alert type="success" message="User created!" />
		}

		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col-9">
							{alert}
							<Form>
								<Input
									name="name"
									type="text"
									placeholder="Nome"
									label="true"
									labelValue="Nome"
									handleChange={this.handleChange}
									required={true}
								/>
								<Input
									name="email"
									type="email"
									placeholder="Email"
									label="true"
									labelValue="Email"
									handleChange={this.handleChange}
									required={true}
								/>
								<Input
									name="zona"
									type="text"
									placeholder="Zona Residência"
									label="true"
									labelValue="Zona Residência"
									handleChange={this.handleChange}
									required={true}
								/>
								<Input
								required={true}
									name="assunto"
									type="text"
									placeholder="Assunto"
									label="true"
									labelValue="Assunto"
									handleChange={this.handleChange}
								/>
								<Button
									className="btn btn-primary"
									onClick={this.handleSubmit}>
									Submit
								</Button>
							</Form>
						</div>
						<div className="col-3">
							<div className="card text-white bg-dark mb-3">
								<div className="card-header">Form State</div>
								<div className="card-body">
									<h6 className="card-title">Nome</h6>
									<pre className="card-text" style={{color: 'white'}}>{this.state.user.name}</pre>
									<hr/>
									<h6 className="card-title">Email</h6>
									<pre className="card-text" style={{color: 'white'}}>{this.state.user.email}</pre>
									<hr/>
									<h6 className="card-title">Zona de Residência</h6>
									<pre className="card-text" style={{color: 'white'}}>{this.state.user.zona}</pre>
									<hr/>
									<h6 className="card-title">Assunto</h6>
									<pre className="card-text" style={{color: 'white'}}>{this.state.user.assunto}</pre>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	  }
}

export default Api;