import React from 'react'
import Ionicon from 'react-ionicons'
import styles from 'shared/formStyles.scss'
import PropTypes from "prop-types";

const LoginForm = (props, context) => (
	<div className={styles["form-component"]}>
		<form className={styles.form}>
			<input type={"text"} placeholder={"UserName"} className={styles["text-input"]}/>
			<input type={"password"} placeholder={"Password"} className={styles["text-input"]}/>
			<input type={"submit"} value={context.t("Log in")} className={styles.button}/>
		</form>
		<span className={styles.divider}>or</span>
		<span className={styles.facebookLink}>
            <Ionicon icon={"logo-facebook"} fontSize={"20px"} color={"#385185"}/>
			{context.t("Log in with Facebook")}
        </span>
		<span className={styles["forgot-link"]}>{context.t("Forgot password?")}</span>
	</div>
);
LoginForm.contextTypes = {
	t: PropTypes.func.isRequired
};

export default LoginForm;