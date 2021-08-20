// https://github.com/ryanio/truffle-mint-dai/blob/master/test/dai.js

const { expect } = require('chai');
const { BN, ether, balance } = require('@openzeppelin/test-helpers');
const daiABI = require('./abi/dai');
const ForceSend = artifacts.require('ForceSend');

// USER_ADDRESS and DAI_ADDRESS must be
// unlocked in ganache-cli using --unlock
const { USER_ADDRESS } = process.env;
const DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f';
const daiContract = new web3.eth.Contract(daiABI, DAI_ADDRESS);

contract('Truffle Mint DAI', async (accounts) => {
  it('should send ether to the user address', async () => {
    // Send 1 eth to USER_ADDRESS to have gas to send ERC20 txs.
    // Uses ForceSend contract, otherwise sending a normal tx to
    // a contract address that doesn't have a default payable function may revert.
    const forceSend = await ForceSend.new();
    await forceSend.go(USER_ADDRESS, { value: ether('1') });
    const ethBalance = await balance.current(USER_ADDRESS);
    expect(new BN(ethBalance)).to.be.bignumber.least(new BN(ether('1')));
  });

  it('should send DAI to first generated account', async () => {
    // Verify dai balance
    const daiBalance = await daiContract.methods.balanceOf(USER_ADDRESS).call();
    expect(new BN(daiBalance)).to.be.bignumber.least(ether('1'));

    // Send 1 DAI to the first account
    for (const account of accounts.slice(0, 1)) {
      // DAI_ADDRESS and USER_ADDRESS are passed to
      // ganache-cli with flag `--unlock`
      // so we can use the `transfer` method
      await daiContract.methods
        .transfer(account, ether('1').toString())
        .send({ from: USER_ADDRESS, gasLimit: 800000 });
      const daiBalance = await daiContract.methods.balanceOf(account).call();
      expect(new BN(daiBalance)).to.be.bignumber.least(ether('1'));
    }
  });
});