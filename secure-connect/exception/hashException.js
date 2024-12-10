export default class HashException extends CryptoException {
  consturctor(message, cause) {
    super(message, cause);
  }

  handle(logger) {
    logger.error(`Hash exception: ${this.message}`);
  }
}
