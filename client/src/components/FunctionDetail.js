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
    constructor(props) {
        super(props);

        this.signAndSend = this.signAndSend.bind(this);
        this.inputComponents = []

        if(this.props.contractAddress){
            this.contract = new this.props.web3.eth.Contract(this.props.contractAbi, this.props.contractAddress)
        }
      }

    componentDidUpdate(){
        this.inputComponents = []
    }

    callRead = async () => {        
        try{
            const {name} = this.props.item.definition

            if(this.contract ){
                let result = await this.contract.methods[name]().call( { from : this.props.accounts[0] } );
                console.log(result)
                window.toastProvider.addMessage("Success! View console.", {
                    variant: "success"
                  })
            }
        }
        catch (err) {
            console.error(err)
        }
    }

    callWrite = async () =>{
        try {
            const {name} = this.props.item.definition

            if(this.contract ){
                let result = await this.contract.methods[name]("Hello").send( { from : this.props.accounts[0] } );
                console.log(result)
                window.toastProvider.addMessage("Success! View console.", {
                    variant: "success"
                    })
            }
        }
        catch (err) {
            console.error(err)
        }
    }

    signAndSend = async () =>{
        if(this.props.item.definition.constant){
            await this.callRead()
        }
        else{
            await this.callWrite()
        }
    }

    checkInt(type){
        return type.startsWith('int') || type.startsWith('uint')
    }

    getInputComponent(input){
        let component = null

        if(this.checkInt(input.type)){
            component = <IntInput label={input.name} type={input.type}/>
        } 
        else if (input.type === 'address'){
            component = <AddressInput label={input.name}/>
        }
        else if (input.type.startsWith('byte')){
            component = <ByteInput label={input.name}/>
        }
        else if (input.type.startsWith('string')){
            component = <StringInput label={input.name}/>
        } 
        else if (input.type.startsWith('bool')){
            component = <BoolInput label={input.name}/>
        }
        else {
            alert('argument not supported yet')
            throw  new Error('argument not supported yet')
        }

        this.inputComponents.push(component);

        return component
    }

    getOutputComponent(output, index){
        return <OutputPill key={index} label={output.type} />
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
                        {this.props.item.definition.outputs.map((item, index) =>
                            this.getOutputComponent(item, index)
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
                        <Button height={'2rem'} px={'2'} onClick={this.signAndSend} >Sign & Send</Button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}