# Read Data from the Blockchain using hardhat

In this we used the hardhat to read and write the data from the blockchain
we can read the marks of the students and also update the marks of the students.
we have three function there.
  1) getUserMarks() ==>  in this we can get the total marks of the students.
  2) passStuMarks() ==>  in this we can pass array of a student, and inside solidity we can added and store it
  2) getContract()  ==>  in this we called the deployed contract

___run the node__
npx hardhat node

___deploy the contract__
npx hardhat run --network localhost ./scripts/deploy.js 

___run the node__
npx hardhat compile

___run your scripts on node__
node ./scripts/Usertest.js

