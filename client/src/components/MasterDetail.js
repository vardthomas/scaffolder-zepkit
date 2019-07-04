import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MasterDetail.module.scss';

import FunctionDetail from './FunctionDetail'
import SideNav from './SideNav'


export default class MasterDetail extends React.Component {
  constructor(props) {
    super(props);

    var { contractName } = props.match.params;
    var { selectedFunc } = props.match.params;

    var contract = require('./contracts/' + contractName.toLowerCase().replace("../", ""))
    contractName = contract.getContractName()
    var contractAbi = contract.getAbi()
    var contractDevDoc = contract.getDevDoc().methods

    var functions = []
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

        functions.push({ key: signature, signature: signature, contractName: contractName, definition: item , methodInfo: methodInfo})
      }
    })

    this.state = {
      contractName: contractName,
      contractAbi: contractAbi,
      list: functions,
      selectedFunc: selectedFunc
    };
  }

  getMasterView() {
    const selectedItem = this.getSelectedItem()
    return (
      <div className={styles.test}>
        <ul>
          {this.state.list.map(item => (
            <li key={item.key} className={item.definition.name === selectedItem.selectedFunc ? styles.active : styles.item}>
              <Link to={`/contract/${item.contractName}/${item.definition.name}`}>{item.definition.name}</Link>
            </li>
          ))}
        </ul>
      </div>
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
    var { contractName } = this.props.match.params;
    var { selectedFunc } = this.props.match.params;

    return this.state.list.find(item => item.contractName === contractName && item.definition.name === selectedFunc) || {};
  }

  render() {
    const masterView = this.getMasterView();
    const detailView = this.getDetailView();

    return (
      <div>
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