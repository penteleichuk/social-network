import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../assets/images/user.png"
import styles from './users.module.css';

export const Users = (props: UsersPropsType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small || userPhoto} alt="" className={styles.userPhoto}/>
                        </div>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                        }
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>{/*
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>*/}
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}