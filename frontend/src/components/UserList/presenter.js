import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from "../Loading";
import UserRow from '../UserRow';
import Ionicon from "react-ionicons";

const UserList = props => {
	console.log(props.userList);
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<header className={styles.header}>
					<h4>{props.title}</h4>
					<span onClick={props.closeLikes}>
						<Ionicon icon={"md-close"} fontSize={"20px"} color={"black"}/>
					</span>
				</header>
				<div className={styles.content}>{props.loading ?
					<Loading/> : <RenderUsers list={props.userList}/>}</div>
			</div>
		</div>
	);
};
const RenderUsers = props =>
	props.list.map(user => <UserRow user={user} key={user.id}/>);

UserList.propTypes = {
	title: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired,
	users: PropTypes.array,
	closeLikes: PropTypes.func.isRequired,
	userList: PropTypes.array
};
export default UserList;
