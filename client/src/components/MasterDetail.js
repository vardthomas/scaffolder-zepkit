import React from 'react';
import styles from './MasterDetail.module.scss';
import FunctionDetail from './FunctionDetail'
import SideNav from './SideNav'
import {ToastMessage} from 'rimble-ui'

export default class MasterDetail extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading : true
    }
  }

  componentDidMount = async () => {

    const { contractName } = this.props.match.params;
    const { selectedFunc } = this.props.match.params;

    const contract = require('./contracts/' + contractName.toLowerCase()) // TODO - Check security of this call
    const formattedContractName = contract.getContractName()

    const networkId = await this.props.web3.eth.net.getId()
    const contractAbi = contract.getAbi()
    const contractDevDoc = contract.getDevDoc().methods
    const contractAddress = contract.getAddress(networkId);


    // TODO - This is nonoptimal and could probably be moved to the contract component generation step.
    const functions = []
    contractAbi.forEach(function (item) {
      if (item.name && item.type === "function") {
        var inputs = []
        item.inputs.forEach(function (input) {
          inputs.push(input.type)
        });

        var signature = `${item.name}(${inputs.join(',')})`
        var methodInfo = ""
        if(signature in contractDevDoc){
          methodInfo = contractDevDoc[signature]
        }

        functions.push({ key: signature, signature: signature, contractName: formattedContractName, definition: item , methodInfo: methodInfo})
      }
    })

    this.setState({
      isLoading : false,
      contractName: formattedContractName,
      contractAddress,
      contractAbi: contractAbi,
      list: functions,
      selectedFunc: selectedFunc
    })
  }

  getMasterView() {
    const selectedItem = this.getSelectedItem()
    const {contractName, contractAddress} = this.state
    return (
      <SideNav 
        list={this.state.list} 
        selectedItem={selectedItem} 
        contractName={contractName} 
        contractAddress={contractAddress}
      />
    );
  }

  getDetailView() {
    const selectedItem = this.getSelectedItem()
    const { contractAddress, contractAbi} = this.state
    const { web3, accounts} = this.props

    if (Object.keys(selectedItem).length === 0) {
      return <div>No Selection</div>
    }
    return (<div styles={this.state} className={styles.detail}>
      <FunctionDetail item={selectedItem} contractAddress={contractAddress} contractAbi={contractAbi} web3={web3} accounts={accounts} toastProvider={this.toastProvider}/>
    </div>);
  }

  getSelectedItem() {
    const { contractName } = this.props.match.params;
    const { selectedFunc } = this.props.match.params;

    return this.state.list.find(item => item.contractName === contractName && item.definition.name === selectedFunc) || {};
  }

  render() {

    if(this.state.isLoading){
      return null
    }

    const masterView = this.getMasterView();
    const detailView = this.getDetailView();

    return (
      <div>
        <div className={styles.sideNav}>
          {masterView}
        </div >
        <div className={styles.contentContainer}>
          {detailView}
          <ToastMessage.Provider ref={node => (window.toastProvider = node)} />
        </div>
      </div>
    )
  }
}