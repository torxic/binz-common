# BinZ Subscription Service

BinZ is an innovative project aimed at incentivizing waste recycling by integrating blockchain-based rewards. This system encourages environmental responsibility by offering tokenized carbon credits to users who actively recycle. The service is built with **Next.js**, **Ethereum smart contracts**, and **IPFS (via Pinata)** for data transparency and decentralized storage.

## Project Inspiration and Goals

### Inspiration
The growing environmental impact of plastic waste and the need for sustainable solutions inspired the development of BinZ. This project leverages Web3 technology to:
- Encourage recycling by providing tangible, blockchain-based incentives.
- Simplify access to carbon credits for individuals and communities.
- Utilize transparent data storage to enhance trust and engagement.

### Goals
- **Reward Recycling Efforts**: Tokenize environmental impact by awarding users carbon credits based on recycling contributions.
- **Increase Carbon Credit Accessibility**: Facilitate access to tokenized carbon credits (e.g., TCO2 tokens) for users, rewarding environmental contributions.
- **Support Carbon Credit Markets**: Provide a decentralized, transparent system for interacting with carbon credits and supporting climate finance initiatives.

## Key Features

1. **Subscription**: Users subscribe to BinZ using the KLIMA token, allowing participation in rewards for verified recycling efforts.
2. **Recycling Rewards**: Users are rewarded with tokenized carbon credits (TCO2) based on the amount of recyclable material they contribute. Each action is tracked transparently on IPFS.
3. **Records and Transparency**: Recycling records are stored on IPFS, accessible for review, creating a transparent and immutable history of recycling contributions.

## Key Milestones

- **Design and Concept**: Formulating the idea to address waste recycling through blockchain.
- **Smart Contract Deployment**: Deploying the `BinZSubscription` contract on the Ethereum-compatible network, allowing for the subscription and rewarding of users.
- **IPFS Integration**: Using Pinata to securely store recycling data on IPFS, ensuring that records are tamper-proof and accessible.
- **Web3 and Next.js Integration**: Developing a responsive and user-friendly interface that connects users’ wallets to interact with BinZ services and view their recycling records.

## Prerequisites

To set up and use this project, you need:
- **Ethereum Wallet** with the necessary permissions.
- **Pinata Account** for IPFS data storage.
- **Environment Variables**:
  - `INFURA_API_URL`: Your Infura endpoint for interacting with the Ethereum network.
  - `PRIVATE_KEY`: Wallet private key for signing transactions.
  - `CONTRACT_ADDRESS`: The deployed contract address for `BinZSubscription`.
  - `PINATA_API_KEY` and `PINATA_API_SECRET`: Pinata credentials for IPFS integration.
  - `KLIMA_TOKEN_ADDRESS` and `TOUCAN_TOKEN_ADDRESS`: Addresses for KLIMA and TCO2 tokens, respectively.

## Setting Up and Running the Project

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd BinZ
```
