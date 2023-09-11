// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Use multiple smart contracts and communication between them
contract ERC20Token {
    string public name;
    mapping(address => uint256) public balances;

    function mint() public {
        balances[tx.origin]++;
    }
}

contract Contract36 {
    address payable wallet;
    address public token;

    constructor(address payable _wallet, address _token) {
        wallet = _wallet;
        token = _token;
    }

    receive() external payable {
        buyToken();
    }

    function buyToken() public payable {
        ERC20Token(address(token)).mint();
        wallet.transfer(msg.value);
    }
}
