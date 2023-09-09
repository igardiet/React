// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Fallback function if no receive function is implemented and if msg or message data is not present
contract Contract19 {
    uint public count = 0;

    // Implement any arbitrary business logic
    fallback() external payable {
        count++;
    }
}
