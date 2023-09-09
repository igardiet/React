pragma solidity ^0.8.0;

contract Contract12 {
    uint[] public array;

    function get(uint i) public view returns (uint) {
        return array[i];
    }

    function length() public view returns (uint) {
        return array.length;
    }

    function push(uint i) public {
        array.push(i);
    }

    function pop() public {
        array.pop();
    }

    // Delete element at a specific index
    function remove(uint index) public {
        delete array[index];
    }
}
