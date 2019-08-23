import React from 'react';

/**
 * Radio Component
 * should be inside Form Component
 * 
 * @param {radioid} String
 * @param {name} String
 * @param {required} Boolean
 * @param {requiredMessage} String
 * @param {radioText} String
 * 
 * @author Tiago Castro
 */

class Radio extends React.Component {
	render() {
		return (
			<div className="form-group form-check">
				<input
					id={this.props.radioid}
					className="form-check-input"
					type="radio"
					name={this.props.name}
					required={this.props.required}
					data-pristine-required-message={this.props.requiredMessage}
				/>
				<label className="form-check-label" htmlFor="ch1">{this.props.radioText}</label>
			</div>
		)
	}
}

Radio.defaultProps = {
	radioid: '',
	name: '',
	radioText: 'Check me out',
	required: false,
	requiredMessage: 'You must check me'
}

export default Radio;