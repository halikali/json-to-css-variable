import Parser from "./parser.js";

const switchButton = document.getElementById("switch");
const parser = new Parser();

let colorScheme = "light";
parser.attacheToJson("json/light.json");

switchButton.addEventListener("click", () => {
  colorScheme === "light" ? (colorScheme = "dark") : (colorScheme = "light");
  parser.attacheToJson("json/" + colorScheme + ".json");
  console.log(parser);
});
