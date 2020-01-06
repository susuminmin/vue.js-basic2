<template>
  <div>
    {{ doneTodosCount }}
    {{ getTodobyId(2) }}
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: {
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
    ...mapGetters(["getTodobyId"])
  },
  methods: {
    ...mapMutations([
      "increment" // `this.increment` 는 `this.$store.commit('increment')` 로 이어짐
    ])
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
