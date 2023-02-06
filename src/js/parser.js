export default class Parser {
  #parseToJson(obj = {}, initialKey = "") {
    for (const key in obj) {
      const newinitialKey = initialKey ? `${initialKey}-${key}` : key;
      if (typeof obj[key] === "object") {
        this.#parseToJson(obj[key], newinitialKey);
      } else {
        this.#setProperty(newinitialKey, obj[key]);
      }
    }
  }

  #setProperty = (key, value) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  };

  attacheToJson(jsonFile) {
    this.#parseToJson(jsonFile);
  }
}
