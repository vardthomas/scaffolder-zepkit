import React from 'react';
import { Input } from 'rimble-ui';
import { Field } from 'rimble-ui';

export default class ByteInput extends React.Component {
    render() {
        return (
            <Field label={this.props.label}>
                <Input height={'2rem'} type="text" required={true} placeholder="e.g. 0xAb2d0422..." />
            </Field>
        );
    }
}