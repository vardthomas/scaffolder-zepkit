import React from 'react';
import AddressInput from './inputs/AddressInput';
import IntInput from './inputs/IntInput';
import OutputPill from './outputs/OutputPill';
import { Button } from "rimble-ui";

import styles from './FunctionDetail.module.scss';

export default class FunctionDetail extends React.Component {

    checkInt(type){
        return type.startsWith('int') || type.startsWith('uint')
    }

    getInputComponent(input){
        console.log(styles)

        if(this.checkInt(input.type)){
            return <IntInput label={input.name}/>
        }

        if(input.type == 'address'){
            return <AddressInput label={input.name}/>
        }

        if(input.type.startsWith('byte')){
            return <AddressInput label={input.name}/>
        }
    }

    getOutputComponent(output){
        return <OutputPill label={output.type} />
    }

    render() {
        return (
            <div>
                <div className={styles.nobr}>
                    <h2>{this.props.item.definition.name}</h2>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        Signature:
                    </div>
                    <div className={styles.sectionContent}>
                        {this.props.item.signature}
                    </div>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        Returns:
                    </div>
                    <div className={styles.sectionContent}>
                    {this.props.item.definition.outputs.map((item) =>
                        this.getOutputComponent(item)
                    )}
                    </div>
                </div>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        Dev Docs:
                    </div>
                    <div className={styles.sectionContent}>
                        {this.props.item.methodInfo.details}
                    </div>
                </div>
                <div className={`${styles.sectionContainer} ${styles.invokeContainer}`}>
                    <div className={styles.sectionLabel}>
                        Invoke:
                    </div>
                    <div className={styles.sectionContent}>
                    {this.props.item.definition.inputs.map((item) =>
                        this.getInputComponent(item)
                    )}
                    <div className={this.props.item.definition.inputs.length > 0 ? styles.submitContainer : ""}>
                        <Button height={'2rem'} px={'2'}>Sign & Send</Button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}