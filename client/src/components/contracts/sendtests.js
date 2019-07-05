
import React, { Component } from 'react';


export const getContractName = () => {
    return "SendTests"
}

export const getAbi = () => {
    return [{"constant":true,"inputs":[],"name":"_stringVal","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_byteVal","outputs":[{"name":"","type":"bytes1"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_intVal","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_boolVal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_uintVal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_addressVal","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"val","type":"string"}],"name":"SetStringVal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"val","type":"int256"}],"name":"SetIntVal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"val","type":"uint256"}],"name":"SetUIntVal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"val","type":"bool"}],"name":"SetBoolVal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"val","type":"bytes1"}],"name":"SetByteVal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"val","type":"address"}],"name":"SetAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
}

export const getDevDoc = () => {
    return {"methods":{}}
}

export default class SendTests extends Component {



  render() {
    return (
      <div>

        <h3>SendTests</h3>

        <div>
          
          <div>_stringVal</div>
          
          <div>_byteVal</div>
          
          <div>_intVal</div>
          
          <div>_boolVal</div>
          
          <div>_uintVal</div>
          
          <div>_addressVal</div>
          
          <div>SetStringVal</div>
          
          <div>SetIntVal</div>
          
          <div>SetUIntVal</div>
          
          <div>SetBoolVal</div>
          
          <div>SetByteVal</div>
          
          <div>SetAddress</div>
          
        </div>
        
      </div>
    )
  }


}