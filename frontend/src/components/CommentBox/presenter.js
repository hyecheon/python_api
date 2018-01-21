import React from 'react';
import PropTypes from 'prop-types';

const CommentBox = (props, context) => {
	return (
		<form>
			<textarea placeholder={context.t("Add a comment...")}></textarea>
		</form>
	);
};

CommentBox.contextTypes = {
	t: PropTypes.func.isRequired
};

export default CommentBox;
