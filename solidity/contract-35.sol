// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Function that accepts ether
contract Contract35 {
    mapping(address => uint256) public balances;
    address payable wallet;

    // trigger event
    event Purchase(address _buyer, uint256 _amount);

    constructor(address payable _wallet) {
        wallet = _wallet;
    }

    // external means it only can be called outside the smart contract
    // The receive function is called when the contract receives ether
    receive() external payable {
        buyToken();
    }

    function buyToken() public payable {
        // buy token
        balances[msg.sender] += 1;
        // send ether to wallet
        wallet.transfer(msg.value);
        emit Purchase(msg.sender, 1);
    }
}
