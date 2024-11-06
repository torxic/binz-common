import { ethers } from "ethers";
import contractABI from "../artifacts/contracts/BinZSubscription.sol/BinZSubscription.json" assert { type: "json" };

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_API_URL); // Ensure INFURA_API_URL is correct
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider); // Ensure PRIVATE_KEY is set
const contractAddress = process.env.CONTRACT_ADDRESS; // Ensure CONTRACT_ADDRESS is correct

const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export default contract;
