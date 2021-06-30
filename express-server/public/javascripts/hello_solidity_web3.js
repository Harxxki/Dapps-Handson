const address = "0xB7AC107628ed7D87fFd04d4B8F76d0BC2C07A727"; // コントラクトアドレス
const abi = [
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
  var contract = web3.eth.contract(abi).at(address);
  contract.get((error, result) => {
    document.getElementById("contract_result").textContent = result;
  });
};