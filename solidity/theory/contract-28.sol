// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract28 {
    // Set default value on state variable
    string public value = "String";

    function set(string memory _value) public {
        value = _value;
    }
}
