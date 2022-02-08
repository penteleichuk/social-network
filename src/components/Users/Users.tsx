import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "./UsersContainer";

type UsersPPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (id: number) => void
    unFollow: (id: number) => void
}

export const Users = (props: UsersPPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.users}>
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
                                    u.followed
                                    ? <button onClick={() => {props.unFollow(u.id)}}>UnFollow</button>
                                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.pagination}>
                {pages.map((p, key) => {
                    return <span key={key} className={props.currentPage === p ? styles.paginationActive : ''}
                                 onClick={() => {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
        </div>
    )
}