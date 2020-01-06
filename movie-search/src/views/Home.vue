<template>
  <div>
    <SearchBar @getKeyword="getMovieList" />
    <MovieList :movies="searchedMovies" />
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import MovieList from "@/components/MovieList.vue";

// 영진위 open API
const BASE_URL =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?";
const API_KEY = "69c6ed26fdb6484cea8895fac5bcaec9";

export default {
  data() {
    return {
      searchedMovies: [],
      // selectedVideo: null
    };
  },
  components: {
    SearchBar,
    MovieList
  },
  methods: {
    getMovieList: function (movie) {
      const API_URL = BASE_URL + `key=${API_KEY}&movieNm=${movie}`
      axios.get(API_URL)
      .then(response => {
        // console.log(response.data.movieListResult.movieList)
        this.searchedMovies = response.data.movieListResult.movieList
        // console.log(this.searchedMovies)
      })
    }
  }
};
</script>

<style>
input {
  width: 30%;
}
</style>
