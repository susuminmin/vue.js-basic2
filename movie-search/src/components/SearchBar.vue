<template>
  <div>
    <input type="text" v-model="keyword" />
    <button v-on:click="getKeyword">SEARCH</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    getKeyword: function() {
      this.$emit("getKeyword", this.keyword);
    }
  }
};
</script>

<style></style>
