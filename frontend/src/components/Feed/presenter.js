import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from '../Loading'

const Feed = props => {
	return props.loading ? <LoadingFeed/> : <div>{""}</div>;
};
const LoadingFeed = props => (
	<div className={styles.feed}>
		<Loading/>
	</div>
);


Feed.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Feed;

