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

  getSymConfig() {
    if (!this.config || !this.config["symmetric"]) {
      throw new Error("Symmetric Config is not Exist");
    }
    return this.config["symmetric"];
  }

  getAsymConfig() {
    if (!this.config || !this.config["asymmetric"]) {
      throw new Error("Asymmetric Config is not Exist");
    }
    return this.config["asymmetric"];
  }

  getHashConfig() {
    if (!this.config || !this.config["hash"]) {
      throw new Error("Hash Config is not Exist");
    }
    return this.config["hash"];
  }
}
