pragma solidity ^0.8.0;

contract Contract2 {
    string name = "String"; // state variable is available outside the smart contract if called

    // write function type
    // when writing info in blockchain a fee is payed
    // public means the function is accessible outside the smart contract
    function setName(string memory _name) public {
        name = _name; // local variable
    }

    // read function type
    // when reading info in blockchain is free
    function getName() public view returns (string memory) {
        return name;
    }

    // internal means the function is only accessible inside the smart contract
    function resetName() internal {
        name = "String";
    }
}
