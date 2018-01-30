import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import "./styles.scss";
import Footer from '../Footer'
import Auth from "../Auth";
import Navigation from "../Navigation";
import Feed from '../Feed';
import Explore from '../Explore';


const App = props => [
	props.isLoggedIn ? <Navigation key={1}/> : null,
	props.isLoggedIn ? <PrivateRoutes key={2}/> : <PublicRoutes key={2}/>,
	<Footer key={3}/>
];

App.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
	<Switch>
		<Route exact path={"/"} component={Feed}/>
		<Route exact path={"/explore"} component={Explore}/>
	</Switch>
);

const PublicRoutes = props => (
	<Switch>
		<Route exact path={"/"} component={Auth}/>
		<Route exact path={"/forgot"} render={() => 'password'}/>
	</Switch>
);


export default App;
