// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Structs: Define data structures inside solidity
contract Contract32 {
    Person[] public people;

    uint256 public peopleCount;

    struct Person {
        string _firstName;
        string _lastName;
    }

    function addPerson(
        string memory _firstName,
        string memory _lastName
    ) public {
        people.push(Person(_firstName, _lastName));
        peopleCount += 1;
    }
}
