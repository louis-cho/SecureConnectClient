import RSAKeyGenerator from "../../generator/asym/rsaKeyGenerator.js";
import TextUtils from "../../../util/textUtils.js";
import AsymCryptoStrategy from "./asymCryptoStrategy.js";

export default class RSACryptoStrategy extends AsymCryptoStrategy {
  constructor() {
    super();

    if (RSACryptoStrategy.instance) {
      return RSACryptoStrategy.instance;
    }

    RSACryptoStrategy.instance = this;
  }

  async init() {
    this.option = {};
    this.keyGenerator = new RSAKeyGenerator();
    this.keyGenerator.init();
    let keyPair = await this.keyGenerator.generateRSAKey();
    this.publicKey = keyPair.publicKey;
    this.privateKey = keyPair.privateKey;
    this.textUtils = new TextUtils();
  }

  async encrypt(data) {
    if (!this.publicKey) {
      return null;
    }
    const encodedData = this.textUtils.encode(data);
    const encryptedData = await crypto.subtle.encrypt(
      {
        name: "RSA-OAEP",
      },
      this.publicKey,
      encodedData
    );
    return encryptedData;
  }

  async decrypt(encrypted) {
    if (!this.privateKey) {
      return null;
    }
    const decryptedData = await crypto.subtle.decrypt(
      { name: "RSA-OAEP" },
      this.privateKey,
      encrypted
    );
    return decryptedData;
  }
}
