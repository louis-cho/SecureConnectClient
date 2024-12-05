export default class HMACKeyGenerator {
  constructor() {
    this.init();
  }

  init() {}

  async generateKey() {
    const randomKey = crypto.getRandomValues(new Uint8Array(32));
    let key = await crypto.subtle.importKey(
      "raw",
      randomKey,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign", "verify"]
    );

    return key;
  }
}
