<template>
  <div>
    <li class="p-task__item" :class="{'p-task__item--isDone': taskItem.isDone}">
      <i
        class="c-form__check"
        :class="{ 'far fa-circle': !taskItem.isDone, 'fas fa-check-circle': taskItem.isDone }"
        @click="changeIsDone(taskItem.id)"
      ></i>

      <span :class="{'p-task__item--isDoneText': taskItem.isDone}">{{ taskItem.value }}</span>
      <i class="fas fa-trash-alt p-task__trash" @click="removeItem(taskItem.id)"></i
      ><!-- 引数に削除する要素のIDを指定 -->
    </li>
  </div>
</template>

<script>
export default {
  props: ["taskItem"],
  data() {
    return {
      data: this.taskItem,
    };
  },
  computed:{
    classObject(){
      return{
        red: taskItem.isDone
      }
    }
  },
  methods: {
    changeIsDone(id) {
      console.log("isDoneの変更 【孫コンポーネント】：" + id);
      this.$emit("isdone-event", id);
    },
    removeItem(id) {
      console.log("タスクの削除 【孫コンポーネント】：" + id);
      this.$emit("remove-event", id);
    },
  },
};
</script>

<style></style>
