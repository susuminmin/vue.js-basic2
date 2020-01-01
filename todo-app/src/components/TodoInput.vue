<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo">+ ADD</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== '') {
        
      }
      // localStorage.setItem(this.newTodoItem, this.newTodoItem)
    }
  }
}
</script>

<style>

</style>