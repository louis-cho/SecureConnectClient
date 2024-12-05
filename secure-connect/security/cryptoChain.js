export default class CryptoChain {
  constructor() {
    if (CryptoChain.instance) {
      return CryptoChain.instance;
    }

    this.hashStrategy = null;
    this.cryptoStrategy = [];
  }

  addHashStrategy(strategy) {
    this.hashStrategy = strategy;
  }

  addCryptoStrategy(strategy) {
    this.cryptoStrategy.push(strategy);
  }

  removeHashStrategy() {
    this.hashStrategy = null;
  }

  removeCryptoStrategy(strategy) {
    this.cryptoStrategy = this.cryptoStrategy.filter(
      (element) => element !== strategy
    );
  }

  async encrypt(data) {
    let result = data;

    for (const strategy of this.cryptoStrategy) {
      result = await strategy.encrypt(result);
    }

    return result;
  }

  async decrypt(data) {
    let result = data;

    for (const strategy of this.cryptoStrategy.reverse()) {
      result = await strategy.decrypt(result);
    }

    return result;
  }

  verify(data, hash) {
    if (this.hashStrategy == null) {
      return true;
    }

    return this.hashStrategy.verify(data, hash);
  }
}
