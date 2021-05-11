<template>
  <div>
    <div class="container">
      <div class="on-the-air">
              <div class="heading_section">
        <div class="clearfix"></div>
        <h2 class="heading__section--head">On The Air Tvs</h2>
        <router-link to="/tv" class="heading__section--content lead">view more</router-link>
        <div class="clearfix"></div>
        <router-view />
      </div>
      <div class="body_section text-center">
        <div class="row">
          <div class="col-6 col-md-3" v-for="tv in onTheAirArr" :key="tv.id">
            <div class="tv__item">
              <span class="rate">{{ tv[0].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + tv[0].poster_path"
                :alt="tv[0].title" loading="lazy">
              <div class="caption">
                      <div class="marque">
                        <p v-for="id in tv[0].genre_ids" :key="id.id" class="genres_genre">
                  <span v-for="(name, index) in genres[0]" :key="index">
                    <span v-if="id == name.id">{{ name.name }}</span>
                  </span>
                      </p>
                      </div>
              </div>
              </div>
          </div>
          <div class="col-6 col-md-3" v-for="tv in onTheAirArr" :key="tv.id">
            <div class="tv__item">
                <span class="rate">{{ tv[1].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + tv[1].poster_path"
                :alt="tv[1].title" loading="lazy">
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
          <div class="col-6 col-md-3" v-for="tv in onTheAirArr" :key="tv.id">
            <div class="tv__item">
                <span class="rate">{{ tv[2].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + tv[2].poster_path"
                :alt="tv[2].title" loading="lazy">
                <div class="caption">
                  <div class="marque">
                      <p v-for="id in tv[2].genre_ids" :key="id.id" class="genres_genre">
                  <span v-for="(name, index) in genres[0]" :key="index">
                    <span v-if="id == name.id">{{ name.name }}</span>
                  </span>
                </p>
                  </div>
              </div>
              </div>
          </div>
          <div class="col-6 col-md-3" v-for="tv in onTheAirArr" :key="tv.id">
            <div class="tv__item">
                <span class="rate">{{ tv[3].vote_average }}</span>
              <img class="img-fluid" :src="baseUrl + tv[3].poster_path"
                :alt="tv[3].title" loading="lazy">
                <div class="caption">
                  <div class="marque">
                    <p v-for="id in tv[3].genre_ids" :key="id.id" class="genres_genre">
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
import OnTheAirMixin from '@/mixins/tvs/OnTheAirMixin';

export default {
  name: 'OnTheAir',
  mixins: [OnTheAirMixin],
};
</script>
