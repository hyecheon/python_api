import React, {Component} from "react";
import {connect} from 'react-redux';
import LoginForm from "./presenter";

class Container extends Component {
	state = {
		username: "",
		password: "",
	};

	render() {
		const {username, password} = this.state;
		return (
			<LoginForm
				handleInputChange={this._handleInputChange}
				handleSubmit={this._handleSubmit}
				usernameValue={username} passwordValue={password}/>
		);
	}

	_handleInputChange = event => {
		const {target: {value, name}} = event;
		console.log(event.target.value);
		console.log(event.target.name);
		this.setState({
			[name]: value
		});
	};
	_handleSubmit = event => {
		event.preventDefault();
		console.log(this.state)
	};
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps,)(Container);
