import React from 'react';

import styles from './FunctionDetail.module.scss';

export default class FunctionDetail extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>{this.props.item.definition.name}</h2>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        Signature:
                    </div>
                    <div className={styles.sectionContent}>
                        {this.props.item.signature}
                    </div>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        Dev Docs:
                    </div>
                    <div className={styles.sectionContent}>
                        {this.props.item.methodInfo.details}
                    </div>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        Invoke:
                    </div>
                    <div className={styles.sectionContent}>
                        TODO:
                    </div>
                </div>
            </div>
        );
    }
}