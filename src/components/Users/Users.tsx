import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../assets/images/user.png"
import styles from './Users.module.css';

export const Users = (props: UsersPropsType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            })
        }
    }

    return (
        <div className={styles.users}>
            <div className={styles.usersButton}>
                <button onClick={getUsers}>Get Users</button>
            </div>
            <div className={styles.usersList}>
                {
                    props.users.map(u =>
                        <div key={u.id} className={styles.usersItem}>
                            <div className={styles.userPhoto}>
                                <img src={u.photos.small || userPhoto} alt=""/>
                            </div>
                            <div className={styles.usersInfo}>
                                <div className={styles.usersName}>{u.name}</div>
                                <div className={styles.usersStatus}>{u.status}</div>
                            </div>
                            <div className={styles.usersButtons}>
                                {
                                    u.followed ? <button onClick={() => {props.unFollow(u.id)}}>UnFollow</button>
                                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}