import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss'


const FeedPhoto = (props, context) => <div className={styles.feedPhoto}>'hello'</div>;

FeedPhoto.propTypes = {
	creator: PropTypes.shape({
		profile_image: PropTypes.string,
		username: PropTypes.string.isRequired
	}).isRequired,
	location: PropTypes.string.isRequired,
	file: PropTypes.string,
	like_count: PropTypes.number.isRequired,
	caption: PropTypes.string.isRequired,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			message: PropTypes.string.isRequired,
			creator: PropTypes.shape({
				profile_image: PropTypes.string,
				username: PropTypes.string.isRequired
			}).isRequired
		})
	).isRequired,
	created_at: PropTypes.string.isRequired
};

export default FeedPhoto;
