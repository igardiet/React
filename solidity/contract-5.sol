pragma solidity ^0.8.0;

// Modifiers (view, pure, payable)
contract Contract5 {
    string public name = "String";
    uint public balance;

    // VIEW functions: the contract does not modify the state of the blockchain but it can read the state
    // RETURNS specify the return type of a function, it indicates what type of value the function will return to the caller.
    function getName() public view returns (string memory) {
        return name;
    }

    // PURE functions: don't modify the state and cannot read the states
    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

    // PAYABLE functions: allowed to receive ether cryptocurrency whenever the transaction is submitted
    function pay() public payable {
        balance = msg.value;
    }
}

// MEMORY: This is a storage location specifier. In Solidity, there are different places where data can be stored, such as memory, storage, and calldata.
// MEMORY: This is used for temporary data storage within a function. Data stored in memory is cleared when the function execution ends. It's often used for variables that don't need to persist beyond the function's scope.
// Returns (string memory) means that the function getName will return a value of type string, and this string data is stored in the function's memory space. It's important to use memory for return types like strings or arrays, as these types can vary in size, and storing them in memory is more efficient than using storage or other storage locations.
