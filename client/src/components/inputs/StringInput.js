import React from 'react';
import { Input, Field } from 'rimble-ui';
import styles from './Input.module.scss'

export default class StringInput extends React.Component {
    render() {
        return (
            <div className={styles.inputContainer}>
            <Field label={this.props.label}>
                <Input height={'2rem'} type="text" required={true} placeholder="e.g. foo" />
            </Field>
            <span className={styles.paramType}>string</span>
        </div>
        );
    }
}