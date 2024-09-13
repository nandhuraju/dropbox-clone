// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    // Constructor no longer requires the visibility specifier
    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict access to the owner
    modifier restricted() {
        require(msg.sender == owner, "This function is restricted to the contract's owner.");
        _;
    }

    // Function to set the last completed migration
    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

    // Function to upgrade the migration to a new contract
    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.setCompleted(last_completed_migration);
    }
}
