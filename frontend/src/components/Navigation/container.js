import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navigation from "./presenter"

class Container extends Component {
	render() {
		return (
			<Navigation/>
		);
	}
}

Container.propTypes = {};

export default Container;