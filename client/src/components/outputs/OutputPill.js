import React from 'react';
import { Pill } from 'rimble-ui';


export default class OutputPill extends React.Component {
    render() {
        return (
            <Pill>{this.props.label}</Pill>
        );
    }
}