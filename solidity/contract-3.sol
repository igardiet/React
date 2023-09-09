pragma solidity ^0.8.0;

// visibilities of a variable
contract Contract3 {
    string name1 = "Name 1"; // no visibility
    string private name2 = "Name 2"; // only accessible inside the smart contract
    string internal name3 = "Name 3"; // only accessible inside the smart contract but can be inherited
    string public name4 = "Name 4"; // can be called inside, outside and also can be inherited
}
