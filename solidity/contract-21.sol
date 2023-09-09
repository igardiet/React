// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Send ether to a different address
contract Contract21 {
    function transfer(address payable _to) public payable {
        // Access sender inside function
        msg.sender;
        // Access value inside function
        (bool sent, ) = _to.call{value: msg.value}("");
        // require statement
        require(sent, "Failed!");
    }
}

// Any function can receive ether whenever the transaction is sent as long as the payable modifier is used
