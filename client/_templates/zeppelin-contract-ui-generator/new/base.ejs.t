---
to: src/components/contracts/<%=name.toLowerCase()%>.js
---

import React, { Component } from 'react';

const _networkLookup = <% if(h.contracts[name].contractName in h.networkAddresses) { %> <%- JSON.stringify(h.networkAddresses[h.contracts[name].contractName]) %> <% } else { %> {} <% } %>

export const getAddress = (networkId) => {

    if(networkId in _networkLookup){
      return _networkLookup[networkId]
    }

    return null
}

export const getContractName = () => {
    return "<%- h.contracts[name].contractName %>"
}

export const getAbi = () => {
    return <%- JSON.stringify(h.contracts[name].abi) %>
}

export const getDevDoc = () => {
    return <%- JSON.stringify(h.contracts[name].devdoc) %>
}

export default class <%= h.contracts[name].contractName %> extends Component {

<% 
const contractui  = h.ZepScaffolder.buildComponentsForContract(h.contracts[name]) 
%>

  render() {
    return (
      <div>

        <%- h.renderMarkup(contractui.title) %>

        <div>
          <% Object.keys(contractui.sends).forEach(function(name) { %>
          <%- h.renderMarkup(contractui.sends[name]) %>
          <% }) %>
        </div>
        
      </div>
    )
  }


}