// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Global variables are available in any smart contract
contract Contract8 {
    address public contractAddress;
    address public payer;
    address public origin;
    uint public amount;

    constructor() {
        contractAddress = address(this); // This corresponds to the current smart contract being coded against
    }

    function pay() public payable {
        payer = msg.sender; // Message has values attached to it like sender which is the person calling the function
        origin = tx.origin; // tx is transaction, get the transaction origin
        amount = msg.value; // Amount of cryptocurrency
    }

    function getBlockInfo() public view returns (uint, uint, uint) {
        return (block.number, block.timestamp, block.chainid); // block is the current block on the chain
    }
}
