pragma solidity ^0.8.0;

// Visibility of variables
contract Contract3 {
    string name1 = "Name 1"; // No visibility
    string private name2 = "Name 2"; // Only accessible inside the smart contract
    string internal name3 = "Name 3"; // Only accessible inside the smart contract but can be inherited
    string public name4 = "Name 4"; // Can be called inside, outside and also can be inherited
}

// State variables visibility
// No Visibility (Default): Variables declared without any explicit visibility modifier have no visibility specifier. They are accessible within the current contract and derived contracts (if any), but not externally.
// Private: Variables declared as private are only accessible from within the current contract. They cannot be accessed from derived contracts or externally.
// Internal: Variables declared as internal are accessible from within the current contract and derived contracts (if any). They are not directly accessible externally.
// Public: Variables declared as public can be accessed from within the current contract, derived contracts, and externally. Solidity automatically generates a getter function for public variables to allow external access.

// Function visibility:
// External: Functions declared as external are explicitly intended to be called from outside the contract. They can only be invoked via external transactions, not from within the contract or derived contracts.
// Public: Functions declared as public can be called from within the contract, derived contracts, and externally. Solidity generates a public ABI (Application Binary Interface) for these functions.
// Internal: Functions declared as internal are accessible from within the current contract and derived contracts (if any). They are not directly accessible externally. These functions can be seen as intermediate between public and external.
// Private: Functions declared as private are only accessible within the current contract. They cannot be called from derived contracts or externally. These functions are the most restricted in terms of visibility.
