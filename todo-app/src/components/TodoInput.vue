<template>
  <div>
    <input
      type="text"
      v-model="newTodoItem"
      placeholder="Type what you have to do"
      v-on:keyup.enter="addTodo"
    />
    <!-- <button v-on:click="addTodo">+ ADD</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== "") {
        // 입력받은 텍스트를 로컬 스토리지의 setItem() API 를 이용하여 저장한다.
        // setItem() 은 로컬 스토리지에 데이터를 추가하는 API
        // API 형식은 키, 값 형태임
        localStorage.setItem(this.newTodoItem, this.newTodoItem);
        this.clearInput(); // OOP 디자인 패턴인 단일 책임 원칙 따름 - 함수 하나가 하나의 기능만 담당한다.
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
