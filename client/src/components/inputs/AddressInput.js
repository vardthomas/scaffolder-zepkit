import React from 'react';
import { Input } from 'rimble-ui';
import { Field } from 'rimble-ui';
import styles from './Input.module.scss'

export default class AddressInput extends React.Component {
    render() {
        return (
            <div className={styles.inputContainer}>
                <Field label={this.props.label}>
                    <Input height={'2rem'} type="text" required={true} placeholder="e.g. 0xAb2d0422..." />
                </Field>
                <span className={styles.paramType}>address</span>
            </div>
        );
    }
}