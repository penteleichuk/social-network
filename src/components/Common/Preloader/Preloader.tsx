import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./Prelouder.module.css";

export const Preloader = () => {
    return (
        <div className={styles.prelouder}>
            <div className={styles.prelouderSpin}>
                <FontAwesomeIcon icon={faSpinner as IconProp} spin={true} />
            </div>
        </div>
    )
}