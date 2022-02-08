import styles from "./Pagination.module.css";
import React from "react";

type PaginationPropsType = {
    pages: Array<number>
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination = (props: PaginationPropsType) => {
    return (
        <div className={styles.pagination}>
            {props.pages.map((p, key) => {
                return <span key={key} className={(props.currentPage === p ? styles.paginationActive : '')}
                             onClick={() => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
    );
}