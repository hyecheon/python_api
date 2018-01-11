import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Feed from "./presenter";

class Container extends Component {
	state = {
		loading: true
	};

	render() {
		return (
			<Feed {...this.state}/>
		);
	}
}

Container.propTypes = {};

export default Container;
