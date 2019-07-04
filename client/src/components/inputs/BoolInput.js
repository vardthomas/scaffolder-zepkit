import React from 'react';
import { Input } from 'rimble-ui';
import { Field } from 'rimble-ui';

export default class BoolInput extends React.Component {
    render() {
        return (
            <Field label={this.props.label}>
                <Select
                    items={[
                        "True",
                        "False"
                    ]}
                />
            </Field>
        );
    }
}