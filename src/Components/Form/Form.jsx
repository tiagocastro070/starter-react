import React from 'react';

const Form = (props) => {

	return (
		<form id={props.formid} action={props.action} method={props.method} noValidate>
			{props.children}
		</form>
	)

}

Form.defaultProps = {
	formid: `form-${Math.random().toString(36).substring(7)}`,
	action: '',
	method: 'POST'
}

export default Form;