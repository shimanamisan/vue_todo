<template>
  <button class="c-btn" @click="deleteTask">完了タスクを消去</button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    deleteTask(){
      this.$emit('delete-event')
    }
  },
};
</script>

<style></style>
