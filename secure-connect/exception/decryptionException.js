import CryptoException from "./cryptoException";

export default class DecryptionException extends CryptoException {
  constructor(message, cause) {
    super(message, cause);
  }

  hanlde(logger) {
    logger.error(`Decryption exception: ${this.message}`);
  }
}
