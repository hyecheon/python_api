import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss'
import PhotoActions from 'components/PhotoActions';
import PhotoComments from '../PhotoComments';
import TimeStamp from "../TimeStamp";
import CommentBox from "../CommentBox";
import UserList from "../UserList";


const FeedPhoto = (props, context) => {
	return (
		<div className={styles["feed-photo"]}>
			<header className={styles.header}>
				<img src={props.creator.profile_image || require("images/noPhoto.jpg")}
				     alt={props.creator.username}
				     className={styles.image}
				/>
				<div>
					<span>{props.creator.username}</span>
					<span>{props.location}</span>
				</div>
			</header>
			<img src={props.file} alt={props.caption}/>
			<div className={styles.meta}>
				<PhotoActions number={props.like_count}
				              isLiked={props.is_liked}
				              photoId={props.id}
				              openLikes={props.openLikes}
				/>
				<PhotoComments caption={props.caption}
				               creator={props.creator.username}
				               comments={props.comments}/>
				<TimeStamp time={props.natural_time}/>
				<CommentBox photoId={props.id}/>
			</div>
			{props.seeingLikes && (<UserList title={context.t("Likes")} closeLikes={props.closeLikes}/>)}
		</div>
	);
};
FeedPhoto.contextTypes = {
	t: PropTypes.func.isRequired
};
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
	natural_time: PropTypes.string.isRequired,
	is_liked: PropTypes.bool.isRequired,
	seeingLikes: PropTypes.bool.isRequired,
	openLikes: PropTypes.func.isRequired,
	closeLikes: PropTypes.func.isRequired
};

export default FeedPhoto;
