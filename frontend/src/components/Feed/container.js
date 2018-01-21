import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Feed from "./presenter";

class Container extends Component {
	state = {
		loading: true
	};
	static propTypes = {
		// feed: PropTypes.object,
		getFeed: PropTypes.func.isRequired,
	};
	
	componentDidMount() {
		const {getFeed} = this.props;
		getFeed();
	}
	
	componentWillReceiveProps = nextProps => {
		if (nextProps.feed) {
			this.setState({
				loading: false,
				feed: nextProps.feed
			});
		}
	};
	
	render() {
		const {feed} = this.props;
		return <Feed {...this.state} feed={feed}/>;
	}
}


export default Container;
