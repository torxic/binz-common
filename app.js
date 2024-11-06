import dotenv from "dotenv";
import express from "express";

dotenv.config(); // Load environment variables
const app = express();

app.use(express.json()); // Parse incoming JSON requests

// Import routes using ES6 import
import subscribeRoute from "./routes/subscribe.js";
import rewardRoute from "./routes/reward.js";
import recordsRoute from "./routes/records.js";

// Set up route handlers
app.use("/subscribe", subscribeRoute);
app.use("/reward", rewardRoute);
app.use("/records", recordsRoute);

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
