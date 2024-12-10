import SymCryptoStrategy from "./symCryptoStrategy";

/**
 * JavaScript crypto doesn't support 3DES.
 * If you want to use this class, you should implement this class.
 */
export default class DES3CryptoStrategy extends SymCryptoStrategy {
  constructor() {
    super();

    if (DES3CryptoStrategy.instance) {
      return DES3CryptoStrategy.instance;
    }

    DES3CryptoStrategy.instance = this;
  }

  async getKey() {
    return null;
  }

  async encrypt(data) {
    return null;
  }

  async decrypt(data) {
    return null;
  }
}
