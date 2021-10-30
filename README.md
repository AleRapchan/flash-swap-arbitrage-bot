********************************************************************
Note: This repo is not under maintenning. 
This repo is written only for POC. The bot is implemented simply for demostration.
If you want access a commercial version of the Arbitrage BOT, please send me an email. Thanks!
********************************************************************



![Logo](https://alexandrebarros.com/global/flash-alfred/FlashAlfred-Git-Hero.png?alt=flash-alfred-intro)

# Full Documentation
Diagrams and Use Cases can be found in this folder https://github.com/AleRapchan/flash-swap-arbitrage-bot/tree/main/documentation but please access the full documentation for this project, including the video presentation, following this link: [Full Documentation](https://rapchan.gitbook.io/flash-bot/) 👈

# Disclaimer
This presentation is not either an investment advice or a recommendation or solicitation to buy or sell any investment and should not be used in the evaluation of the merits of making any investment decision. It should not be relied upon for accounting, legal or tax advice or investment recommendations. The contents reflected herein are subject to change without being updated. The codes are written for informational and educational purpose only.

USE THE SOFTWARE AT YOUR OWN RISK. YOU ARE RESPONSIBLE FOR YOUR OWN MONEY. PAST PERFORMANCE IS NOT NECESSARILY INDICATIVE OF FUTURE RESULTS.
THE AUTHORS AND ALL AFFILIATES ASSUME NO RESPONSIBILITY FOR YOUR TRADING RESULTS.

# Flash Swap Arbitrage Bot
Smart Contract BOT code, running on Ethereum Blockchain, watching for and executing profitable arbitrage opportunities using flash loans and flash swaps. 

Flash loans are an innovative financial product made possible by the atomic nature of transactions on the Ethereum blockchain. They allow users to borrow large amounts of cryptocurrency from liquidity pools without collateral if the loan is repaid in the same transaction. They are like leverage trades and margin accounts in traditional finance, but without the need to be approved and provide collateral.  
 
Decentralized Exchanges (DEXes) like Uniswap and Sushiswap are cryptocurrency exchanges that use smart contracts to enforce the trading rules, execute trades, and securely handle funds when necessary. They allow us to exchange different cryptocurrencies and stable coins quickly. They may be used as part of flash loan strategies to acquire the needed assets.

Arbitrage is arguably the primary use case for flash loans, which means buying cryptocurrency (or an asset) for a price and selling it for a higher price on a different exchange.

The main challenge with arbitrage is that by the time you sell an asset, its price might have changed, but you don’t have that problem with flash loans. Additionally, you don’t have to have the crypto asset; you can borrow it. Therefore, the earning coming from the price difference (spread) will be proportional to the amount traded.

# Organization Background
Flash Alfred is a B-Corp solution, a company with experience in Bot's development for centralized crypto exchanges that now focuses on utilizing all its knowledge in the DeFi world, offering an arbitrage system capable of providing continuous profit without risk for investors.

# Outline of Problem
Investors want to :
- Monetize their savings with high gains 
- Minimal or no risk at all. 
- No intermediaries
Bank's system can’t offer that, and other traditional methods have too many intermediaries and take too long to make ROI even satisfying. 

# The Solution
The new generation of automated BOT for Crypto Investments
A combination of the latest computer languages, blockchain technology, Defi concepts, DEX Exchanges protocol, and brand-new concepts like flash loans and flash swap work together and automatize complex processes to deliver a secure, fast and profitable mechanism.

# How it works
Alfred monitors DEXs for opportunities, and when he finds it, he borrows capital to conclude the arbitrage transaction.

## Decentralized Exchanges
The most popular DEX architectures use the concept of liquidity pools rather than orderbooks and are called Automated Market Makers.

Other DEXes, in particular those using the 0x protocol use a classic orderbook and rely on makers and takers for determining an asset’s price;

## Flash Loan
Flash Alfred can take advantage of flash loans in order to do arbitrage trading using only borrowed funds!

Not only you are not at risk of losing all of your capital if prices are very volatile, but also because as mentioned before, the money isn’t even yours; 

“Flash Loans are special uncollateralised loans that allow the borrowing of an asset, as long as the borrowed amount (and a fee) is returned before the end of the transaction. There is no real-world analogy to Flash Loans”.

## Arbitrage on DeFi
Arbitrage is the purchase and sale of an asset in order to profit from a difference in the asset’s price between marketplaces. 

There is no risk of losing money should a sequence of trades not execute as expected; the transactions will be reverted due to lack of funds, because the smart contract isn’t able to repay a flash loan or before others do.

It does not require any kind of prediction algorithm or stop-loss strategy, but rather it deals with finding profitable opportunities in the present moment before they disappear .

# What makes Flash Alfred Special
![Logo](https://alexandrebarros.com/global/flash-alfred/flash-alfred-benefits-new-02.png?alt=flash-alfred-benefits)

# Features
- Smart contract written in solidity code published in the Ethereum blockchain main network;
- Connected with UniSwap and SushiSwap, two of the principal decentralized exchanges in DeFi;
- API connected with AAVE loan network;

## Screen Shot
![Logo](http://alexandrebarros.com/global/flash-alfred/Screen1.png)
![Logo](http://alexandrebarros.com/global/flash-alfred/Screen2.png)


# How to get started
An investor can deposit their capital into the system and then let Flash BOT do all the work. FlashBot will restlessly watch the best opportunities in the crypto market/space 24/7 running precisely in every millisecond to bring profit.


# About the Project

## Author

Name  | Git Hub | LinkedIn | Twitter
------------- | ------------- | ------------- | -------------
Alexandre Rapchan B. Barros  | [@AleRapchan](https://www.github.com/AleRapchan) | [Alexandre-rapchan](https://www.linkedin.com/in/alexandre-rapchan/) | [@rapchan](https://www.twitter.com/rapchan/) 

## Support

For support, please send an email to blockchain@alexandrebarros.com.
	
## Revisions
Date  |  Revision  |  Description  |  Author
--------  |  --------  |  --------  |  --------	
05/08/2021  |  `0.1`  |  First Draft  |  Alexandre Rapchan B. Barros
20/08/2021  |  `0.2`  |  Final Review  |  Alexandre Rapchan B. Barros

## Links
- [Developing on flash loans](https://docs.aave.com/developers/tutorials/performing-a-flash-loan/)
- [Truffle Mint DAI](https://github.com/ryanio/truffle-mint-dai/blob/master/test/dai.js)
- [Swap Tokens With 0x API](https://0x.org/docs/guides/swap-tokens-with-0x-api)

## MIT License

Copyright (c) 2021 Rapchan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
