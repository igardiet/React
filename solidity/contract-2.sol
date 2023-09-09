pragma solidity ^0.8.0;

contract Contract2 {
    string name = "String"; // State variable is available outside the smart contract if called

    // Write function type
    // When writing info in blockchain a fee is payed
    // Public means the function is accessible outside the smart contract
    function setName(string memory _name) public {
        name = _name; // Local variable
    }

    // Read function type
    // When reading info in blockchain is free
    function getName() public view returns (string memory) {
        return name;
    }

    // Internal means the function is only accessible inside the smart contract
    function resetName() internal {
        name = "String";
    }
}
