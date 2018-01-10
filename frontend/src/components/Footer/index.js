import React from 'react'
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Footer = (props, context) => (
	<footer className={styles.footer}>
		<div className={styles.column}>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li className={styles["list-item"]}>{context.t("About us")}</li>
					<li className={styles["list-item"]}>{context.t("Support")}</li>
					<li className={styles["list-item"]}>{context.t("Blog")}</li>
					<li className={styles["list-item"]}>{context.t("Press")}</li>
					<li className={styles["list-item"]}>{context.t("API")}</li>
					<li className={styles["list-item"]}>{context.t("Jobs")}</li>
					<li className={styles["list-item"]}>{context.t("Terms")}</li>
					<li className={styles["list-item"]}>{context.t("Directory")}</li>
					<li className={styles["list-item"]}>{context.t("Language")}</li>
				</ul>
			</nav>
		</div>
		<div className={styles.column}>
			<span className={styles.copyright}> 2017 hyecheon</span>
		</div>
	</footer>
);
Footer.contextTypes = {
	t: PropTypes.func.isRequired
};

export default Footer;
