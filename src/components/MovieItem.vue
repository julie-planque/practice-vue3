<template>
      <div class="movie-item">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" class="movie-poster">
  </div>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.movie-item {
  /* Styles for the movie item container */
}

.movie-poster {
  /* Styles for the movie poster image */
}

.movie-title {}
</style>
