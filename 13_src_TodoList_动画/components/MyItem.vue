<template>
  <li>
    <label>
    <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
    <!-- 如下代码也能实现功能，但是不推荐，因为有点违反原则，因为修改了props -->
    <!-- <input type="checkbox" v-model="todo.done"/> -->
    <span v-show="!todo.isEdit">{{todo.title}}</span>
    <input v-show="todo.isEdit"
          type="text" 
          :value="todo.title" 
          ref="inputTitle"
          @blur="handleBlur(todo,$event)">
    </label>
    <button class="btn btn-danger" @click="del(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name:'MyItem',
    //声明接受todo对象
    props:['todo'],
    methods: {
      handleCheck(id){
        //通知APP组件将对应的todo对象的done值取反
        // this.checkTodo(id)
        this.$bus.$emit('checkTodo',id)
      },
      del(id){
        if (confirm('确认删除吗?')) {
          //this.delTodo(id)
          //this.$bus.$emit('delTodo',id)
          pubsub.publish('delTodo',id)
        }
      },
      //编辑
      handleEdit(todo){
        // hasOwnProperty --对象身上的Api，判断自身身上有没有某个属性
        if (todo.hasOwnProperty('isEdit')) 
        {
          // 有则修改状态
          todo.isEdit=true
        }else
        {
          // 无则添加
          this.$set(todo,'isEdit',true)
        }
        //$nextTick() --在下一次DOM更新结束后执行其指定的回调
        this.$nextTick(function(){
          // 点击获取焦点
          this.$refs.inputTitle.focus()
        })
      },
      // 失去焦点回调(真正执行修改逻辑)
      handleBlur(todo,e){
        todo.isEdit = false
        // console.log('updateTodo',todo.id,e.target.value)
        if (!e.target.value.trim()) return alert('输入不能为空！')
        this.$bus.$emit('updateTodo',todo.id,e.target.value)
      },
    },
  }
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>