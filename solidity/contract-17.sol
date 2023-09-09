// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Ether: Work with native cryptocurrency of ethereum blockchain
contract Contract17 {
    uint public value1 = 1 wei;
    uint public value2 = 1;

    uint public value3 = 1 gwei;
    uint public value4 = 1000000000;

    uint public value5 = 1 ether;
    uint public value6 = 1000000000000000000;
}

// Ether is divisible by 18 decimal places
// wei: the smallest denomination of ether
// gwei (Gigawei): epresents one billion (1,000,000,000) wei. Gwei is often used to specify gas prices in Ethereum transactions.
// gas: is the unit used to measure the computational work required to execute operations on the Ethereum network, and gas prices are set in gwei per unit of gas.
// finney: is a larger unit of ether. One ether is equal to 1,000 finney.
// Szabo: Szabo is another larger unit of ether. One ether is equal to 1,000,000 szabo.
