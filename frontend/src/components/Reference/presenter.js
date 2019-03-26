import React from 'react';
import PropTypes from 'prop-types'
import styles from "./style.module.scss";

const Reference = props => {
    return (
        <div className={styles.Reference}>
            {props.reference.map( ( referenceType ) => 
                <ReferenceExplore 
                    {...referenceType}
                    title={referenceType.key}
                    key={referenceType.key}
                />
            )}
        </div>
    );
};

const ReferenceExplore = props => {
    const { value, title } = props;
    return (
        <div className={styles.referenceArea}>
            <div className={styles.title}><span>{title}</span></div>
            <ul className={styles.list}>
                {value.map( (value, idx) => 
                    <ReferenceRow value={value} key={idx} />
                )}
            </ul>
        </div>
    );
};

const ReferenceRow = props => {
    const { value } = props;

    return (
        <li>
            <div className={styles.column}>
                <strong className={styles.tit}>{value.title}</strong>
                <div>
                    {value.subTitle !== undefined && <div className={styles.subTitle}>{value.subTitle}</div>}
                    {value.explanation !== undefined && <div className={styles.explanation}>{value.explanation}</div>}
                    <ul className={styles.textList}>
                        {value.text.map( (text, idx) => 
                            <ExplanList text={text} key={idx} />
                        )}
                    </ul>
                </div>
            </div>
        </li>
    );
};

const ExplanList = props => {
    return (
        <li className={styles.txt}>{props.text}</li>
    );
};

export default Reference;