export default class CryptoException extends Error {
  constructor(message, cause) {
    super(message);
    this.name = this.constructor.name;
    this.cause = cause || null;
    this.type = "CryptoException";
  }

  handle(logger) {
    throw new Error("handle method must be implemented by subclasses");
  }
}
