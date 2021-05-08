<template>
  <div>
    <div class="container">
      <div class="top__rated">
              <div class="heading_section">
        <div class="clearfix"></div>
        <h2 class="heading__section--head">Airing Today Tvs</h2>
        <router-link to="/tv" class="heading__section--content lead">view more</router-link>
        <div class="clearfix"></div>
        <router-view />
      </div>
      <div class="body_section text-center">
        <div class="row">
          <div class="col-6 col-md-3" v-for="tv in airingArr" :key="tv.id">
            <div class="tv__item">
              <span class="rate">{{ tv[13].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + tv[13].poster_path" :alt="tv[13].title">
              <div class="caption">
                      <div class="marque">
                        <p v-for="id in tv[13].genre_ids" :key="id.id" class="genres_genre">
                  <span v-for="(name, index) in genres[0]" :key="index">
                    <span v-if="id == name.id">{{ name.name }}</span>
                  </span>
                      </p>
                      </div>
              </div>
              </div>
          </div>
          <div class="col-6 col-md-3" v-for="tv in airingArr" :key="tv.id">
            <div class="tv__item">
                <span class="rate">{{ tv[1].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + tv[1].poster_path" :alt="tv[1].title">
                <div class="caption">
                  <div class="marque">
                    <p v-for="id in tv[1].genre_ids" :key="id.id" class="genres_genre">
                  <span v-for="(name, index) in genres[0]" :key="index">
                    <span v-if="id == name.id">{{ name.name }}</span>
                  </span>
                </p>
                  </div>
              </div>
              </div>
          </div>
          <div class="col-6 col-md-3" v-for="tv in airingArr" :key="tv.id">
            <div class="tv__item">
                <span class="rate">{{ tv[10].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + tv[10].poster_path" :alt="tv[10].title">
                <div class="caption">
                  <div class="marque">
                      <p v-for="id in tv[10].genre_ids" :key="id.id" class="genres_genre">
                  <span v-for="(name, index) in genres[0]" :key="index">
                    <span v-if="id == name.id">{{ name.name }}</span>
                  </span>
                </p>
                  </div>
              </div>
              </div>
          </div>
          <div class="col-6 col-md-3" v-for="tv in airingArr" :key="tv.id">
            <div class="tv__item">
                <span class="rate">{{ tv[19].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + tv[19].poster_path" :alt="tv[19].title">
                <div class="caption">
                  <div class="marque">
                    <p v-for="id in tv[19].genre_ids" :key="id.id" class="genres_genre">
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
import AiringTodayMixin from '@/mixins/tvs/AiringTodayMixin';

export default {
  name: 'AiringToday',
  mixins: [AiringTodayMixin],
};
</script>
