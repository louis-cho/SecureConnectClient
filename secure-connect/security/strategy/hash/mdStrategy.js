import TextUtils from "../../../util/textUtils.js";
import HashStrategy from "./hashStrategy.js";

/**
 * crypto doesn't support MD5
 * use external library to use it.
 */
export default class MDStrategy extends HashStrategy {
  constructor() {
    super();

    if (MDStrategy.instance) {
      return MDStrategy.instance;
    }

    this.textUtils = new TextUtils();
    this.algorithm = "MD5"; // MD5 사용
    MDStrategy.instance = this;
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
