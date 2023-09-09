// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Inheritance: create smart contracts that inherit behaviour from other smart contracts
contract Ownable {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller must be owner");
        _;
    }
}

contract Contract23 is Ownable {
    string public name = "String";

    function setName(string memory _name) public onlyOwner {
        name = _name;
    }
}
