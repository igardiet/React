pragma solidity ^0.8.0;

contract Contract4 {
    uint public count;

    // Public function can be called outside the smart contract
    function increment1() public {
        count = count + 1;
    }

    // Public function can be called by another function
    function increment2() public {
        increment1();
    }

    // Private function can't be called outside the smart contract
    function increment3() private {
        count = count + 1;
    }

    // Private function can be called inside of another function of the same contract
    function increment4() public {
        increment3();
    }

    // External function can only be called outside the smart contract
    function increment5() external {
        count = count + 1;
    }

    // Internal function can only be called inside the same smart contract
    function increment6() internal {
        count = count + 1;
    }

    function increment7() public {
        increment6();
    }
}
