import React from 'react'
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Footer extends React.Component {
    static contextTypes = {
        t: PropTypes.func.isRequired
    };

    render() {
        console.log(this.context);
        return (
            <footer className={styles.footer}>
                <div className={styles.column}>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li className={styles["list-item"]}>{this.context.t("About us")}</li>
                            <li className={styles["list-item"]}>Support</li>
                            <li className={styles["list-item"]}>Blog</li>
                            <li className={styles["list-item"]}>Press</li>
                            <li className={styles["list-item"]}>API</li>
                            <li className={styles["list-item"]}>Jobs</li>
                            <li className={styles["list-item"]}>Terms</li>
                            <li className={styles["list-item"]}>Directory</li>
                            <li className={styles["list-item"]}>Language</li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.column}>
                    <span className={styles.copyright}> 2017 hyecheon</span>
                </div>
            </footer>
        )
    }
}

export default Footer;
