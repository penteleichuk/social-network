import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "./UsersContainer";
import {Pagination} from "../Common/Pagination/Pagination";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCog} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {authAPI} from "../../api/api";

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

    const unFollowHandler = (id: number) => {
        authAPI.unFollow(id).then(data => {
            if(data.resultCode === 0) {
                props.unFollow(id);
            }
        })
    }

    const followHandler = (id: number) => {
        authAPI.follow(id).then(data => {
            if(data.resultCode === 0) {
                props.follow(id);
            }
        });
    }

    return (
        <div className={styles.users}>
            <div className={styles.usersTitle}>
                <FontAwesomeIcon icon={faUserCog}/>
                Users list
            </div>
            <div className={styles.usersList}>
                {
                    props.users.map(u =>
                        <div key={u.id} className={styles.usersItem}>
                            <div className={styles.userPhoto}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small || userPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div className={styles.usersInfo}>
                                <div className={styles.usersName}>{u.name}</div>
                                {/*<div className={styles.usersStatus}>{u.status}</div>*/}
                            </div>
                            <div className={styles.usersButtons}>
                                {
                                    u.followed
                                    ? <button onClick={() => {unFollowHandler(u.id)}}>UnFollow</button>
                                    : <button onClick={() => {followHandler(u.id)}}>Follow</button>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <Pagination pages={pages} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        </div>
    )
}