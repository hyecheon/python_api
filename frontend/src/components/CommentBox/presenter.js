import React from 'react';
import PropTypes from 'prop-types';
import TextArea from 'react-textarea-autosize';
import styles from './styles.scss';

const CommentBox = (props, context) => {
	return (
		<form className={styles["comment-box"]}>
			<TextArea className={styles.input} placeholder={context.t("Add a comment...")}/>
		</form>
	);
};

CommentBox.contextTypes = {
	t: PropTypes.func.isRequired
};

export default CommentBox;
