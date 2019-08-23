import React from 'react';

/**
 * API Form Demo
 * 
 * @param {tag} String a, button - default is button
 * @param {id} String default is null
 * @param {type} String button, submit, reset - default is null
 * 
 * @author Tiago Castro
 */

class Button extends React.Component {
	render() {
		const ButtonType = this.props.tag;
		return (
			<ButtonType
				id={this.props.id}
				className={this.props.className}
				type={this.props.type}
				href={this.props.href}
				title={this.props.title}
				target={this.props.target}
				rel={this.props.rel}
				onClick={this.props.onClick}
			>{this.props.children}</ButtonType>
		)
	}
}

Button.defaultProps = {
	tag: 'button',
	id: null,
	className: null,
	type: null,
	href: null,
	title: null,
	target: null,
	rel: null,
	onClick: null
}

export default Button;