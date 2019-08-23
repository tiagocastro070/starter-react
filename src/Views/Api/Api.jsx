import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ApiForm from '../../Views/Api/ApiForm.jsx';
import ApiList from '../../Views/Api/ApiList.jsx';
import ApiGetItem from '../../Views/Api/ApiGetItem.jsx'

const Api = () => {
	return (
		<div className="container">
			<h1>API demos</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro officiis hic nihil adipisci tenetur facere perferendis enim totam cupiditate eaque, saepe temporibus mollitia aperiam, nisi quidem. Vero, earum molestiae.</p>
			<ul className="nav nav-pills">
				<li className="nav-item"><Link className="nav-link" to="/api/list">List items</Link></li>
				<li className="nav-item"><Link className="nav-link" to="/api/list/3">Get item view</Link></li>
				<li className="nav-item"><Link className="nav-link" to="/api/form-submit-post">Submit Form</Link></li>
			</ul>

			<Switch>
				<Route path='/api/list' exact component={ApiList} />
				<Route path='/api/list/:postId' exact component={ApiGetItem} />
				<Route path='/api/form-submit-post' exact component={ApiForm} />
			</Switch>
			
		</div>
	)
}

export default Api;