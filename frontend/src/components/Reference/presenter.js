import React from 'react';
import PropTypes from 'prop-types'
import styles from "./style.module.scss";

const Reference = props => {
    return (
        <div className={styles.Reference}>
            {props.reference.map( ( referenceType ) => 
                <ReferenceExplore 
                    title={referenceType.key}
                    value={referenceType.value}
                    key={referenceType.key}
                />
            )}
        </div>
    );
};

const ReferenceExplore = props => {
    return (
        <div className={styles.column}>
            <div className={styles.title}><span>{props.title}</span></div>
            <ul className={styles.list}>
                {props.value.map( (value, idx) => 
                    <ReferenceRow value={value} key={idx} />
                )}
            </ul>
        </div>
    );
};


const ReferenceRow = props => {
    return (
        <li>
            <strong className={styles.tit}>{props.value.title}</strong>
            <div className={styles.cont}>
                <p className={styles.txt}>{props.value.text}</p>
            </div>
        </li>
    );
};

export default Reference;