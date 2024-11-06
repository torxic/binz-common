// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface Toucan {
    function mintTCO2(address to, uint256 amount) external;
}

contract BinZSubscription {
    IERC20 public klimaToken;
    Toucan public toucan;
    address public admin;
    mapping(address => uint256) public subscriptions;
    mapping(address => string[]) public recyclingRecords;

    constructor(address _klimaToken, address _toucan) {
        klimaToken = IERC20(_klimaToken);
        toucan = Toucan(_toucan);
        admin = msg.sender;
    }

    function subscribe() external {
        require(klimaToken.transferFrom(msg.sender, address(this), 1 * 10**18), "Subscription payment failed");
        subscriptions[msg.sender] += 1;
    }

    function rewardForRecycling(address user, uint256 amountPlastic, string memory ipfsHash) external {
        require(msg.sender == admin, "Only admin can reward");
        require(amountPlastic >= 10, "Not enough plastic for reward");
        
        // Mint TCO2 reward
        toucan.mintTCO2(user, 1 * 10**18);

        // Store IPFS hash for record
        recyclingRecords[user].push(ipfsHash);
    }

    function getRecyclingRecords(address user) external view returns (string[] memory) {
        return recyclingRecords[user];
    }
}
