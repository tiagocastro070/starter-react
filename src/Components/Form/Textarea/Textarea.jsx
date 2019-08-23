import React from 'react';

/**
 * Textarea Component
 * 
 * @param {readOnly} Boolean default is false
 * @param {required} Boolean default is false
 * @param {disabled} Boolean default is false
 * @param {required} Boolean default is false
 * @param {label} Boolean default is false
 * @param {minLength} Int default is null
 * @param {maxLength} Int default is null
 * @param {placeholder} String default is null
 * @param {autoComplete} String off, on - default is off
 * 
 * @author Tiago Castro
 */

class Textarea extends React.Component {

	constructor(props) {
		super(props);

		this.hasLabel = this.hasLabel.bind(this);
	}

	hasLabel() {
		if ( this.props.label !== false ) {
			return (
				<label htmlFor={ this.props.id ? this.props.id : '' }>{ this.props.labelValue }</label>
			)
		}
	}
	
	render() {
		return(
			<div className="form-group">
				{ this.hasLabel() }
				<textarea
					id={this.props.id}
					name={this.props.name}
					className="form-control"
					placeholder={this.props.placeholder}
					required={this.props.required}
					disabled={this.props.disabled}
					readOnly={this.props.readOnly}
					minLength={this.props.minLength}
					maxLength={this.props.maxLength}
					autoComplete={this.props.autoComplete}
					defaultValue={this.props.value}
				/>
			</div>
		)
	}
	
}

Textarea.defaultProps = {
	id: null,
	name: null,
	readOnly: false,
	required: false,
	disabled: false,
	defaultValue: '',
	placeholder: null,
	minLength: null,
	maxLength: null,
	autoComplete: 'off',
	label: false,
	labelValue: 'Label'
}

export default Textarea;