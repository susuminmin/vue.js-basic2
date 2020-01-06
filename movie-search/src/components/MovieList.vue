<template>
  <div>
    <ul>
      <MovieListItem
        v-for="movie in movies"
        :key="movie.movieCd"
        :movie="movie"
      >
      </MovieListItem>
    </ul>
  </div>
</template>

<script>
import MovieListItem from "./MovieListItem.vue";
export default {
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  components: {
    MovieListItem
  }
};
</script>

<style></style>
