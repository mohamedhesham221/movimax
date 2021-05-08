<template>
  <div>
    <div class="container">
      <div class="up__coming">
              <div class="heading_section">
        <div class="clearfix"></div>
        <h2 class="heading__section--head">Upcoming Movies</h2>
        <router-link to="/movie" class="heading__section--content lead">view more</router-link>
        <div class="clearfix"></div>
        <router-view />
      </div>
      <div class="body_section text-center">
        <div class="row">
          <div class="col-6 col-md-3" v-for="movie in upComingArr" :key="movie.id">
            <div class="movie__item">
              <span class="rate">{{ movie[10].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + movie[10].poster_path" :alt="movie[10].title">
              <div class="caption">
                <div class="marque">
                  <p v-for="id in movie[10].genre_ids" :key="id.id" class="genres_genre">
                  <span v-for="(name, index) in genres[0]" :key="index">
                    <span v-if="id == name.id">{{ name.name }}</span>
                  </span>
                </p>
                </div>
              </div>
              </div>
          </div>
          <div class="col-6 col-md-3" v-for="movie in upComingArr" :key="movie.id">
            <div class="movie__item">
                <span class="rate">{{ movie[13].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + movie[13].poster_path" :alt="movie[13].title">
                <div class="caption">
                  <div class="marque">
                    <p v-for="id in movie[13].genre_ids" :key="id.id" class="genres_genre">
                  <span v-for="(name, index) in genres[0]" :key="index">
                    <span v-if="id == name.id">{{ name.name }}</span>
                  </span>
                </p>
                  </div>
              </div>
              </div>
          </div>
          <div class="col-6 col-md-3" v-for="movie in upComingArr" :key="movie.id">
            <div class="movie__item">
                <span class="rate">{{ movie[18].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + movie[18].poster_path" :alt="movie[18].title">
                <div class="caption">
                  <div class="marque">
                    <p v-for="id in movie[18].genre_ids" :key="id.id" class="genres_genre">
                  <span v-for="(name, index) in genres[0]" :key="index">
                    <span v-if="id == name.id">{{ name.name }}</span>
                  </span>
                </p>
                  </div>
              </div>
              </div>
          </div>
          <div class="col-6 col-md-3" v-for="movie in upComingArr" :key="movie.id">
            <div class="movie__item">
                <span class="rate">{{ movie[16].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + movie[16].poster_path" :alt="movie[16].title">
                <div class="caption">
                  <div class="marque">
                      <p v-for="id in movie[16].genre_ids" :key="id.id" class="genres_genre">
                  <span v-for="(name, index) in genres[0]" :key="index">
                    <span v-if="id == name.id">{{ name.name }}</span>
                  </span>
                </p>
                  </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import UpComingMixin from '@/mixins/movies/UpComingMixin';

export default {
  name: 'UpComing',
  mixins: [UpComingMixin],
};
</script>
