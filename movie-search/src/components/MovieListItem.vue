<template>
  <div>
    <h1>{{ movie.movieNm }} ({{ openYear }})</h1>
    <h3>{{ movie.movieNmEn }}</h3>
    <!-- <p>장르: {{ movie.genreAlt }}, 감독: {{ movie.directors[0].peopleNm }}</p> -->
    <button v-on:click="goDetailPage">상세보기</button>
    <br />
  </div>
</template>

<script>
import router from "@/router";

export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    goDetailPage: function() {
      router.push(`/detail/${this.movie.movieCd}`);
    }
  },
  computed: {
    openYear: function() {
      return this.movie.openDt.slice(0, 4);
    }
  }
};
</script>

<style></style>
