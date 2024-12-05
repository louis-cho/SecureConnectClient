import CryptoStrategy from "../hashStrategy.js";
import TextUtils from "../../../util/textUtils.js";
import HMACKeyGenerator from "../../generator/hash/hmacKeyGenerator.js";

export default class HMACCryptoStrategy extends CryptoStrategy {
  constructor() {
    super();

    if (HMACCryptoStrategy.instance) {
      return HMACCryptoStrategy.instance;
    }

    this.textUtils = new TextUtils();
    this.keyGenerator = new HMACKeyGenerator();

    HMACCryptoStrategy.instance = this;
  }

  async init() {
    this.key = await this.keyGenerator.generateKey();
    this.signature = null;
  }

  async encrypt(data) {
    if (this.key == null) {
      return null;
    }

    const encodedData = this.textUtils.encodedData;
    const signature = await crypto.subtle.sign(
      { name: "HMAC" },
      this.cryptoKey,
      encodedData
    );

    this.signature = new Uint8Array(signature);
    return this.signature;
  }

  async decrypt(data) {
    if (this.key == null) {
      return null;
    }

    const encodedData = this.textUtils.encodedData(data);
    const isValid = await crypto.subtle.verify(
      { name: "HMAC" },
      this.cryptoKey,
      this.signature,
      encodedData
    );

    return isValid;
  }
}
