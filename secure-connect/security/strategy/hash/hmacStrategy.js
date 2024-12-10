import TextUtils from "../../../util/textUtils.js";
import HMACKeyGenerator from "../../generator/hash/hmacKeyGenerator.js";
import HashStrategy from "./hashStrategy.js";

export default class HMACStrategy extends HashStrategy {
  constructor() {
    super();

    if (HMACStrategy.instance) {
      return HMACStrategy.instance;
    }

    this.textUtils = new TextUtils();
    this.keyGenerator = new HMACKeyGenerator();

    HMACStrategy.instance = this;
  }

  async init() {
    this.key = await this.keyGenerator.generateKey();
  }

  async sign(data) {
    if (this.key == null) {
      return null;
    }

    const encodedData = this.textUtils.encode(data);
    const signature = await crypto.subtle.sign(
      { name: "HMAC" },
      this.key,
      encodedData
    );

    let signatureByteArray = new Uint8Array(signature);
    return signatureByteArray;
  }

  async verify(data, hash) {
    if (this.key == null) {
      return null;
    }

    const encodedData = this.textUtils.encode(data);
    const isValid = await crypto.subtle.verify(
      { name: "HMAC" },
      this.key,
      hash,
      encodedData
    );

    return isValid;
  }
}
