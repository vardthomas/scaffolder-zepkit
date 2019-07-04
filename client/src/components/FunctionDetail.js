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
                        Signature
                    </div>
                    <div className={styles.sectionContent}>
                        {this.props.item.signature}
                    </div>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        Dev Docs
                    </div>
                    <div className={styles.sectionContent}>
                        {this.props.item.methodInfo.details}
                    </div>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        Invoke
                    </div>
                    <div className={styles.sectionContent}>
                        Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.
                    </div>
                </div>
            </div>
        );
    }
}