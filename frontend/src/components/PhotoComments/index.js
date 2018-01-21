import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss'

const PhotoComments = (props, context) => {
	return (
		<div className={styles.comments}>
			<ul className={styles.list}
			>
				<Comment username={props.creator} comment={props.caption}/>
				{props.comments.map(comment => {
					return (
						<Comment username={comment.creator.username}
						         comment={comment.message}
						         key={comment.id}
						/>
					);
				})}
			</ul>
		</div>
	);
};
const Comment = (props) => {
	return (
		<li className={styles.comment}>
			<span className={styles.username}>{props.username}</span>{" "}
			<span className={styles.message}>{props.comment}</span>
		</li>
	);
};

PhotoComments.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			message: PropTypes.string.isRequired,
			creator: PropTypes.shape({
				profile_image: PropTypes.string,
				username: PropTypes.string.isRequired
			}).isRequired
		})
	).isRequired,
	caption: PropTypes.string.isRequired,
	creator: PropTypes.string.isRequired
};

export default PhotoComments;
