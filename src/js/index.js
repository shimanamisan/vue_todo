import "particles.js/particles";
const particlesJS = window.particlesJS;
particlesJS.load("particles-js", "../particles.json", function () {
  console.log("callback - particles.js config loaded");
});

import Vue from "vue";
import App from "@/App.vue";


import "../scss/style.scss";
import "../img/todo_background.jpg";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
