import React from 'react';
import styles from './MasterDetail.module.scss';
import FunctionDetail from './FunctionDetail'
import SideNav from './SideNav'
import NetworkIndicator from '@rimble/network-indicator'

export default class MasterDetail extends React.Component {
  constructor(props) {
    super(props);

    const { contractName } = props.match.params;
    const { selectedFunc } = props.match.params;

    const contract = require('./contracts/' + contractName.toLowerCase()) // TODO - Check security of this call
    const formattedContractName = contract.getContractName()

    const contractAbi = contract.getAbi()
    const contractDevDoc = contract.getDevDoc().methods

    const functions = []
    contractAbi.forEach(function (item) {
      if (item.name && item.stateMutability === "view") {
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

    this.state = {
      contractName: formattedContractName,
      contractAbi: contractAbi,
      list: functions,
      selectedFunc: selectedFunc
    };
  }

  getMasterView() {
    const selectedItem = this.getSelectedItem()
    return (
      <SideNav list={this.state.list} selectedItem={selectedItem} contractName={this.state.contractName}/>
    );
  }

  getDetailView() {
    const selectedItem = this.getSelectedItem()

    if (Object.keys(selectedItem).length === 0) {
      return <div>No Selection</div>
    }
    return (<div styles={this.state} className={styles.detail}>
      <FunctionDetail item={selectedItem} />
    </div>);
  }

  getSelectedItem() {
    const { contractName } = this.props.match.params;
    const { selectedFunc } = this.props.match.params;

    return this.state.list.find(item => item.contractName === contractName && item.definition.name === selectedFunc) || {};
  }

  render() {
    const masterView = this.getMasterView();
    const detailView = this.getDetailView();

    return (
      <div>
        <div className={styles.networkIndicator}>
          <NetworkIndicator currentNetwork={null} requiredNetwork={1}>
          {{
            onNetworkMessage: "Connected to correct network",
            noNetworkMessage: "Not connected to anything",
            onWrongNetworkMessage: "Wrong network"
          }}
        </NetworkIndicator>
        </div>
        <div className={styles.sideNav}>
          {masterView}
        </div >
        <div className={styles.contentContainer}>
          {detailView}
        </div>
      </div>
    )
  }
}