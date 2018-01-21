import React from 'react';
import PropTypes from 'prop-types';

const PhotoComments = (props, context) => {
	return (
		<div>
			<ul>
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
		<li>
			<span>{props.username}</span> <span>{props.comment}</span>
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
