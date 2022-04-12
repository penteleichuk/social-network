import styles from "./Prelouder.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export const Preloader = () => {
    return (
        <div className={styles.prelouder}>
            <div className={styles.prelouderSpin}>
                <FontAwesomeIcon icon={faSpinner as IconProp} spin={true}/>
            </div>
        </div>
    )
}