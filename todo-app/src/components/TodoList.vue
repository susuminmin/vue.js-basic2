<template>
  <section>
    {{ todoItems }}
    <ul>
      <!-- <li
        v-for="todoItem in todoItems"
        class="shadow"
      >
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span
          class="removeBtn"
          type="button"
          v-on:click="removeTodo(todoItem, index)"
        >
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li> -->
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    if (localStorage.length > 0) {
      console.log(localStorage.length)
      for (var i = 0; i < localStorage; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  }
};
</script>

<style></style>
