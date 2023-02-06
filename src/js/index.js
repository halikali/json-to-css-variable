import Parser from "./parser.js";
import lightSchema from "../json/light.json";
import darkSchema from "../json/dark.json";

const switchButton = document.getElementById("switch");
const parser = new Parser();

let colorScheme = "light";

parser.attacheToJson(lightSchema);

switchButton.addEventListener("click", () => {
  colorScheme === "light" ? (colorScheme = "dark") : (colorScheme = "light");
  parser.attacheToJson(colorScheme === "light" ? lightSchema : darkSchema);
});
