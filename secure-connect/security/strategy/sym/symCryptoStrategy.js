import CryptoStrategy from "../cryptoStrategy.js";

export default class SymCryptoStrategy extends CryptoStrategy {
  async getKey() {
    throw new Error("getKey Method should be Implemented!");
  }
}
