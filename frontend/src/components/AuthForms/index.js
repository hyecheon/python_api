import React from 'react'
import Ionicon from 'react-ionicons'
import styles from './styles.scss'

export const LoginForm = props => (
    <div className={styles["form-component"]}>
        <form className={styles.form}>
            <input type={"text"} placeholder={"UserName"} className={styles["text-input"]}/>
            <input type={"password"} placeholder={"Password"} className={styles["text-input"]}/>
            <input type={"submit"} value={"Log in"} className={styles.button}/>
        </form>
        <span className={styles.divider}>or</span>
        <span className={styles.facebookLink}>
            <Ionicon icon={"logo-facebook"} fontSize={"20px"} color={"#385185"}/>
            Log in with Facebook
        </span>
        <span className={styles["forgot-link"]}>Forgot password?</span>
    </div>
);
export const SignupForm = props => (
    <div className={styles["form-component"]}>
        <h3 className={styles["signup-header"]}>Sign up to see photos and videos from your friends</h3>
        <button className={styles.button}>{" "}
            <Ionicon icon={"logo-facebook"} fontSize={"20px"} color={"white"}/>
            Log in with Facebook
        </button>
        <span className={styles.divider}>or</span>
        <form className={styles.form}>
            <input type={"email"} placeholder={"Email"} className={styles["text-input"]}/>
            <input type={"text"} placeholder={"Full Name"} className={styles["text-input"]}/>
            <input type={"text"} placeholder={"Username"} className={styles["text-input"]}/>
            <input type={"password"} placeholder={"Password"} className={styles["text-input"]}/>
            <input type={"submit"} value={"Sign up"} className={styles.button}/>
        </form>
        <p className={styles.terms}>
            By signIn up, you agree to our <span>Terms & Privacy Policy</span>
        </p>
    </div>
);
