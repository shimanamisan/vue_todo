<template>
  <div>
    <button class="c-btn" @click="modalOpen">他のアプリを見る</button>
    <Modal v-show="open" @modal-close="modalClose"/>
  </div>
</template>

<script>
import Modal from "@/components/common/Modal";
export default {
  data() {
    return {
      open: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    modalOpen() {
      this.open = !this.open
    },
    modalClose() {
      this.open = !this.open
    },
  },
};
</script>

<style></style>
