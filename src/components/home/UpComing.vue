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
              <span class="rate">{{ movie[0].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + movie[0].poster_path"
                :alt="movie[0].title" >
              <div class="caption">
                <div class="marque">
                  <p v-for="id in movie[0].genre_ids" :key="id.id" class="genres_genre">
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
                <span class="rate">{{ movie[1].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + movie[1].poster_path"
                :alt="movie[1].title" >
                <div class="caption">
                  <div class="marque">
                    <p v-for="id in movie[1].genre_ids" :key="id.id" class="genres_genre">
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
                <span class="rate">{{ movie[2].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + movie[2].poster_path"
                :alt="movie[2].title" >
                <div class="caption">
                  <div class="marque">
                    <p v-for="id in movie[2].genre_ids" :key="id.id" class="genres_genre">
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
                <span class="rate">{{ movie[3].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + movie[3].poster_path"
                :alt="movie[3].title" >
                <div class="caption">
                  <div class="marque">
                      <p v-for="id in movie[3].genre_ids" :key="id.id" class="genres_genre">
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
