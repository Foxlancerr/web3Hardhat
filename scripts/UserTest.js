const { ethers } = require('ethers');
const abiKey =[
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "marks",
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
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_array",
          "type": "uint256[]"
        }
      ],
      "name": "pushMarks",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalMarks",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
const contractAddress = '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e';
const localHost = 'http://127.0.0.1:8545/';

/**
 * The function which will called the blockchain and return the smart contract data.
 */
async function getContract() {
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

// called the getUserMarks function to get the name and age
const getUserMarks = async () => {
    try {
        const contract = await getContract();
        console.log(contract)
        let marks = Number(await contract.totalMarks());
        console.log(marks);
    } catch (err) {
        console.log(err.message);
    }
}

// // // //update the data 
const passStuMarks = async () => {
    try {
        const marks = [50, 96,94,106,154];
        console.log(marks);
        // called the contract function
        const contract = await getContract();
        //set the gas limit for transactions
        const gasLimit = ethers.utils.parseUnits("5000000", "wei");
        //call the setter function of the contract
        const tx = await contract.pushMarks(marks, {
            gasLimit: gasLimit
        }); 
        const receipt = await tx.wait();
        
    } catch (err) {
        console.log(err.message);
    }
}


getUserMarks();
passStuMarks();


// // the the transiction can take little time to update the valus so we can wait it
setTimeout(function () {
    getUserMarks();
}, 1000)
