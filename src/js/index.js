import Parser from "./parser.js";
import Palette1 from "../json/palette-1.json";
import Palette2 from "../json/palette-2.json";
import Palette3 from "../json/palette-3.json";
import Palette4 from "../json/palette-4.json";

const palette = document.querySelector("#color-palette");

const parser = new Parser();
parser.attacheToJson(Palette1);

const palettes = {
  Palette1: Palette1,
  Palette2: Palette2,
  Palette3: Palette3,
  Palette4: Palette4,
};

palette.onchange = function () {
  parser.attacheToJson(palettes[palette.value]);
};
