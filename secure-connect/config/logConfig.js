export default class LogConfig {
  constructor() {
    this.consoleLogging = false;
  }

  init() {
    // load from log setting file
  }

  generateLogFileName() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}.log`;
  }

  setConsoleLogging(flag) {
    this.consoleLogging = flag;
  }
}
