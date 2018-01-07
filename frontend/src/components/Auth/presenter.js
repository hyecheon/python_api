import React from "react";
import styles from "./styles.scss";
import {LoginForm, SignupForm} from "../AuthForms";

const Auth = (props, context) => (
    <main className={styles.auth}>
        <div className={styles.column}>
            <img style={{"width": "100%"}} src={require("images/phone.png")} alt="Checkout our app. Is cool"/>
        </div>
        <div className={styles.column}>
            <div className={`${styles["white-box"]} ${styles.formBox}`}>
                {props.action === 'login' && <LoginForm/>}
                {props.action === 'signup' && <SignupForm/>}
            </div>
            <div className={styles["white-box"]}>
                {props.action === 'login' && (
                    <p>Don't have an account?{" "}
                        <span className={styles["change-link"]}
                              onClick={props.changeAction}>Sign up</span>
                    </p>
                )}
                {props.action === "signup" && (
                    <p>
                        Have an account?{" "}
                        <span className={styles["change-link"]} onClick={props.changeAction}>Log in</span>
                    </p>
                )}
            </div>
            <div className={styles["app-box"]}>
                <span>{console.log(props)} Get the app</span>
                <div className={styles.appstores}>
                    <img src={require("images/ios.png")} alt="Download it on the Apple Appstore"/>
                    <img src={require("images/android.png")} alt="Download it on the Apple Appstore"/>
                </div>
            </div>
        </div>
    </main>
);

export default Auth;
