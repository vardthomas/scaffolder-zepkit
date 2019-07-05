import React from 'react';
import { Input, Field } from 'rimble-ui';
import styles from './Input.module.scss'

export default class IntInput extends React.Component {
    render() {
        return (
            <div className={styles.inputContainer}>
            <Field label={this.props.label}>
                <Input height={'2rem'} type="text" required={true} placeholder="e.g. 10" />
            </Field>
            <span className={styles.paramType}>{this.props.type}</span>
        </div>
        );
    }
}