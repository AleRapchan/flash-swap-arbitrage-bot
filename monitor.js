
// Swap Tokens With 0x API
// https://0x.org/docs/guides/swap-tokens-with-0x-api

const fetch = require("node-fetch"); // npm install node-fetch
const qs = require("qs");// npm install qs


function tableHeader(){
    //console.log("|  DEX Source  |  Token Pair |     DEX Price    |  Estimated Gas |  Gas Price |");
    //writeRow("DEX Source");
    console.log('\n-----------------------------------------------------------------------------------------------------------------------------------');
    writeRow("Buy Token",10);
    writeRow("Sell Token",10);
    writeRow("UniswapV2", 30);
    writeRow("SushiSwap", 30);
    writeRow("Difference");
    writeRow("Estimated Gas");
    writeRow("Gas Price");
    console.log('\n-----------------------------------------------------------------------------------------------------------------------------------');
}

async function writeRow(value, size = 15){
    let fill = 0;
    process.stdout.write("|");
    process.stdout.write(value);
    fill = size - value.length;
    for (var i = 0; i < fill; i++) {
        process.stdout.write(" ");
    }
    //process.stdout.write("|");
}

async function start(_buyToken,_sellToken, _DEX1, _DEX2) {


    const params1 = {
        buyToken: _buyToken,    //WETH
        sellToken: _sellToken,  //DAI
        buyAmount: '1000000000000000000000',
        includedSources: _DEX1, // 'Uniswap',
    }
    const response1 = await fetch(`https://api.0x.org/swap/v1/quote?${qs.stringify(params1)}`);
    //console.log(await response.json());
    //console.log(< in JSON at position 0);

    var DEX1 = await response1.json();


    const params2 = {
        buyToken: _buyToken,    //WETH
        sellToken: _sellToken,  //DAI
        buyAmount: '1000000000000000000000',
        includedSources: _DEX2, // 'Uniswap',
    }
    const response2 = await fetch(`https://api.0x.org/swap/v1/quote?${qs.stringify(params2)}`);
    //console.log(await response.json());

    var DEX2 = await response2.json();



    // writeRow(params1.includedSources, 20);
    writeRow(params1.buyToken, 10);
    writeRow(params1.sellToken, 10 );
    if (((typeof DEX1["price"]) === 'undefined') || ((typeof DEX2["price"]) === 'undefined')) {
        writeRow('N/A', 30);
        writeRow('N/A', 30);
        writeRow('N/A');
        writeRow('N/A');
        writeRow('N/A');

    }else{
        writeRow(DEX1["price"].toString(), 30);
        writeRow(DEX2["price"].toString(), 30);
        
        let price1 = parseFloat(DEX1["price"].toString()).toFixed(8);
        let price2 = parseFloat(DEX2["price"].toString()).toFixed(8);
        // Calculate difference in prices
        let rawDiff = (price2 - price1).toFixed(8);

        // let rawDiff = price1 - price2; //- parseFloat(DEX2["price"].toString());
        writeRow(rawDiff);

        // https://0x.org/api
        // Send to ethereum with your favorite Web3 Library
        // window.web3.eth.sendTransaction(quote, (err, txId) => {
        //     console.log('Success!', txId);
        // });

        // https://codepen.io/kimpers/pen/zYqMdxE


        writeRow(DEX1["estimatedGas"].toString());
        writeRow(DEX1["gasPrice"].toString());
    }
    console.log(""); //\n
}

async function monitor(){
    tableHeader();
    //start("WETH", "DAI", "0x");
    //start("WETH", "DAI", "Uniswap");
    start("WETH", "DAI", "UniswapV2");
    //start("WETH", "DAI", "Kyber");
    //start("WETH", "DAI", "Bancor");

    start("REP", "DAI", "UniswapV2", "SushiSwap");
    start("ZRX", "DAI", "UniswapV2", "SushiSwap");
    start("USDC", "DAI", "UniswapV2", "SushiSwap");
    start("BAT", "DAI", "UniswapV2", "SushiSwap");
    start("MKR", "DAI", "UniswapV2", "SushiSwap");
    start("WBTC", "DAI", "UniswapV2", "SushiSwap");
    start("SNX", "DAI", "UniswapV2", "SushiSwap");
    start("SUSD", "DAI", "UniswapV2", "SushiSwap");
    start("KNC", "DAI", "UniswapV2", "SushiSwap");

    // start("WETH", "DAI", "SushiSwap");
    // start("REP", "DAI", "SushiSwap");
    // start("ZRX", "DAI", "SushiSwap");
    // start("USDC", "DAI", "SushiSwap");
    // start("BAT", "DAI", "SushiSwap");
    // start("MKR", "DAI", "SushiSwap");
    // start("WBTC", "DAI", "SushiSwap");
    // start("SNX", "DAI", "SushiSwap");
    // start("SUSD", "DAI", "SushiSwap");
    // start("KNC", "DAI", "SushiSwap");

    
}

// Infinite loop
setInterval(monitor, 7000);