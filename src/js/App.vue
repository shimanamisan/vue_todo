<template>
  <div>
    <div class="l-main">
      <div class="l-main__inner">
        <div class="p-title__wrapp">
          <h1 class="p-title">Todo List</h1>
          <VueLogo />
        </div>
        <div class="l-main__sub">
          <div class="c-form__wrapp">
            <CreateTask @create-event="createNewTask" />
          </div>
          <div class="c-btn__wrapp">
            <DeleteBtn @delete-event="isDoneAllDelete" />
            <OtherTodo />
          </div>
          <div class="c-form__wrapp">
            <SearchTask @search-event="searchValue" />
          </div>
          <TaskList :task-data="getTask" @isdone-event="changeIsDone" @remove-event="removeItem" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import VueLogo from "@/components/common/Logo";
import TaskList from "@/components/TaskList";
import SearchTask from "@/components/SearchTask";
import DeleteBtn from "@/components/DeleteBtn";
import OtherTodo from "@/components/OtherTodo";
import CreateTask from "@/components/CreateTask";
export default {
  components: {
    VueLogo,
    CreateTask,
    OtherTodo,
    DeleteBtn,
    SearchTask,
    TaskList,
  },
  data() {
    return {
      todos: [],
      searchWord: "",
    };
  },
  computed: {
    getTask() {
      if(this.searchWord !== ""){
        return this.todos.filter((item) => {
          let serchItem = new RegExp("^" + this.searchWord, "i")
          return item.value.match(serchItem)
        })
      }else{
        return this.todos
      }
    },
  },
  methods: {
    // 初回アクセス時にタスクを生成
    createTask() {
      let id = null;
      for (let i = 1; i <= 3; i++) {
        id = this.createId();
        console.log("タスク初期作成用 " + id);
        let task = {
          id: id,
          value: `Task${i}`,
          isDone: false,
        };
        this.todos.push(task);
        id = null;
      }
    },
    // タスクを検索
    searchValue(searchValueData) {
      console.log("子コンポーネントから受け取った検索用の値");
      this.searchWord = searchValueData;
    },
    // 新しいタスクを追加
    createNewTask(createValue) {
      console.log("子コンポーネントから取得した値です：" + createValue);
      // 既存のデータを取得
      let data = this.todos;
      // ユニークなIDを作成
      let id = this.createId();
      // 追加用の新しいデータを格納
      let newData = {
        id: id,
        value: createValue,
        isDone: false,
      };
      console.log(JSON.stringify(newData));
      // 配列の最後尾に新しいデータを追加
      data.push(newData);
    },
    changeIsDone(id) {
      console.log("isDoneの変更 【親コンポーネント】：" + id);
      let newData = this.todos.map((item) => {
        if (item.id === id) {
          return Object.assign({}, item, { isDone: !item.isDone });
        }
        return item;
      });
      console.log("isDoneステータスを変更した新しいオブジェクトが生成されています：" + newData);
      return (this.todos = newData);
    },
    removeItem(id) {
      console.log("タスクの削除 【親コンポーネント】：" + id);
      // ネイティブJSを使った削除方法
      this.todos.map((item, index) => {
        if (item.id === id) {
          console.log(index); // IDが一致するタスクの配列のindexを取得
          this.todos.splice(index, 1); // indexを元に該当したIDのタスクを1つ削除
        }
      });

      // lodashを使ったやり方
      // this.todos = _.reject(this.todos, { id: id });
    },
    // タスクのユニークなIDを生成
    createId() {
      let str = "";
      let keyLength = 15;
      const key = {
        small: "abcdefghijklmnopqrstuvwxyz",
        large: "ABCDEFGHIJKLMNPQRSTUVWXYZ",
        num: "1234567890",
        symbol: "#$=", // デフォルトで定義されている'_-'の２文字を変更、'='を追加
      };

      const createID = str.concat(key.small, key.large, key.num, key.symbol);
      let newId = "";
      for (let i = 0; i < keyLength; i++) {
        newId += createID[Math.floor(Math.random() * createID.length)];
        // console.log("ID作成メソッド " + newId)
      }
      return newId;
    },
    // 完了しているタスクを全て削除
    isDoneAllDelete() {
      if (window.confirm("完了したタスクを全て削除しますか？")) {
        // 削除の処理
        this.todos = this.todos.filter((item) => {
          console.log("完了したタスクを削除します：" + JSON.stringify(item));
          return !item.isDone;
        });
        return;
      } else {
        // 何もしない
      }
    },
  },
  // 初回アクセス時にタスクを生成
  mounted() {
    this.createTask();
  },
};
</script>

<style></style>
