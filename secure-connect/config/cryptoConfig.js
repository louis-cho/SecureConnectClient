export default class CryptoConfig {
  constructor(configFile) {
    this.configFile = configFile;
    this.config = null;
  }

  async loadConfig() {
    try {
      const response = await fetch(this.configFile);
      this.config = await response.json();
    } catch (error) {
      console.error("Config File did not Loaded: ", error);
    }
  }

  getAESConfig() {
    if (!this.config || !this.config.aes) {
      throw new Error("AES Config is not Exist");
    }
    return this.config.aes;
  }

  getRSAConfig() {
    if (!this.config || !this.config.rsa) {
      throw new Error("RSA Config is not Exist");
    }
    return this.config.rsa;
  }

  getHMACConfig() {
    if (!this.config || !this.config.hmac) {
      throw new Error("HMAC Config is not Exist");
    }
    return this.config.hmac;
  }
}
