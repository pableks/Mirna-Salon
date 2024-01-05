import { useState } from "react";
import styles from './ad.module.css';

export default function Ad() {
    const [popup, setPopup] = useState(true);

    const handleClose = () => {
        setPopup(false);
    };

    return (
        <>
            {popup ? (
                <div className={styles.container} onClick={handleClose}>
                    <div className={`${styles.popup__area} ${!popup && styles.hidden}`}>
                        <div onClick={handleClose}>Close</div>
                        {/* Other content */}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
