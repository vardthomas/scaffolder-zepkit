import React from 'react'
import { Input, Field } from 'rimble-ui';
import styles from './Input.module.scss'

export default class AddressInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.handleInputChange(this.props.index, event.target.value)
    }

    render() {
        return (
            <div className={styles.inputContainer}>
                <Field label={this.props.label}>
                    <Input height={'2rem'} type="text" required={true} placeholder="e.g. 0xAb2d0422..."  onChange={this.handleInputChange}/>
                </Field>
                <span className={styles.paramType}>address</span>
            </div>
        );
    }
}