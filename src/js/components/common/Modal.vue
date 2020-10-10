<template>
  <div>
    <div class="c-modal">
    <div class="close icon" @click="close"></div>
        <div class="c-modal__body">
          <li>
              Vue.js todo list
          </li>
          <li>
              jQuery todo list
          </li>
          <li>
              React.js todo list
          </li>
        </div>
    </div>
    <div class="c-modal__bg" @click="close"></div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("modal-close");
    },
  },
};
</script>

<style></style>
