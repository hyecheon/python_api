import React from 'react'
import Ionicon from 'react-ionicons'
import styles from 'shared/formStyles.scss'
import PropTypes from "prop-types";

const SignUpForm = (props, context) => (
	<div className={styles["form-component"]}>
		<h3 className={styles["signup-header"]}>Sign up to see photos and videos from your friends</h3>
		<button className={styles.button}>{" "}
			<Ionicon icon={"logo-facebook"} fontSize={"20px"} color={"white"}/>
			{context.t("Log in with Facebook")}
		</button>
		<span className={styles.divider}>or</span>
		<form className={styles.form}>
			<input type={"email"} placeholder={"Email"} className={styles["text-input"]}/>
			<input type={"text"} placeholder={"Full Name"} className={styles["text-input"]}/>
			<input type={"text"} placeholder={"Username"} className={styles["text-input"]}/>
			<input type={"password"} placeholder={"Password"} className={styles["text-input"]}/>
			<input type={"submit"} value={context.t("Sign up")} className={styles.button}/>
		</form>
		<p className={styles.terms}>
			By signIn up, you agree to our <span>Terms & Privacy Policy</span>
		</p>
	</div>
);
SignUpForm.contextTypes = {
	t: PropTypes.func.isRequired
};

export default SignUpForm;