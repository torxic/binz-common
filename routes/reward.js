import express from "express";
import { ethers } from "ethers";
import PinataClient from "@pinata/sdk";
import contract from "../utils/contract.js"; // Ensure to add .js if using ES modules

const router = express.Router();

// Instantiate Pinata client correctly
const pinata = new PinataClient(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

router.post("/", async (req, res) => {
    const { userAddress, amountPlastic, data } = req.body;

    try {
        // Upload data to IPFS
        const ipfsResponse = await pinata.pinJSONToIPFS(data);
        const ipfsHash = ipfsResponse.IpfsHash;

        // Reward recycling
        const tx = await contract.rewardForRecycling(userAddress, amountPlastic, ipfsHash);
        await tx.wait();

        res.status(200).json({ message: "Reward issued", tx, ipfsHash });
    } catch (error) {
        res.status(500).json({ message: "Failed to issue reward", error });
    }
});

export default router;
