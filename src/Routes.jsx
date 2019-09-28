import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Store from './context.js';
import Home from './Views/Home/Home.jsx';
import About from './Views/About/About.jsx';
import Contacts from './Views/Contacts/Contacts.jsx';
import PrivacyPolicy from './Views/PrivacyPolicy/PrivacyPolicy.jsx';
import Stylesheet from './Views/Stylesheet/Stylesheet.jsx';
import Api from './Views/Api/Api.jsx';
import NotFound from './Views/NotFound/NotFound.jsx';

class App extends React.Component {
	render() {
		this.context.myApp.setLang();
		
		return (
			 <Switch>
				<Route path='/:lang/' exact component={Home} />
				<Route path='/:lang/about' exact component={About} />
				<Route path='/:lang/contacts' exact component={Contacts} />
				<Route path='/:lang/stylesheet' exact component={Stylesheet} />
				<Route path='/:lang/privacy-policy' exact component={PrivacyPolicy} />
				<Route path='/:lang/api' component={Api} />
				<Route path='/:lang/404' component={NotFound} />
				<Route component={NotFound} />
			</Switch>
		)
	}
}

App.contextType = Store;

export default App;