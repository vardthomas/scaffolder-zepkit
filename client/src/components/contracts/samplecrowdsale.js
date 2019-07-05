
import React, { Component } from 'react';


export const getContractName = () => {
    return "SampleCrowdsale"
}

export const getAbi = () => {
    return [{"constant":true,"inputs":[],"name":"hasClosed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"goal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"weiRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"closingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"capReached","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"goalReached","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"finalized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"openingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refundee","type":"address"}],"name":"claimRefund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"beneficiary","type":"address"}],"name":"buyTokens","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"openingTime","type":"uint256"},{"name":"closingTime","type":"uint256"},{"name":"rate","type":"uint256"},{"name":"wallet","type":"address"},{"name":"cap","type":"uint256"},{"name":"token","type":"address"},{"name":"goal","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[],"name":"CrowdsaleFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"prevClosingTime","type":"uint256"},{"indexed":false,"name":"newClosingTime","type":"uint256"}],"name":"TimedCrowdsaleExtended","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"purchaser","type":"address"},{"indexed":true,"name":"beneficiary","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokensPurchased","type":"event"}]
}

export const getDevDoc = () => {
    return {"details":"This is an example of a fully fledged crowdsale. The way to add new features to a base crowdsale is by multiple inheritance. In this example we are providing following extensions: CappedCrowdsale - sets a max boundary for raised funds RefundableCrowdsale - set a min goal to be reached and returns funds if it's not met MintedCrowdsale - assumes the token can be minted by the crowdsale, which does so when receiving purchases. * After adding multiple features it's good practice to run integration tests to ensure that subcontracts works together as intended.","methods":{"buyTokens(address)":{"details":"low level token purchase ***DO NOT OVERRIDE*** This function has a non-reentrancy guard, so it shouldn't be called by another `nonReentrant` function.","params":{"beneficiary":"Recipient of the token purchase"}},"cap()":{"return":"the cap of the crowdsale."},"capReached()":{"details":"Checks whether the cap has been reached.","return":"Whether the cap was reached"},"claimRefund(address)":{"details":"Investors can claim refunds here if crowdsale is unsuccessful.","params":{"refundee":"Whose refund will be claimed."}},"closingTime()":{"return":"the crowdsale closing time."},"finalize()":{"details":"Must be called after crowdsale ends, to do some extra finalization work. Calls the contract's finalization function."},"finalized()":{"return":"true if the crowdsale is finalized, false otherwise."},"goal()":{"return":"minimum amount of funds to be raised in wei."},"goalReached()":{"details":"Checks whether funding goal was reached.","return":"Whether funding goal was reached"},"hasClosed()":{"details":"Checks whether the period in which the crowdsale is open has already elapsed.","return":"Whether crowdsale period has elapsed"},"isOpen()":{"return":"true if the crowdsale is open, false otherwise."},"openingTime()":{"return":"the crowdsale opening time."},"rate()":{"return":"the number of token units a buyer gets per wei."},"token()":{"return":"the token being sold."},"wallet()":{"return":"the address where funds are collected."},"weiRaised()":{"return":"the amount of wei raised."}},"title":"SampleCrowdsale"}
}

export default class SampleCrowdsale extends Component {



  render() {
    return (
      <div>

        <h3>SampleCrowdsale</h3>

        <div>
          
          <div>hasClosed</div>
          
          <div>rate</div>
          
          <div>cap</div>
          
          <div>goal</div>
          
          <div>weiRaised</div>
          
          <div>isOpen</div>
          
          <div>closingTime</div>
          
          <div>finalize</div>
          
          <div>capReached</div>
          
          <div>wallet</div>
          
          <div>goalReached</div>
          
          <div>finalized</div>
          
          <div>openingTime</div>
          
          <div>claimRefund</div>
          
          <div>buyTokens</div>
          
          <div>token</div>
          
          <div>CrowdsaleFinalized</div>
          
          <div>TimedCrowdsaleExtended</div>
          
          <div>TokensPurchased</div>
          
        </div>
        
      </div>
    )
  }


}