import express from "express";
import contract from "../utils/contract.js"; // Ensure contract.js is correctly imported

const router = express.Router();

router.post("/", async (req, res) => {
    const { userAddress } = req.body;

    try {
        // Call the contract method to subscribe
        const tx = await contract.subscribe({ from: userAddress });
        await tx.wait();
        res.status(200).json({ message: "Subscription successful", tx });
    } catch (error) {
        res.status(500).json({ message: "Subscription failed", error });
    }
});

export default router;
