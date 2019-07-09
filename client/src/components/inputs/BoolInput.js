import React from 'react';
import { Field, Select } from 'rimble-ui';
import styles from './Input.module.scss'

export default class BoolInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.handleInputChange(this.props.index, JSON.parse(event.target.value))
    }

    render() {
        return (
            <div className={styles.inputContainer}>
                <Field label={this.props.label}>
                    <Select height={'2rem'} required={true} onChange={this.handleInputChange} items={[
                        "true",
                        "false"]} />
                </Field>
                <span className={styles.paramType}>bool</span>
            </div>
        );
    }
}