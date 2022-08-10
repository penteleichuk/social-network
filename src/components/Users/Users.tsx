import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { UserType } from "./UsersContainer";
import { Pagination } from "../Common/Pagination/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type UsersPPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userid: number) => void
    unFollow: (userid: number) => void
    followingInProgress: Array<number>
}

export const Users = (props: UsersPPropsType) => {
    return (
        <div className={styles.users}>
            <div className={styles.usersTitle}>
                <FontAwesomeIcon icon={faUserCog as IconProp} />
                Users list
            </div>
            <div className={styles.usersList}>
                {props.users.map(u =>
                    <div key={u.id} className={styles.usersItem}>
                        <div className={styles.userPhoto}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small || userPhoto} alt="" />
                            </NavLink>
                        </div>
                        <div className={styles.usersInfo}>
                            <div className={styles.usersName}>{u.name}</div>
                            {/*<div className={styles.usersStatus}>{u.status}</div>*/}
                        </div>
                        <div className={styles.usersButtons}>
                            {
                                u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.unFollow(u.id)}>UnFollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </div>
                )}
            </div>
            <Pagination
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged} />
        </div>
    )
}