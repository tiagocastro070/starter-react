import React from 'react';

/**
 * Input Component
 * should be inside Form Component
 *
 * @param {type} String text, number, email, password, phone - default is text
 * @param {id} String default is null
 * @param {name} String default is null
 * @param {readOnly} Boolean default is false
 * @param {required} Boolean default is false
 * @param {disabled} Boolean default is false
 * @param {value} String default is null
 * @param {placeholder} String default is null
 * @param {minLength} Number minimum characters input should have
 * @param {maxLength} Number maximum characters input should have
 * @param {label} Boolean create or not a label before the input - default is false
 * @param {labelValue} String text to be presented on label tag
 * @param {autoComplete} Boolean disable native autocomplete dropdown
 *
 * @author Tiago Castro
 */

class Input extends React.Component {

	constructor(props) {
		super(props);
		this.hasLabel = this.hasLabel.bind(this);
		this.changeValue = this.changeValue.bind(this);
	}

	hasLabel() {
		if ( this.props.label !== false ) {
			return (
				<label htmlFor={ this.props.id ? this.props.id : '' }>{ this.props.labelValue }</label>
			)
		}
	}

	changeValue(e) {
		const { value } = e.target;
		if (typeof this.props.handleChange !== "undefined") {
			this.props.handleChange(e, value, this.props.name);
		}
	}

	render() {
		return(
			<div className="form-group">
				{ this.hasLabel() }
				<input
					type={this.props.type}
					id={this.props.id}
					name={this.props.name}
					className="form-control"
					placeholder={this.props.placeholder}
					required={this.props.required}
					disabled={this.props.disabled}
					readOnly={this.props.readOnly}
					minLength={this.props.minLength}
					maxLength={this.props.maxLength}
					autoComplete={this.props.autoComplete ? "on" : "off"}
					value={this.props.value}
					onChange={this.changeValue}
				/>
			</div>
		)
	}

}



Input.defaultProps = {
	type: 'text',
	id: `input-${Math.random().toString(36).substring(7)}`,
	name: null,
	readOnly: false,
	required: false,
	disabled: false,
	value: '',
	placeholder: null,
	minLength: null,
	maxLength: null,
	autoComplete: 'off',
	label: false,
	labelValue: 'Label'
}

export default Input;