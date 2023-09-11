// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Time stamps are expressed in seconds in solidity
contract Contract34 {
    uint256 public peopleCount = 0;
    mapping(uint => Person) public people;

    uint256 openingTime = 1544669775;

    modifier onlyWhileOpen() {
        require(block.timestamp >= openingTime);
        _;
    }

    struct Person {
        uint _id;
        string _firstName;
        string _lastName;
    }

    function addPerson(
        string memory _firstName,
        string memory _lastName
    ) public onlyWhileOpen {
        incrementCount();
        people[peopleCount] = Person(peopleCount, _firstName, _lastName);
    }

    function incrementCount() internal {
        peopleCount += 1;
    }
}
