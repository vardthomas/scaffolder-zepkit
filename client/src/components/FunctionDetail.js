import React from 'react';
import AddressInput from './inputs/AddressInput';
import StringInput from './inputs/StringInput';
import BoolInput from './inputs/BoolInput';
import ByteInput from './inputs/ByteInput';
import IntInput from './inputs/IntInput';
import OutputPill from './outputs/OutputPill';
import { Button } from "rimble-ui";

import styles from './FunctionDetail.module.scss';

export default class FunctionDetail extends React.Component {

    checkInt(type){
        return type.startsWith('int') || type.startsWith('uint')
    }

    getInputComponent(input){
        if(this.checkInt(input.type)){
            return <IntInput label={input.name} type={input.type}/>
        }

        if(input.type === 'address'){
            return <AddressInput label={input.name}/>
        }

        if(input.type.startsWith('byte')){
            return <ByteInput label={input.name}/>
        }

        if(input.type.startsWith('string')){
            return <StringInput label={input.name}/>
        }

        if(input.type.startsWith('bool')){
            return <BoolInput label={input.name}/>
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
                {
                    this.props.item.definition.outputs.length > 0 ?
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
                    : null 
                }
                {
                    this.props.item.methodInfo.details ?
                    <div className={styles.sectionContainer}>
                        <div className={styles.sectionLabel}>
                            Dev Docs:
                        </div>
                        <div className={styles.sectionContent}>
                            {this.props.item.methodInfo.details}
                        </div>
                    </div> 
                    : null 
                }
                
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