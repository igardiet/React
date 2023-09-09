pragma solidity ^0.8.0; // version of the Solidity compiler to be used

// declare the start of a solidity smart contract
// the public keyword before each variable makes them readable from outside the contract, meaning that anyone can query their values on the Ethereum blockchain
contract Contract1 {
    string public myString = "String";
    bool public boolean = true;
    uint public myUint = 1; // unsigned integer can only store positive values
    int public myInt = 1; // signed integers can store both positive and negative values
    address public myAddress = 0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5; // public Ethereum address
}
