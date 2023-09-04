
/**
 * update and read the contract data using hardhat and ether.js
 * **********************************************************************************
*/

const { ethers } = require('ethers');
const abiKey = [
    {
        "inputs": [],
        "name": "age",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_age",
                "type": "uint256"
            }
        ],
        "name": "setNameAndAge",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
const localHost = 'http://127.0.0.1:8545/';

console.log(ethers);
async function getData() {
    try {
        // provider
        const provider = new ethers.getDefaultProvider(localHost);
        // signer
        const signer = await provider.getSigner();
        //called the contract 
        const deployContract = new ethers.Contract(
            contractAddress,
            abiKey,
            signer
        )
        return deployContract;
    } catch (err) {
        console.log(err.message);
    }
}

// called the getNameAndAge function to get the name and age
const getNameAndAge = async () => {
    try {
        const contract = await getData();
        // name
        const name = await contract.name();
        // age
        const age = +await contract.age();
        console.log(`Name: ${name} and age: ${age}`);
    } catch (err) {
        console.log(err.message);
    }
}

const setNameAndAge = async (name, age) => {
    try {
        // called the contract function
        const contract = await getData();
        //set the gas limit for transactions
        const gasLimit = ethers.utils.parseUnits("500000", "wei");
        //call the setter function of the contract
        contract.setNameAndAge(name, age, {
            gasLimit: gasLimit
        });


    } catch (err) {
        console.log(err.message);
    }
}

// getData();
getNameAndAge();
setNameAndAge('jalal', 45)
getNameAndAge();
// the the transiction can take little time to update the valus so we can wait it
setTimeout(function () {
    getNameAndAge();
}, 100)


/**
 * Read the contract data using hardhat and ether.js
 * **********************************************************************************
 */

const ethers = require('ethers');
const abiKey = [
    {
        "inputs": [],
        "name": "age",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_age",
                "type": "uint256"
            }
        ],
        "name": "setNameAndAge",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
const localHost = 'http://127.0.0.1:8545/';


async function getData() {
    try {
        // provider
        const provider = new ethers.getDefaultProvider(localHost);
        // signer
        const signer = await provider.getSigner();
        //called the contract 
        const deployContract = new ethers.Contract(
            contractAddress,
            abiKey,
            signer
        )
        return deployContract;
    } catch (err) {
        console.log(err.message);
    }
}

// called the getNameAndAge function to get the name and age
const getNameAndAge = async () => {
    try {
        const contract = await getData();
        // name
        const name = await contract.name();
        // age
        const age = +await contract.age();
        console.log(`Name: ${name} and age: ${age}`);
    } catch (err) {
        console.log(err.message);
    }
}

getNameAndAge();
// getData();