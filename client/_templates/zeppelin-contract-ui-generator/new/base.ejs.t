---
to: src/components/contracts/<%=name%>.js
---
<% 
const contractui  = h.ZepScaffolder.buildComponentsForContract(h.contracts[name]) 
%>

import React, { Component } from 'react';

export default class <%= Name %> extends Component {
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