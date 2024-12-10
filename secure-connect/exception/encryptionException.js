export default class EncryptionException extends CryptoException {
  constructor(message, cause) {
    super(message, cause);
  }

  handle(logger) {
    logger.error(`Encryption exception: ${this.message}`);
  }
}
