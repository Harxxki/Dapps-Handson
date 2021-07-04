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
const provider = new ethers.providers.Web3Provider(window.ethereum);
  
window.onload = function() {
  var contract = new ethers.Contract(address, abi, provider);

  var callPromise = contract.get();

  callPromise.then(function(result){
    document.getElementById("contract_result").textContent = result;
  });
};