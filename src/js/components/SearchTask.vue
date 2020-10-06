<template>
  <div>
    <input class="c-form c-form__search" type="text" placeholder="リストを検索" @keyup="searchValue" v-model="searchValueData" />
    <i class="fas fa-search c-form__search__icon"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValueData: null,
    };
  },
  methods: {
    searchValue() {
      // console.log("Searchコンポーネント：" + event.target.value)
      this.$emit("search-event", this.searchValueData);
    },
  },
};
</script>

<style></style>
