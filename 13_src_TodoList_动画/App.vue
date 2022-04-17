<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addTodo="addTodo"></MyHeader>
      <MyList :todos="todos"></MyList>
      <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
    </div>
  </div>
</div>
</template>

<script>
  //引入消息订阅  -- pubsub-js库
  import pubsub from 'pubsub-js'
  //引入School组件
  import MyHeader from './components/MyHeader.vue'
  import MyList from './components/MyList.vue'
  import MyFooter from './components/MyFooter.vue'


export default {
  name: 'App',
  components: {MyHeader,MyList,MyFooter},
  data() {
    return {
      //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
      //如果有对象：json解析todos中的对象。 没有对象则：返回一个空数组
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    //添加一个todo
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo) => {
        if (todo.id===id) todo.done=!todo.done
      });
    },
    //更新一个todo
    updateTodo(id,title){
      this.todos.forEach((todo) => {
        if (todo.id===id) todo.title = title
      });
    },
    //删除一个todo(消息订阅 消息名用 _ 占位,id 为要传的data)
    delTodo(_,id){
      this.todos=this.todos.filter(todo=> todo.id !== id)
    },
    //全选or取消全选
    checkAllTodo(done){
      this.todos.forEach((todo) => {
        todo.done=done
      });
    },
    //清除所有已经完成的todo
    clearAllTodo(done){
      this.todos=this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch: {
    todos: {
      immediate: true, //immediate设为true后，则监听的这个对象会立即输出，也就是说一刷新页面就会在控制台输出
      deep: true, //确认是否深入监听
      handler(value) {
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  mounted() {
    //全局事件总线
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('updateTodo',this.updateTodo)
    //订阅消息
    this.pubId = pubsub.subscribe('delTodo',this.delTodo)
  },
  beforeDestroy() {
    //全局事件总线--解绑
    this.$bus.$off('checkTodo')
    this.$bus.$off('updateTodo')
    //取消订阅
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit {
  color: #fff;
  background-color:skyblue;
  border: 1px solid rgb(103, 159, 180);
  margin-right: 5px;
}
.btn-edit:hover {
  color: #fff;
  background-color: #2b8bca;
}

.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
