pragma solidity ^0.8.0;

// Custom modifiers
contract Contract6 {
    address private owner;
    string public name = "";

    // Restrict who can call a specific function requiring the message sender
    modifier onlyOwner() {
        require(msg.sender == owner, "caller must be owner");
        _;
    }

    function setName(string memory _name) public onlyOwner {
        name = _name;
    }
}
