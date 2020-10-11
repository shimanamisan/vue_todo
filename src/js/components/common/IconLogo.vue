<template>
  <a :href="this.todoLink" target="_blank" rel=”noopener><img class="p-logo" :src="this.iconPath" alt="TODOリストのロゴ" /></a>
</template>

<script>
export default {
  props: ["iconPath", 'todoLink'],
};
</script>

<style></style>
