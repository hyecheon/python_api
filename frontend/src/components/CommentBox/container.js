import React, {Component} from "react";
import CommentBox from "./presenter";
import PropTypes from 'prop-types';

class Container extends Component {
	state = {
		comment: ""
	};
	static propTypes = {
		photoId: PropTypes.number.isRequired,
		submitComment: PropTypes.func.isRequired
	};
	
	render() {
		return (
			<CommentBox
				{...this.state}
				{...this.props}
				handleInputChange={this._handleInputChange}
				handleSubmit={this._handleSubmit}
				handleKeyPress={this._handleKeyPress}
			/>
		);
	}
	
	_handleInputChange = event => {
		const {target: {value}} = event;
		this.setState({
			comment: value
		});
	};
	_handleSubmit = () => {
	
	};
	_handleKeyPress = event => {
		const {submitComment} = this.props;
		const {comment} = this.state;
		const {key} = event;
		if (key === "Enter") {
			event.preventDefault();
			submitComment(comment);
			this.setState({comment: ""});
		}
	};
}

export default Container;
