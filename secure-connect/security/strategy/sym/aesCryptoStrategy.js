import TextUtils from "../../../util/textUtils.js";
import CryptoStrategy from "../cryptoStrategy.js";

export default class AESCryptoStrategy extends CryptoStrategy {
  constructor() {
    super();

    if (AESCryptoStrategy.instance) {
      return AESCryptoStrategy.instance;
    }

    this.key = null;
    this.keySize = 128;
    this.textUtils = new TextUtils();

    AESCryptoStrategy.instance = this;
  }

  async init() {
    await this.generateKey();
  }

  async generateKey() {
    const key = await crypto.subtle.generateKey(
      {
        name: "AES-GCM",
        length: this.keySize,
      },
      true, // exportable flag
      ["encrypt", "decrypt"]
    );

    this.key = key;
  }

  async encrypt(data) {
    if (!this.key) {
      return null;
    }

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      this.key,
      data
    );

    return { encrypted, iv };
  }

  async decrypt(data) {
    if (!this.key) {
      return null;
    }

    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: data.iv },
      this.key,
      data.encrypted
    );

    return decrypted;
  }
}
