export default class Parser {
  #keycount;
  #properties;
  constructor() {
    this.#keycount = 0;
    this.#properties = [];
  }

  #parseToJson(obj = {}, initialKey = "") {
    for (const key in obj) {
      const newinitialKey = initialKey ? `${initialKey}-${key}` : key;
      if (typeof obj[key] === "object") {
        this.#parseToJson(obj[key], newinitialKey);
      } else {
        this.#properties.push({ key: newinitialKey, value: obj[key] });

        if (this.#properties.length === this.#keycount) {
          this.#setProperties();
        }
      }
    }
  }

  #countKeys(obj) {
    let count = 0;

    parseForCount(obj);
    function parseForCount(obj, initialKey = "") {
      for (const key in obj) {
        const newinitialKey = initialKey ? `${initialKey}-${key}` : key;
        if (typeof obj[key] === "object") {
          parseForCount(obj[key], newinitialKey);
        } else {
          count++;
        }
      }
    }

    return count;
  }

  #setProperties = () => {
    let content = this.#properties.map((property) => {
      return `--${property.key}:${property.value};`;
    });

    let style = document.querySelector("style");
    if (!style) {
      style = document.createElement("style");
      document.head.appendChild(style);
    }

    style.innerHTML = `:root {${content.join("")}}`;
  };

  #resetValues = () => {
    this.#keycount = 0;
    this.#properties = [];
  };

  attacheToJson(jsonFile) {
    this.#keycount = this.#countKeys(jsonFile);
    this.#parseToJson(jsonFile);
    this.#resetValues();
  }
}
