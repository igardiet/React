// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Interfaces: to talk to other smart contracts
// IERC20 token is a common cryptocurrency standard on the blockchain
interface IERC20 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool success);
}

// Use the interface inside a smart contract
contract Contract25 {
    function deposit(address _tokenAddress, uint _amount) public {
        IERC20(_tokenAddress).transferFrom(msg.sender, address(this), _amount);
    }
}
