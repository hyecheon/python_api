import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Feed from "./presenter";

class Container extends Component {
	state = {
		loading: true
	};
	
	componentDidMount() {
		const {getFeed} = this.props;
		getFeed();
	}
	
	render() {
		return (
			<Feed {...this.state}/>
		);
	}
}

Container.propTypes = {};

export default Container;
