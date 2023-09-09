// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Events: Solidity lets to subscribe to events from an external consumer to find out anytime a function or its contents has been called
contract Contract16 {
    string public message = "String";

    event MessageUpdated(address indexed _user, string _message);

    // Update the message in the smart contract and init the event with emit and specified values
    function updateMessage(string memory _message) public {
        message = _message;
        emit MessageUpdated(msg.sender, _message);
    }
}

// Anytime this function is called there will be a record of it on the blockchain that i can go back and look at by finding this event
// Get a notification anytime this function is called in real time if subscribed to this event externally and get a push notification getting the history of every time this message has been emitted
