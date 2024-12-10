import SymCryptoStrategy from "./symCryptoStrategy";

/**
 * JavaScript crypto doesn't support DES.
 * If you want to use this class, you should implement this class.
 */
export default class DESCryptoStrategy extends SymCryptoStrategy {
  consturctor() {
    super();

    if (DESCryptoStrategy.instance) {
      return DESCryptoStrategy.instance;
    }

    DESCryptoStrategy.instance = this;
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
