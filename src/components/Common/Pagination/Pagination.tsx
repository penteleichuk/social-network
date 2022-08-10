import styles from "./Pagination.module.css";
import React, { useEffect, useState } from "react";

type PaginationPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    partionSize?: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanged, partionSize = 10 }: PaginationPropsType) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= totalItemsCount; i++) {
        pages.push(i);
    }

    const partionCount = Math.ceil(pagesCount / partionSize);
    const [partionNumber, setPartionNumber] = useState(1);
    const leftPartionPageNumber = (partionNumber - 1) * partionSize + 1;
    const rightPartionPageNumber = partionNumber * partionSize;

    const setPartionNumberPrevHandler = () => {
        setPartionNumber(partionNumber - 1);
    }

    const setPartionNumberNextHandler = () => {
        setPartionNumber(partionNumber + 1);
    }

    useEffect(() => {
        setPartionNumber(Math.ceil(currentPage / partionSize))
    }, [partionSize, currentPage]);

    return (
        <div className={styles.pagination}>
            {partionNumber > 1 && <span onClick={setPartionNumberPrevHandler} >Prev</span>}
            {pages.filter(p => p >= leftPartionPageNumber && p <= rightPartionPageNumber)
                .map((p, key) => {
                    return <span key={key} className={(currentPage === p ? styles.paginationActive : '')}
                        onClick={() => { onPageChanged(p) }}>{p}</span>
                })}
            {partionCount >= partionNumber && <span onClick={setPartionNumberNextHandler} >Next</span>}
        </div>
    );
}