import TextUtils from "../../../util/textUtils.js";
import HashStrategy from "./hashStrategy.js";

export default class SHAStrategy extends HashStrategy {
  constructor() {
    super();

    if (SHAStrategy.instance) {
      return SHAStrategy.instance;
    }

    this.textUtils = new TextUtils();
    this.algorithm = "SHA-256"; // 기본적으로 SHA-256 사용
    SHAStrategy.instance = this;
  }

  async hash(data) {
    if (!data) {
      return null;
    }

    const encodedData = this.textUtils.encode(data);
    const hashBuffer = await crypto.subtle.digest(this.algorithm, encodedData);

    return new Uint8Array(hashBuffer); // Byte Array로 반환
  }

  async verify(data, hash) {
    const calculatedHash = await this.hash(data);
    return this.arrayBufferEquals(calculatedHash, hash);
  }
}
