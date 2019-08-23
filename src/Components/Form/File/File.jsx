import React from 'react';
import './File.css';

/**
 * Input File Component
 * 
 * @param {multiple} Boolean default is false
 * @param {required} Boolean default is false
 * @param {label} Boolean default is false
 * @param {dataMsg} String message to be displayed if multiple files are selected
 * 
 * @author Tiago Castro
 */

class File extends React.Component {

	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	hasLabel() {
		if ( this.props.label !== false ) {
			return (
				<label htmlFor={ this.props.id ? this.props.id : '' }>{ this.props.labelValue }</label>
			)
		}
	}

	componentDidMount() {
		const item = this.myRef.current.querySelector('input');

		item.addEventListener('change', function() {

			if ( this.files.length > 1 ) {
				// multiple files selected
				var inputStr = this.getAttribute('data-selected').replace('%s', this.files.length);

			} else if ( this.files.length === 1 ) {
				// one file selected
				inputStr = this.files[0].name;

			} else {
				// empty
				inputStr = this.getAttribute('data-label');
			}

			// write to label mask
			this.previousElementSibling.innerHTML = inputStr;
		});

	}

	render () {
		return (
			<div ref={this.myRef}>
				{ this.hasLabel() }
				<div className="custom-file">
					<label htmlFor={this.props.id} className="custom-file__mask">{this.props.labelValue}</label>
					<input
						type="file"
						id={this.props.id}
						name={this.props.name}
						multiple={this.props.multiple}
						required={this.props.required}
						data-selected={this.props.dataMsg}
					/>
				</div>
			</div>
		)
	}
}

File.defaultProps = {
	id: null,
	name: null,
	class: null,
	multiple: false,
	required: false,
	dataMsg: '%s files selected',
	label: false,
	labelValue: 'Select a file'
}

export default File;