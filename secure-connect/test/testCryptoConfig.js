import CryptoConfig from "../config/cryptoConfig";

async () => {
  let cryptoConfig = new CryptoConfig("../crypto_config.json");
  await cryptoConfig.loadConfig();

  console.log(cryptoConfig.config);
};
