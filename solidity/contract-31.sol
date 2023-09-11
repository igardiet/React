// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// ENUM: to check the current state of variable by the use of functions
contract Contract31 {
    enum State {
        Waiting,
        Ready,
        Active
    }
    State public state;

    constructor() {
        state = State.Waiting;
    }

    function activate() public {
        state = State.Active;
    }

    function isActive() public view returns (bool) {
        return state == State.Active;
    }
}
