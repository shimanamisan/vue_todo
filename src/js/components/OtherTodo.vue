<template>
  <div>
    <button class="c-btn" @click="modalOpen">他のアプリを見る</button>

  </div>
</template>

<script>
export default {
  methods: {
    modalOpen() {
      this.$emit('modal-open')
    },
  },
};
</script>

<style>
</style>
