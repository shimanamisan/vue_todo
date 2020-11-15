<template>
  <div>
    <div class="c-modal">
      <div class="close icon" @click="close"></div>
      <div class="c-modal__body">
        <li class="c-modal__body__list">
          <IconLogo
            :icon-path="this.vue_path"
            :todo-link="todoLink.vue"
          />
          <div>
            <p>Vue.js todo list</p>
          </div>
        </li>
        <li class="c-modal__body__list">
          <IconLogo
            :icon-path="this.jquery_path"
            :todo-link="todoLink.jquery"
            />
          <div>
            <p>jQuery todo list</p>
          </div>
        </li>
        <li class="c-modal__body__list">
          <IconLogo
            :icon-path="this.react_path"
            :todo-link="todoLink.react"
            />
          <div>
            <p>React.js todo list</p>
          </div>
        </li>
      </div>
    </div>
    <div class="c-modal__bg" @click="close"></div>
  </div>
</template>

<script>
import IconLogo from "./IconLogo";
export default {
  data() {
    return {
      vue_path: "../img/vue_logo.svg",
      jquery_path: "../img/jquery_logo.svg",
      react_path: "../img/react_logo.svg",
      todoLink: {
        vue: "http://todo-app.shimanamisan.com/",
        jquery: "https://jq-task-app.shimanamisan.com/",
        react: "https://react-task-app.shimanamisan.com/",
      },
    };
  },
  components: {
    IconLogo,
  },
  methods: {
    close() {
      this.$emit("modal-close");
    },
  },
};
</script>

<style></style>
