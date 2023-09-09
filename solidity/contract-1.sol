pragma solidity ^0.8.0; // Version of the Solidity compiler to be used

// Declare the start of a solidity smart contract
// The public keyword before each variable makes them readable from outside the contract, meaning that anyone can query their values on the Ethereum blockchain
contract Contract1 {
    string public myString = "String";
    bool public boolean = true;
    uint public myUint = 1; // Unsigned integer can only store positive values
    int public myInt = 1; // Signed integers can store both positive and negative values
    address public myAddress = 0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5; // Public Ethereum address
}
