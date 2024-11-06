import express from "express";
import contract from "../utils/contract.js"; // Make sure to add .js if using ES modules

const router = express.Router();

router.get("/:userAddress", async (req, res) => {
    const { userAddress } = req.params;

    try {
        const records = await contract.getRecyclingRecords(userAddress);
        res.status(200).json({ records });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve records", error });
    }
});

export default router;
