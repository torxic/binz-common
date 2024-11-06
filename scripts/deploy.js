require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
    const klimaTokenAddress = process.env.KLIMA_TOKEN_ADDRESS;
    const toucanAddress = process.env.TOUCAN_ADDRESS;

    // Make sure addresses are provided
    if (!klimaTokenAddress || !toucanAddress) {
        throw new Error("KLIMA and TOUCAN addresses must be in .env file");
    }

    const BinZSubscription = await ethers.getContractFactory("BinZSubscription");
    const binZSubscription = await BinZSubscription.deploy(klimaTokenAddress, toucanAddress);

    await binZSubscription.deployed();
    console.log("BinZSubscription contract deployed at:", binZSubscription.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
