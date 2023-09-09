// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract7 {
    string public name;

    // The constructor function runs once whenever the contract is initialized or put on the blockchain
    constructor(string memory _name) {
        name = _name;
    }
}
