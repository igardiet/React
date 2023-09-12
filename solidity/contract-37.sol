// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Inheritance between smart contracts
// Is a base contract for creating a basic ERC-20 token-like structure
contract ERC20Token {
    string public name; // This variable stores the name of the token
    mapping(address => uint256) public balances; // This mapping tracks the token balances of different addresses

    constructor(string memory _name) {
        name = _name; // Sets the name variable when the contract is deployed, initializing the token name
    }

    // Virtual keyword to indicate that it's intended to be overridden by derived contracts
    function mint() public virtual {
        balances[tx.origin]++; // This function allows the contract to "mint" (create) new tokens. It increases the balance of the sender's address (tx.origin) by 1
    }
}

// Contract37 is derived from the ERC20Token contract using inheritance. It inherits the state variables and functions of ERC20Token and extends them.
contract Contract37 is ERC20Token {
    string public symbol; // This variable stores the symbol of the token
    address[] public owners; // This array stores addresses that are considered owners
    uint256 ownerCount; // This variable stores the count of owners

    // The constructor of Contract37 takes two parameters, _name and _symbol, which are used to initialize the name and symbol variables inherited from ERC20Token. It calls the constructor of ERC20Token with the _name parameter
    constructor(string memory _name, string memory _symbol) ERC20Token(_name) {
        symbol = _symbol;
    }

    // Override the function in the parent contract (ERC20Token)
    function mint() public override {
        super.mint(); // Call function to update balances
        ownerCount++; // Increment the number of peoplee who own the token
        owners.push(msg.sender); // Add sender to array of owners
    }
}
