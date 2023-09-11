// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract27 {
    string public value = "String";

    function set(string memory _value) public {
        value = _value;
    }
}
