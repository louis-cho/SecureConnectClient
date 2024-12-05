import CryptoStrategy from "../cryptoStrategy.js";

export default class AsymCryptoStrategy extends CryptoStrategy {
  getPrivateKey() {
    throw new Error("getPrivateKey Method should be Implemented!");
  }

  getPublicKey() {
    throw new Error("getPublicKey Method should be Implemented!");
  }
}
