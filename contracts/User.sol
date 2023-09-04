// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract User {
    uint[] public marks;
    uint public totalMarks = 23;

    function pushMarks(uint[] memory _array) public returns (uint) {
        totalMarks = 0;
        marks = _array;
        for (uint i = 0; i < _array.length; i++) {
            totalMarks += marks[i];
        }
        return totalMarks;
    }
}
