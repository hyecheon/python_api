import React from 'react';
import PropTypes from 'prop-types';
import TextArea from 'react-textarea-autosize';

const CommentBox = (props, context) => {
	return (
		<form>
			<TextArea placeholder={context.t("Add a comment...")}></TextArea>
		</form>
	);
};

CommentBox.contextTypes = {
	t: PropTypes.func.isRequired
};

export default CommentBox;
