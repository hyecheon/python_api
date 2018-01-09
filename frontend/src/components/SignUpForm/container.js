import React, {Component} from "react";
import SignUpForm from "./presenter";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

class Container extends Component {
    state = {
        email: "",
        fullName: "",
        username: "",
        password: "",
    };
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired
    };

    render() {
        const {email, fullName, username, password} = this.state;
        return (
            <SignUpForm handleInputChange={this._handleInputChange}
                        handleSubmit={this._handleSubmit}
                        handleFacebookLogin={this._handleFacebookLogin}
                        emailValue={email}
                        fullNameValue={fullName}
                        usernameValue={username}
                        passwordValue={password}
            />
        );
    }

    _handleInputChange = event => {
        const {target: {value, name}} = event;
        this.setState({
            [name]: value
        });
    };
    _handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    };
    _handleFacebookLogin = response => {
        console.log(response);
        const {facebookLogin} = this.props;
        facebookLogin(response.accessToken);
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Container);
