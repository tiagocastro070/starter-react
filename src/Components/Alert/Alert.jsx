import React from 'react';

import './Alert.scss';

/**
 * Alert Component
 * 
 * @param {type} String - success, error, info or warning
 * @param {message} String - message
 */

const Alert = (props) => {

	return <div className={`alert alert--${props.type} alert--show`}>{props.message}</div>;

}

export default Alert;