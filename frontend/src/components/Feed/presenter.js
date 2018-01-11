import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Feed = props => {
	return (
		<div>
			{"Feed!"}
		</div>
	);
};

Feed.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Feed;

