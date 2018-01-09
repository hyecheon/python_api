import React from 'react'
import Ionicon from 'react-ionicons'
import styles from 'shared/formStyles.scss'
import PropTypes from "prop-types";
import FacebookLogin from 'react-facebook-login';

const SignUpForm = (props, context) => (
	<div className={styles["form-component"]}>
		<h3 className={styles["signup-header"]}>Sign up to see photos and videos from your friends</h3>
		<FacebookLogin
            appId="354445818357823"
            autoLoad={true}
            fields="name,email,picture"
            callback={props.handleFacebookLogin}
            cssClass={styles.facebookLink}
            icon={"fa-facebook-official"}
        />
		<span className={styles.divider}>or</span>
		<form className={styles.form} onSubmit={props.handleSubmit}>
			<input type={"email"}
			       placeholder={"Email"}
			       className={styles["text-input"]}
			       value={props.emailValue}
			       name={"email"}
			       onChange={props.handleInputChange}
			/>
			<input type={"text"}
			       placeholder={"Full Name"}
			       className={styles["text-input"]}
			       value={props.fullNameValue}
			       name={"fullName"}
			       onChange={props.handleInputChange}
			/>
			<input type={"text"}
			       placeholder={"Username"}
			       className={styles["text-input"]}
			       value={props.usernameValue}
			       name={"username"}
			       onChange={props.handleInputChange}
			/>
			<input type={"password"}
			       placeholder={"Password"}
			       className={styles["text-input"]}
			       value={props.passwordValue}
			       name={"password"}
			       onChange={props.handleInputChange}
			/>
			<input type={"submit"}
			       value={context.t("Sign up")}
			       className={styles.button}/>
		</form>
		<p className={styles.terms}>
			By signIn up, you agree to our <span>Terms & Privacy Policy</span>
		</p>
	</div>
);
SignUpForm.propTypes = {
	emailValue: PropTypes.string.isRequired,
	fullNameValue: PropTypes.string.isRequired,
	usernameValue: PropTypes.string.isRequired,
	passwordValue: PropTypes.string.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired,
};
SignUpForm.contextTypes = {
	t: PropTypes.func.isRequired
};

export default SignUpForm;
