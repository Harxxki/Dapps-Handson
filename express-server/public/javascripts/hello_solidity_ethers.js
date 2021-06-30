const { ethers } = require("ethers");

let myContract;

const ContractAddress = "0xB7AC107628ed7D87fFd04d4B8F76d0BC2C07A727"; // コントラクトアドレス
const ContractAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "get",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    }
  ];
  
window.onload = function() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner(0);
  myContract = new ethers.Contract(ContractAddress, ContractAbi, signer);

  myContract.get((error, result) => {
    document.getElementById("contract_result").textContent = result;
  });
};