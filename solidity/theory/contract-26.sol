// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract26 {
    string value;

    constructor() {
        value = "myValue";
    }

    function get() public view returns (string memory) {
        return value;
    }

    function set(string memory _value) public {
        value = _value;
    }
}
