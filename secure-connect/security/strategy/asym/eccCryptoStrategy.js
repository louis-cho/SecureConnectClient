import AsymCryptoStrategy from "./asymCryptoStrategy.js";
import TextUtils from "../../../util/textUtils.js";

export default class ECCCryptoStrategy extends AsymCryptoStrategy {
  constructor() {
    super();

    if (ECCCryptoStrategy.instance) {
      return ECCCryptoStrategy.instance;
    }

    ECCCryptoStrategy.instance = this;
  }

  async init() {
    this.option = { namedCurve: "P-256" }; // ECC에서 사용될 타원 곡선
    const keyPair = await crypto.subtle.generateKey(
      {
        name: "ECDSA",
        namedCurve: this.option.namedCurve,
      },
      true, // 키를 내보낼 수 있도록 설정
      ["sign", "verify"]
    );

    this.privateKey = keyPair.privateKey;
    this.publicKey = keyPair.publicKey;
    this.textUtils = new TextUtils();
  }

  async encrypt(data) {
    throw new Error(
      "ECC does not natively support encryption; consider ECDH or use RSA for encryption."
    );
  }

  async sign(data) {
    if (!this.privateKey) {
      return null;
    }

    const encodedData = this.textUtils.encode(data);
    const signature = await crypto.subtle.sign(
      {
        name: "ECDSA",
        hash: { name: "SHA-256" },
      },
      this.privateKey,
      encodedData
    );

    return signature;
  }

  async verify(data, signature) {
    if (!this.publicKey) {
      return null;
    }

    const encodedData = this.textUtils.encode(data);
    const isValid = await crypto.subtle.verify(
      {
        name: "ECDSA",
        hash: { name: "SHA-256" },
      },
      this.publicKey,
      signature,
      encodedData
    );

    return isValid;
  }
}
