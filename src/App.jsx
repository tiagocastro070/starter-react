import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Views/Home/Home.jsx';
import About from './Views/About/About.jsx';
import Contacts from './Views/Contacts/Contacts.jsx';
import PrivacyPolicy from './Views/PrivacyPolicy/PrivacyPolicy.jsx';
import Stylesheet from './Views/Stylesheet/Stylesheet.jsx';
import Api from './Views/Api/Api.jsx';
import NotFound from './Views/NotFound/NotFound.jsx';

class App extends React.Component {
	render() {
		return (
			 <Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={About} />
				<Route path='/contacts' exact component={Contacts} />
				<Route path='/stylesheet' exact component={Stylesheet} />
				<Route path='/privacy-policy' exact component={PrivacyPolicy} />
				<Route path='/api' component={Api} />
				<Route path='/404' component={NotFound} />
				<Route component={NotFound} />
			</Switch>
		)
	}
}

export default App;