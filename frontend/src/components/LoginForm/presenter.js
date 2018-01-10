import React from 'react'
import styles from 'shared/formStyles.scss'
import PropTypes from "prop-types";
import FacebookLogin from 'react-facebook-login';

const LoginForm = (props, context) => (
	<div className={styles["form-component"]}>
		<form className={styles.form} onSubmit={props.handleSubmit}>
			<input type={"text"}
			       placeholder={"UserName"}
			       className={styles["text-input"]}
			       value={props.usernameValue}
			       onChange={props.handleInputChange}
			       name={"username"}/>
			<input type={"password"}
			       placeholder={"Password"}
			       className={styles["text-input"]}
			       value={props.passwordValue}
			       onChange={props.handleInputChange}
			       name={"password"}/>
			<input type={"submit"}
			       value={context.t("Log in")}
			       className={styles.button}/>
		</form>
		<span className={styles.divider}>or</span>
		<FacebookLogin
			appId="354445818357823"
			autoLoad={false}
			fields="name,email,picture"
			callback={props.handleFacebookLogin}
			cssClass={styles.facebookLink}
			icon={"fa-facebook-official"}
			textButton={context.t("Log in with Facebook")}
		/>
		<span className={styles["forgot-link"]}>{context.t("Forgot password?")}</span>
	</div>
);
LoginForm.propTypes = {
	usernameValue: PropTypes.string.isRequired,
	passwordValue: PropTypes.string.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleFacebookLogin: PropTypes.func.isRequired,
};
LoginForm.contextTypes = {
	t: PropTypes.func.isRequired
};

export default LoginForm;
