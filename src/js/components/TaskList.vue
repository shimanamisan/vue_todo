<template>
  <div class="p-task">
    <ul class="p-task__list">
      <TaskItem v-for="(task, index) in this.taskData"
      :task-item="task"
      :key="index + 1"
      @isdone-event="changeIsDone"
      @remove-event="removeItem" />
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
  },
  methods: {
    changeIsDone(id) {
      console.log("isDoneの変更 【中間コンポーネント】：" + id);
      this.$emit("isdone-event", id);
    },
    removeItem(id) {
      console.log("タスクの削除 【中間コンポーネント】：" + id);
      this.$emit("remove-event", id);
    },
  },
};
</script>

<style></style>
