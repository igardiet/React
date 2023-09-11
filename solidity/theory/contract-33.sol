// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Mapping: Is an associative array (associate to value, key value reference) like a hashtable, hashmap, hash
contract Contract33 {
    uint256 public peopleCount = 0;
    mapping(uint => Person) public people;

    address owner;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    struct Person {
        uint _id;
        string _firstName;
        string _lastName;
    }

    constructor() {
        owner = msg.sender;
    }

    function addPerson(
        string memory _firstName,
        string memory _lastName
    ) public onlyOwner {
        incrementCount();
        people[peopleCount] = Person(peopleCount, _firstName, _lastName);
    }

    function incrementCount() internal {
        peopleCount += 1;
    }
}
