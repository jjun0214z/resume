import React from 'react';
import ReferenceColumn from 'components/ReferenceColumn';
import styles from "./style.module.scss";

const Reference = (props) => {
    return (
        <div className={styles.Reference}>
            <ReferenceColumn />
        </div>
    );
};

export default Reference;