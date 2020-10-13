<template>
  <div>
    
      <li class="p-task__item" :class="{ 'p-task__item--isDone': taskItem.isDone }">
        <i
          class="c-form__check"
          :class="{ 'far fa-circle': !taskItem.isDone, 'fas fa-check-circle': taskItem.isDone }"
          @click="changeIsDone(taskItem.id)"
        ></i>
        <template v-if="this.taskItem.edit">
          <input
            class="c-form c-form__edit"
            type="text"
            v-model="taskItem.value"
            @keypress.enter="coloseEdit(taskItem)"
            @blur="coloseEdit(taskItem)"
          />
        </template>
        <template v-else>
          <div class="p-task__item__wrapp" @dblclick="taskEdit(taskItem.id)">
            <span class="p-task__item__text" :class="{ 'p-task__item--isDoneText': taskItem.isDone }">{{ taskItem.value }}</span>
          </div>
        </template>
        <span class="u-handle"></span>
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
      editValue: "",
    };
  },
  computed: {
    classObject() {
      return {
        red: taskItem.isDone,
      };
    },
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
    taskEdit(id) {
      console.log("タスクの編集 【孫コンポーネント】：" + id);
      this.$emit("edit-event", id);
    },
    coloseEdit(todo) {
      // console.log("タスクの解除 【孫コンポーネント】：" + event.targte.value + id);
      this.$emit("editclose-event", todo);
    },
  },
};
</script>

<style>

</style>
