<template>
  <div>
    <input
      class="c-form c-form__create"
      :class="{'c-valid__error': this.validation}"
      type="text"
      placeholder="Enterキーで新しいタスクを追加"
      @keypress.enter="createTask"
      v-model="createValueData"
    />
    <template v-if="validation">
      <div class="c-valid__wrapp">
        <p class="c-valid">入力必須です</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createValueData: null,
      validation: false,
    };
  },
  methods: {
    createTask() {
      // イベントよりinputタグ内の文字を取得して親コンポーネントに渡す
      if (this.createValueData === null) {
        this.validation = true;
        return false;
      }
      this.validation = false;
      this.$emit("create-event", this.createValueData);
      // フォーム内を空にする
      this.createValueData = null;

      // こちらの記述でも同じ結果
      // this.$emit("create-event", event.target.value);
      // フォーム内を空にする
      // event.target.value = null
    },
  },
};
</script>

<style></style>
