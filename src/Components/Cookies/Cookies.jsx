import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Cookies.scss';

class Cookies extends React.Component {

	constructor(props) {
		super(props);

		this.dismissCookieWarning = this.dismissCookieWarning.bind(this);
		this.createCookie = this.createCookie.bind(this);
		this.readCookie = this.readCookie.bind(this);
		this.eraseCookie = this.eraseCookie.bind(this);
	}

	dismissCookieWarning( event ) {
		event.preventDefault();
		this.createCookie('eucookie', '1', 30);
		let cookieElem = document.querySelector('.cookies');
		cookieElem.classList.add('leaving');
		setTimeout(() => {
			cookieElem.remove();
		}, 500);
	}

	createCookie(name, value, days) {
		let expires = '';
		
        if ( days ) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toGMTString();
        } else {
            expires = '';
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    readCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                // return c.substring(nameEQ.length, c.length);
                return true;
            }
        }
        return false;
    }

    eraseCookie() {
        this.createCookie(this.name, '', -1);
	}
	
	componentDidMount() {
		if ( !this.readCookie('eucookie') === true ) {
			document.querySelector('.cookies').classList.add('show');
		}
	}
	
	render() {
		return (
			<div className="cookies">
				<div className="cookies__title">Definições de Cookies</div>
				<div className="cookies__description">
					<p className="cookies__message">A <b>NOME DA EMPRESA</b> pode utilizar cookies para memorizar os seus dados de início de sessão, recolher estatísticas para otimizar a funcionalidade do site e para realizar ações de marketing com base nos seus interesses.</p>
					<div className="row">
						<div className="col-sm-6 col-sm-push-6 cookies__link">
							<Link to="" rel="nofollow" className="cookies-bar-know-more" title="Cookies Policy" target="_blank">Cookies Policy</Link>
						</div>
						<div className="col-sm-6 col-sm-pull-6">
							<Button onClick={ (e) => this.dismissCookieWarning(e) } tag="button" className="btn btn-primary btn-sm text-uppercase" id="accept-cookie" style={{ whiteSpace:'nowrap' }}>Sim, aceito</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Cookies;