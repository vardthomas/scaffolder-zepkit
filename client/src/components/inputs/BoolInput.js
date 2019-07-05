import React from 'react';
import { Field, Select } from 'rimble-ui';
import styles from './Input.module.scss'

export default class BoolInput extends React.Component {
    render() {
        return (

            <div className={styles.inputContainer}>
                <Field label={this.props.label}>
                    <Select height={'2rem'} required={true}
                        items={[
                            "True",
                            "False"
                        ]}
                    /></Field>
                <span className={styles.paramType}>bool</span>
            </div>
        );
    }
}