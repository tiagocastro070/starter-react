import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button.jsx';
import Alert from '../../Components/Alert/Alert.jsx';
import Form from '../../Components/Form/Form.jsx';
import Input from '../../Components/Form/Input/Input.jsx';
import Checkbox from '../../Components/Form/Checkbox/Checkbox.jsx';
import Radio from '../../Components/Form/Radio/Radio.jsx';
import Textarea from '../../Components/Form/Textarea/Textarea.jsx';

import './Stylesheet.scss';
import favicon from '../../images/favicon.png';

import Select from '../../Components/Form/Select/Select.jsx';
import File from '../../Components/Form/File/File.jsx';

class Stylesheet extends React.Component {
	render() {
		return (
				<div className="container">

					<br /><br />

					<div className="grid-stylesheet">

						<section className="colors">
							<h6>colors</h6>
							<div className="palette main">
								<div className="palette__main"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<h5>Primary</h5>
							</div>
							<div className="palette secondary">
								<div className="palette__main"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<h5>Secondary</h5>
							</div>
							<div className="palette neutrals">
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<div className="palette__shade"></div>
								<h5>Neutrals</h5>
							</div>
						</section>

						<section className="typography">
							<h6>typography</h6>
							<div className="font-family">
								<div className="font-family-bold">
									<h1>Aa</h1>
									<h4>Montserrat Bold</h4>
								</div>
								<div className="font-family-medium">
									<h1>Aa</h1>
									<h4>Montserrat Medium</h4>
								</div>
								<div className="font-family-light">
									<h1>Aa</h1>
									<h4>Montserrat Light</h4>
								</div>
							</div>
							<div className="font-example">
								<div className="font-example__headline">
									<h6 className="subheader">Headlines</h6>
									<h1>h1 headline</h1>
									<h2>h2 headline</h2>
									<h3>h3 headline</h3>
									<h4>h4 headline</h4>
									<h5>h5 headline</h5>
									<h6>h6 headline</h6>
								</div>
								<div className="font-example__bodytext">
									<h6 className="subheader">Body Text - <em>Open-sans</em></h6>
									<p>I think we need to start from scratch. Jazz it up a little bit- use a funky color like purple.</p>
									<p><strong> Can you add a bit of pastel pink and baby blue because the purple alone looks too fancy.</strong></p>
									<p><em> Make the purple more well, purple-er. Try a more powerful colour, it needs to be the same, but totally different.</em></p>
								</div>
							</div>
						</section>

						<section className="buttons-wrapper">
							<h6>Buttons</h6>
							<Button tag="button" className="btn btn-primary">Button</Button>
							&nbsp;
							<Button tag="button" className="btn btn-primary btn-danger">Button</Button>
							&nbsp;
							<Button tag="button" className="btn btn-primary btn-success">Button</Button>
						</section>

						<section className="links">
							<h6>Links</h6>
							<div className="links__sec">
								<Link to="#">Sample link</Link>
							</div>
						</section>

						<section className="inputs-selects">
							<h6>Forms Validation, Inputs & Selects</h6>
							<Form action="/some" method="POST">
								<div className="row">
									<div className="col-6">
										<Input id="input-normal" label="true" labelValue="Normal" placeholder="this is a placeholder" required={true} />
										<Input id="input-password" label="true" labelValue="Password" type="password" placeholder="minimum length 3" required={true} minLength="3" />
										<Input id="input-min" label="true" labelValue="Normal" placeholder="maximum length 7" required={true} maxLength="7" />
										<Input id="input-max" label="true" labelValue="Normal" placeholder="minimum length 3 and maximum length 7" required={true} minLength="3" maxLength="7" />
										<Select label="true" labelValue="My Custom Select" required={true} requiredMessage="Please choose one option">
											<option value="">Select option</option>
											<option value="">Cuba</option>
											<option value="">Cabo Verde</option>
										</Select>
									</div>
									<div className="col-6">
										<Textarea label="true" labelValue="Description" placeholder="this is a placeholder" required={true} />
										<Checkbox checkboxid="form-terms" name="form-terms" required={true} requiredMessage="You must agree with our terms and conditions" checkboxText="I have read and agree with the terms and conditions." />
										<Radio radioid="form-terms0" name="form-termsa" required={true} requiredMessage=" " radioText="Radio button option." />
										<Radio radioid="form-terms1" name="form-termsa" required={true} requiredMessage=" " radioText="Radio button option." />
										<Radio radioid="form-terms2" name="form-termsa" required={true} requiredMessage="You have to choose one of the options" radioText="Radio button option." />
										<File multiple={true} />
									</div>
								</div>
								<Button tag="button" className="btn btn-primary">Button</Button>
							</Form>
						</section>

						<section className="badges">
							<h6>responsive images</h6>
							<img srcSet="https://via.placeholder.com/320x100 767w,
								  https://via.placeholder.com/480x230 991w,
								  https://via.placeholder.com/800x350"
								sizes="(max-width: 767px) 767px, (max-width: 991px) 991px, 992px"
								src="https://via.placeholder.com/800x350" alt="Elva dressed as a fairy" style={{maxWidth: '100%'}}
							/>
						</section>

						<section className="alerts">
							<h6>Alerts</h6>
							<Alert type="info" message="This is an error message. Please try again!" />
							<Alert type="success" message="This is a success message. Thank you!" />
							<Alert type="error" message="This is an error message. Please try again!" />
							<Alert type="warning" message="This is an error message. Please try again!" />
						</section>

						<section className="favicons">
							<h6>favicon</h6>
							<img src={favicon} alt="" />
						</section>

						<section className="grid-layout">
							<h6>grid</h6>
							<div className="row grid">
								<div className="col-12"><div></div></div>
								<div className="col-6"><div></div></div>
								<div className="col-6"><div></div></div>
								<div className="col-4"><div></div></div>
								<div className="col-4"><div></div></div>
								<div className="col-4"><div></div></div>
								<div className="col-3"><div></div></div>
								<div className="col-3"><div></div></div>
								<div className="col-3"><div></div></div>
								<div className="col-3"><div></div></div>
								<div className="col-2"><div></div></div>
								<div className="col-2"><div></div></div>
								<div className="col-2"><div></div></div>
								<div className="col-2"><div></div></div>
								<div className="col-2"><div></div></div>
								<div className="col-2"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
								<div className="col-1"><div></div></div>
							</div>
						</section>

					</div>
					<div className="p-3 mt-5 mb-2 bg-light text-black-50 text-monospace text-center">
						<small>Styleguide Grid Credits:</small><br/>
						<b><a href="https://codepen.io/oliviale/pen/mgWjpq" target="_blank" rel="noopener noreferrer">Olivia Ng</a></b>
					</div>
				</div>
		)
	}
}

export default Stylesheet;