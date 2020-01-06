<template>
  <div>
    <h1>{{ this.movieInfo.movieNm }} 상세 정보</h1>
    <h3>{{ this.movieInfo.movieNmEn }} ({{ this.movieInfo.prdtYear }})</h3>
    <p>{{ this.movieInfo.genres[0].genreNm }}</p>
    <p>{{ this.movieInfo.directors }}</p>
    <p>{{ this.movieInfo.actors }}</p>
  </div>
</template>

<script>
export default {
  props: {
    movieInfo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
