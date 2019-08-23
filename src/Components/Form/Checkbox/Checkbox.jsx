import React from 'react';

/**
 * Checkbox Component
 * should be inside Form Component
 * 
 * @param {checkboxid} String
 * @param {name} String
 * @param {required} Boolean
 * @param {requiredMessage} String
 * @param {checkboxText} String
 * 
 * @author Tiago Castro
 */

class Checkbox extends React.Component {
	
	render() {
		return (
			<div className="form-group form-check">
				<input
					type="checkbox"
					id={this.props.checkboxid}
					className="form-check-input"
					name={this.props.name}
					required={this.props.required}
					data-pristine-required-message={this.props.requiredMessage}
				/>
				<label className="form-check-label" htmlFor={this.props.checkboxid}>{this.props.checkboxText}</label>
			</div>
		)
	}

}

Checkbox.defaultProps = {
	checkboxid: `checkbox-${Math.random().toString(36).substring(7)}`,
	name: '',
	required: false,
	requiredMessage: 'Checkbox is required',
	checkboxText: 'Checkbox text'
}

export default Checkbox;