
import React, { Component } from 'react';


export const getContractName = () => {
    return "MyNFT"
}

export const getAbi = () => {
    return [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}]
}

export const getDevDoc = () => {
    return {"methods":{"approve(address,uint256)":{"details":"Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.","params":{"to":"address to be approved for the given token ID","tokenId":"uint256 ID of the token to be approved"}},"balanceOf(address)":{"details":"Gets the balance of the specified address.","params":{"owner":"address to query the balance of"},"return":"uint256 representing the amount owned by the passed address"},"getApproved(uint256)":{"details":"Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.","params":{"tokenId":"uint256 ID of the token to query the approval of"},"return":"address currently approved for the given token ID"},"isApprovedForAll(address,address)":{"details":"Tells whether an operator is approved by a given owner.","params":{"operator":"operator address which you want to query the approval of","owner":"owner address which you want to query the approval of"},"return":"bool whether the given operator is approved by the given owner"},"mint(address,uint256)":{"details":"Function to mint tokens.","params":{"to":"The address that will receive the minted tokens.","tokenId":"The token id to mint."},"return":"A boolean that indicates if the operation was successful."},"name()":{"details":"Gets the token name.","return":"string representing the token name"},"ownerOf(uint256)":{"details":"Gets the owner of the specified token ID.","params":{"tokenId":"uint256 ID of the token to query the owner of"},"return":"address currently marked as the owner of the given token ID"},"safeTransferFrom(address,address,uint256)":{"details":"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator","params":{"from":"current owner of the token","to":"address to receive the ownership of the given token ID","tokenId":"uint256 ID of the token to be transferred"}},"safeTransferFrom(address,address,uint256,bytes)":{"details":"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator","params":{"_data":"bytes data to send along with a safe transfer check","from":"current owner of the token","to":"address to receive the ownership of the given token ID","tokenId":"uint256 ID of the token to be transferred"}},"setApprovalForAll(address,bool)":{"details":"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.","params":{"approved":"representing the status of the approval to be set","to":"operator address to set the approval"}},"supportsInterface(bytes4)":{"details":"See `IERC165.supportsInterface`.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."},"symbol()":{"details":"Gets the token symbol.","return":"string representing the token symbol"},"tokenByIndex(uint256)":{"details":"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.","params":{"index":"uint256 representing the index to be accessed of the tokens list"},"return":"uint256 token ID at the given index of the tokens list"},"tokenOfOwnerByIndex(address,uint256)":{"details":"Gets the token ID at a given index of the tokens list of the requested owner.","params":{"index":"uint256 representing the index to be accessed of the requested tokens list","owner":"address owning the tokens list to be accessed"},"return":"uint256 token ID at the given index of the tokens list owned by the requested address"},"tokenURI(uint256)":{"details":"Returns an URI for a given token ID. Throws if the token ID does not exist. May return an empty string.","params":{"tokenId":"uint256 ID of the token to query"}},"totalSupply()":{"details":"Gets the total amount of tokens stored by the contract.","return":"uint256 representing the total amount of tokens"},"transferFrom(address,address,uint256)":{"details":"Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use `safeTransferFrom` whenever possible. Requires the msg.sender to be the owner, approved, or operator.","params":{"from":"current owner of the token","to":"address to receive the ownership of the given token ID","tokenId":"uint256 ID of the token to be transferred"}}}}
}

export default class MyNFT extends Component {



  render() {
    return (
      <div>

        <h3>MyNFT</h3>

        <div>
          
          <div>supportsInterface</div>
          
          <div>name</div>
          
          <div>getApproved</div>
          
          <div>approve</div>
          
          <div>totalSupply</div>
          
          <div>transferFrom</div>
          
          <div>tokenOfOwnerByIndex</div>
          
          <div>mint</div>
          
          <div>safeTransferFrom</div>
          
          <div>tokenByIndex</div>
          
          <div>ownerOf</div>
          
          <div>balanceOf</div>
          
          <div>symbol</div>
          
          <div>addMinter</div>
          
          <div>renounceMinter</div>
          
          <div>setApprovalForAll</div>
          
          <div>isMinter</div>
          
          <div>tokenURI</div>
          
          <div>isApprovedForAll</div>
          
          <div>MinterAdded</div>
          
          <div>MinterRemoved</div>
          
          <div>Transfer</div>
          
          <div>Approval</div>
          
          <div>ApprovalForAll</div>
          
        </div>
        
      </div>
    )
  }


}