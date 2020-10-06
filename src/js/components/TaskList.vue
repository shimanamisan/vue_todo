<template>
  <div class="p-task">
    <ul class="p-task__list">
      <draggable :forceFallback="true" handle=".u-handle" @change="onChange" v-bind="getOptions()">
        <TaskItem
          v-for="(task, index) in this.taskData"
          :task-item="task"
          :key="index + 1"
          @isdone-event="changeIsDone"
          @remove-event="removeItem"
          @edit-event="taskEdit"
          @editclose-event="coloseEdit"
        />
      </draggable>
    </ul>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskItem from "@/components/TaskItem";
export default {
  data() {
    return {
      // tasks: this.taskData,
    };
  },
  props: ["taskData"],
  components: {
    TaskItem,
    draggable,
  },
  methods: {
    // vue-draggableオプションをメソッドに切り出し
    getOptions() {
      return { animation: 500, delay: 50 };
    },
    changeIsDone(id) {
      console.log("isDoneの変更 【中間コンポーネント】：" + id);
      this.$emit("isdone-event", id);
    },
    removeItem(id) {
      console.log("タスクの削除 【中間コンポーネント】：" + id);
      this.$emit("remove-event", id);
    },
    taskEdit(id) {
      console.log("タスクの編集 【中間コンポーネント】：" + id);
      this.$emit("edit-event", id);
    },
    coloseEdit(todo) {
      console.log("タスクの解除 【中間コンポーネント】：");
      this.$emit("editclose-event", todo);
    },
    onChange() {
      console.log("change!");
    },
  },
};
</script>

<style></style>
