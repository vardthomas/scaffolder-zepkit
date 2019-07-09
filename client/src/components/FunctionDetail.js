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
        this.handleInputChange = this.handleInputChange.bind(this);

        if(this.props.contractAddress){
            this.contract = new this.props.web3.eth.Contract(this.props.contractAbi, this.props.contractAddress)
        }

        this.state={
            params: {}
        }
      }

      componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.item !== this.props.item) {
            this.setState(({
                params: {}
            }));
        }
      }

    getDefaultValue(type){
        if(type.startsWith('int') || type.startsWith('uint')){
            return 0
        } 
        else if (type === 'address'){
            return "0x0000000000000000000000000000000000000000"
        }
        else if (type.startsWith('byte')){
            return []
        }
        else if (type.startsWith('string')){
            return 0
        } 
        else if (type.startsWith('bool')){
            return false
        }
        else {
            alert('param type not supported yet')
            throw  new Error('param type not supported yet')
        }
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

            const sortedParams = [];
            for (var key in this.state.params) {
                sortedParams[sortedParams.length] = key;
            }
            sortedParams.sort();

            let parameters = []

            for (var i = 0; i < this.props.item.definition.inputs.length; i++){
                if (i in this.state.params){
                    parameters.unshift(this.state.params[i])
                }
                else{
                    parameters.unshift(this.getDefaultValue(this.props.item.definition.inputs[i].type))
                }
            }

            console.log(parameters)

            if(this.contract ){
                let result = await this.contract.methods[name](...parameters).send( { from : this.props.accounts[0] } );
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

    handleInputChange(index, value) {
        let params = Object.assign({}, this.state.params)
        params[index] = value

        this.setState(({
            params: params
        }));
    }

    getInputComponent(input, index){
        if(input.type.startsWith('int') || input.type.startsWith('uint')){
            return <IntInput key={index} label={input.name} type={input.type} index={index}  handleInputChange={this.handleInputChange}/>
        } 
        else if (input.type === 'address'){
            return <AddressInput key={index} label={input.name} index={index} handleInputChange={this.handleInputChange}/>
        }
        else if (input.type.startsWith('byte')){
            return <ByteInput key={index} label={input.name} index={index} handleInputChange={this.handleInputChange}/>
        }
        else if (input.type.startsWith('string')){
            return <StringInput key={index} label={input.name} index={index} handleInputChange={this.handleInputChange}/>
        } 
        else if (input.type.startsWith('bool')){
            return <BoolInput key={index} label={input.name} index={index} handleInputChange={this.handleInputChange}/>
        }
        else {
            alert('argument not supported yet')
            throw  new Error('argument not supported yet')
        }
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
                    <form onSubmit={this.handleSearchTermSubmit}>
                        {this.props.item.definition.inputs.map((item, index) =>
                            this.getInputComponent(item, index)
                        )}
                    </form>

                    <div className={this.props.item.definition.inputs.length > 0 ? styles.submitContainer : ""}>
                        <Button height={'2rem'} px={'2'} onClick={this.signAndSend} >Sign & Send</Button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}