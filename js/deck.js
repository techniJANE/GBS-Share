import Reveal from "/node_modules/reveal.js/dist/reveal.esm.js";
import Markdown from "/node_modules/reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "/node_modules/reveal.js/plugin/highlight/highlight.esm.js";

new Reveal({
  hash: true,
  width: "100%",
  height: "100%",
  margin: 0,
  plugins: [Highlight, Markdown],
}).initialize();

document.addEventListener("DOMContentLoaded", function () {
  tsParticles.load("cover", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
      },
      shape: {
        type: "image",
        stroke: {
          width: 0,
          color: "#fff",
        },
        image: [
          {
            src:
              "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/poultry-leg_1f357.png",
            width: 100,
            height: 100,
          },
          {
            src:
              "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/hot-beverage_2615.png",
            width: 100,
            height: 100,
          },
          {
            src:
              "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/hamburger_1f354.png",
            width: 100,
            height: 100,
          },
        ],
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 20,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 10,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 350,
        color: "#B32825",
        opacity: 0.4,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
