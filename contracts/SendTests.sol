pragma solidity ^0.5.0;


contract SendTests {
  string public _stringVal;

  function SetStringVal(string memory val) public {
    _stringVal = val;
  }

  int public _intVal;

  function SetIntVal(int val) public {
    _intVal = val;
  }

  uint256 public _uintVal;

  function SetUIntVal(uint256 val) public {
    _uintVal = val;
  }

  bool public _boolVal;

  function SetBoolVal(bool val) public {
    _boolVal = val;
  }

  byte public _byteVal;

  function SetByteVal(byte val) public {
    _byteVal = val;
  }

  address public _addressVal;

  function SetAddress(address val) public {
    _addressVal = val;
  }
}