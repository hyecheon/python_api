import React from "react";
import styles from "./styles.scss";
import {LoginForm, SignupForm} from "../AuthForms";
import PropTypes from "prop-types";

const Auth = (props, context) => (
    <main className={styles.auth}>
        <div className={styles.column}>
            <img src={require("images/phone.png")} alt="Checkout our app. Is cool"/>
        </div>
        <div className={styles.column}>
            <div className={`${styles["white-box"]} ${styles["form-box"]}`}>
                {props.action === 'login' && <LoginForm/>}
                {props.action === 'signup' && <SignupForm/>}
            </div>
            <div className={styles["white-box"]}>
                {props.action === 'login' && (
                    <p className={styles.text}>Don't have an account?{" "}
                        <span className={styles["change-link"]} onClick={props.changeAction}>
                            {context.t("Sign up")}
                        </span>
                    </p>
                )}
                {props.action === "signup" && (
                    <p className={styles.text}>
                        Have an account?{" "}
                        <span className={styles["change-link"]} onClick={props.changeAction}>
                            {context.t("Log in")}
                        </span>
                    </p>
                )}
            </div>
            <div className={styles["app-box"]}>
                <span>Get the app</span>
                <div className={styles.appstores}>
                    <img src={require("images/ios.png")} alt="Download it on the Apple Appstore"/>
                    <img src={require("images/android.png")} alt="Download it on the Apple Appstore"/>
                </div>
            </div>
        </div>
    </main>
);

Auth.contextTypes = {
    t: PropTypes.func.isRequired
};

export default Auth;
