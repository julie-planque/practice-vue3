<template>
  <div>
    <div class="row">
      <ul v-if="movies.length > 0">
        <li class="col-md-4" v-for="movie in movies" :key="movie.id">
          <MovieItem :movie="movie" />
        </li>
      </ul>
      <p v-else-if="isLoading">Chargement des films...</p>
      <p v-else>Aucun film trouvé.</p>
    </div>
  </div>
</template>


<script>
import MovieItem from './MovieItem.vue';

export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      movies: [],
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGY4ODJmMjhkOWYyZWE1OTBjNTFlNjRmOTEwOTEwNCIsIm5iZiI6MTcyOTE3MzM2NS41MjE0MDIsInN1YiI6IjVjNjFlM2EyOTI1MTQxMmZjNGZiNzUwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YwgGdZ8smPCbewId4MoGLOmgZK3dz333EuSyiOsmrSo'
      }
    };

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(response => response.json())
      .then(response => {
        this.movies = response.results;
      })
      .catch(err => console.error(err));
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0px;

  li {
    width: 300px;
    margin: 8px;
  }
}

.movie-poster {
  width: 300px;
}
</style>