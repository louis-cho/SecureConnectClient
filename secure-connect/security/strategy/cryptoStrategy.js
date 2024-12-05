export default class CryptoStrategy {
  async encrypt(data) {
    throw new Error("Encrypt Method should be Implemented!");
  }

  async decrypt(data) {
    throw new Error("Decrypt Method should be Implemented!");
  }
}
