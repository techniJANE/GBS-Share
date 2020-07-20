import Reveal from "/node_modules/reveal.js/dist/reveal.esm.js";
import Markdown from "/node_modules/reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "/node_modules/reveal.js/plugin/highlight/highlight.esm.js";
import particles from "./particles.js";

new Reveal({
  hash: true,
  width: "100%",
  height: "100%",
  margin: 0,
  transition: "zoom",
  loop: true,
  plugins: [Highlight, Markdown],
}).initialize();

document.addEventListener("DOMContentLoaded", particles);
