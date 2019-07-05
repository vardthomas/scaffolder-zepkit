import React, { Component } from 'react';
import getWeb3, { getGanacheWeb3 } from './utils/getWeb3';
import Web3Info from './components/Web3Info/index.js';
import { Loader } from 'rimble-ui';
import MasterDetail from './components/MasterDetail';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NetworkIndicator from '@rimble/network-indicator'
import styles from './App.module.scss';

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    route: window.location.pathname.replace('/', ''),
  };

  getGanacheAddresses = async () => {
    if (!this.ganacheProvider) {
      this.ganacheProvider = getGanacheWeb3();
    }
    if (this.ganacheProvider) {
      return await this.ganacheProvider.eth.getAccounts();
    }
    return [];
  };

  componentDidMount = async () => {
    try {
      const isProd = process.env.NODE_ENV === 'production';
      if (!isProd) {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();

        await web3.eth.net.getNetworkType((err, network)=> {
          if(network !== "private"){
            throw "wrong network: only use on private test nets!"
          }
          return network
        }); 

        const ganacheAccounts = await this.getGanacheAddresses();

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const isMetaMask = web3.currentProvider.isMetaMask;
        let balance = accounts.length > 0 ? await web3.eth.getBalance(accounts[0]) : web3.utils.toWei('0');
        balance = web3.utils.fromWei(balance, 'ether');
        this.setState({ web3, ganacheAccounts, accounts, balance, networkId, isMetaMask });
      }
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(`Failed to initialize. Check console errors.`);
      console.error(error);
    }
  };

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  renderLoader() {
    return (
      <div className={styles.loader}>
        <Loader size="80px" color="red" />
        <h3> Loading Web3, accounts, and contract...</h3>
        <p> Unlock your metamask </p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className={styles.networkIndicator}>
          <NetworkIndicator currentNetwork={this.state.networkId} requiredNetwork={this.state.networkId}>
            {{
              onNetworkMessage: "Connected to correct network",
              noNetworkMessage: "Not connected to anything",
              onWrongNetworkMessage: "Wrong network"
            }}
          </NetworkIndicator>
        </div>
        {!this.state.web3 && this.renderLoader()}
        {this.state.web3 && 
                <Router>
                <Route 
                  path="/contract/:contractName/:selectedFunc?" 
                  component={props => <MasterDetail {...props} web3={this.state.web3} />} /> 
              </Router>
        }
      </div>
    )
  }
}

export default App;
