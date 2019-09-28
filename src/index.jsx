import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Context from './context.js';
import createStore from './store.js';

import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Routes from './Routes.jsx';

// import generic CSS
import './styles/app.scss';

// import generic JS
import './scripts/main.js';

const store = createStore();


// console.log(process.env.NODE_ENV);


ReactDOM.render(
	<div>
		{ console.log( window.location.pathname.split('/')[1] ) }
		<BrowserRouter>
			<Context.Provider value={store}>
				<Header />
				<Routes />
				<Footer />
			</Context.Provider>
		</BrowserRouter>
	</div>,
	document.getElementById('root')
);

module.hot.accept();