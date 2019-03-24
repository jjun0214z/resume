import React from 'react';
import styles from "./style.module.scss";

const ReferenceColumn = (props) => {
    return (
        <div className={styles.column}>
            <div className={styles.title}><span>SKILL</span></div>
            <ul className={styles.list}>
                <li>
                    <strong className={styles.tit}>Programming Language / methodology</strong>
                    <div className={styles.cont}>
                        <p className={styles.txt}>Javascript(ES%, ES6), HTML, CSS(CSS3, SCSS, LESS)</p>
                    </div>
                </li>
                <li>
                    <strong className={styles.tit}>Programming Language / methodology</strong>
                    <div className={styles.cont}>
                        <p className={styles.txt}>Javascript(ES%, ES6), HTML, CSS(CSS3, SCSS, LESS)</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ReferenceColumn;