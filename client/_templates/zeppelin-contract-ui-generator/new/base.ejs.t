---
to: src/components/contracts/<%=name.toLowerCase()%>.js
---

import React, { Component } from 'react';


export const getContractName = () => {
    return "<%- h.contracts[name].contractName %>"
}

export const getAbi = () => {
    return <%- JSON.stringify(h.contracts[name].abi) %>
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