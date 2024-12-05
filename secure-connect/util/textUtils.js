export default class TextUtils {
  constructor() {
    if (TextUtils.instance) {
      return TextUtils.instance;
    }

    this.encoder = new TextEncoder();
    this.decoder = new TextDecoder();
    TextUtils.instance = this;
  }

  /**
   * encode text to byte array
   * @param {*} text
   * @returns
   */
  encode(text) {
    return this.encoder.encode(text);
  }

  /**
   * decode byte array to text
   * @param {*} uint8Array
   * @returns
   */
  decode(uint8Array) {
    return this.decoder.decode(uint8Array);
  }
}
