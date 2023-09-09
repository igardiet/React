// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Error handling in functions
contract Contract22 {
    event Log(string message);

    // Function to check if value is true or false
    function example1(uint _value) public {
        require(_value > 10, "Must be greater than 10");
        emit Log("Success");
    }

    function example2(uint _value) public {
        if (_value <= 10) {
            revert("Must be greater than 10");
        }
        emit Log("Success");
    }
}
