<template>
  <div>
    <MovieDetailBox :movieInfo="searchedMovieInfo"></MovieDetailBox>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import MovieDetailBox from "@/components/MovieDetailBox.vue";

const BASE_URL =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?";
const API_KEY = "69c6ed26fdb6484cea8895fac5bcaec9";

export default {
  data() {
    return {
      searchedMovieInfo: {}
    };
  },
  components: {
    MovieDetailBox
  },
  // routes 에서 정의한 props
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    getDetail: function() {
      // console.log(this.id);
      const API_URL = BASE_URL + `key=${API_KEY}&movieCd=${this.id}`;
      axios.get(API_URL).then(response => {
        // console.log(response.data.movieInfoResult.movieInfo)
        this.searchedMovieInfo = response.data.movieInfoResult.movieInfo;
        // console.log(typeof(this.searchedMovieInfo))
      });
    }
  },
  created() {
    this.getDetail();
  }
};
</script>

<style></style>
