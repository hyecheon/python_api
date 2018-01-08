import React from 'react'
import Ionicon from 'react-ionicons'
import styles from 'shared/formStyles.scss'
import PropTypes from "prop-types";

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
		<span className={styles.facebookLink}>
            <Ionicon icon={"logo-facebook"} fontSize={"20px"} color={"#385185"}/>
			{context.t("Log in with Facebook")}
        </span>
		<span className={styles["forgot-link"]}>{context.t("Forgot password?")}</span>
	</div>
);
LoginForm.propTypes = {
	usernameValue: PropTypes.string.isRequired,
	passwordValue: PropTypes.string.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};
LoginForm.contextTypes = {
	t: PropTypes.func.isRequired
};

export default LoginForm;