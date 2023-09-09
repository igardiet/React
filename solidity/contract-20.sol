// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Check balance of any address inside of a smart contract
contract Contract20 {
    function checkBalance() public view returns (uint) {
        return address(this).balance;
    }
}
