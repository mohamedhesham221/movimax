<template>
  <div>
      <b-carousel
      class="d-block d-md-none"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :caption="popular[0].title"
        :img-src="baseUrl + popular[0].poster_path"
      >
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb"><b>imdb</b>&nbsp;<b-icon-star-fill />&nbsp;{{ popular[0].vote_average }}</p>
      </b-carousel-slide>
      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :caption="popular[1].title"
        :img-src="baseUrl + popular[1].poster_path"
      >
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb"><b>imdb</b>&nbsp;<b-icon-star-fill />&nbsp;{{ popular[1].vote_average }}</p>
      </b-carousel-slide>
      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :caption="popular[2].title"
        :img-src="baseUrl + popular[2].poster_path"
      >
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb"><b>imdb</b>&nbsp;<b-icon-star-fill />&nbsp;{{ popular[2].vote_average }}</p>
      </b-carousel-slide>
      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :caption="popular[3].title"
        :img-src="baseUrl + popular[3].poster_path"
      >
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb"><b>imdb</b>&nbsp;<b-icon-star-fill />&nbsp;{{ popular[3].vote_average }}</p>
      </b-carousel-slide>
      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :caption="popular[4].title"
        :img-src="baseUrl + popular[4].poster_path"
      >
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb"><b>imdb</b>&nbsp;<b-icon-star-fill />&nbsp;{{ popular[4].vote_average }}</p>
      </b-carousel-slide>
      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :caption="popular[5].title"
        :img-src="baseUrl + popular[5].poster_path"
      >
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb"><b>imdb</b>&nbsp;<b-icon-star-fill />&nbsp;{{ popular[5].vote_average }}</p>
      </b-carousel-slide>
        </b-carousel>
        <!-- component in large screen -->
        <b-carousel
        class="d-none d-md-block"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :img-src="baseUrl + popular[0].backdrop_path"
      >
      <img class="img-fluid poster-carousel" :src="baseUrl + popular[0].poster_path" />
      <h3>{{ popular[0].title | shortTitle }}</h3>
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb d-block d-md-none"><b>imdb</b>&nbsp;
      <b-icon-star-fill />&nbsp;{{ popular[0].vote_average }}</p>
      </b-carousel-slide>

      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :img-src="baseUrl + popular[1].backdrop_path"
      >
      <img class="img-fluid poster-carousel" :src="baseUrl + popular[1].poster_path" />
      <h3>{{ popular[1].title | shortTitle }}</h3>
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb d-block d-md-none"><b>imdb</b>&nbsp;
      <b-icon-star-fill />&nbsp;{{ popular[1].vote_average }}</p>
      </b-carousel-slide>

      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :img-src="baseUrl + popular[2].backdrop_path"
      >
      <img class="img-fluid poster-carousel" :src="baseUrl + popular[2].poster_path" />
      <h3>{{ popular[2].title | shortTitle }}</h3>
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb d-block d-md-none"><b>imdb</b>&nbsp;
      <b-icon-star-fill />&nbsp;{{ popular[2].vote_average }}</p>
      </b-carousel-slide>

      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :img-src="baseUrl + popular[3].backdrop_path"
      >
      <img class="img-fluid poster-carousel" :src="baseUrl + popular[3].poster_path" />
      <h3>{{ popular[3].title | shortTitle }}</h3>
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb d-block d-md-none"><b>imdb</b>&nbsp;
      <b-icon-star-fill />&nbsp;{{ popular[3].vote_average }}</p>
      </b-carousel-slide>

      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :img-src="baseUrl + popular[4].backdrop_path"
      >
      <img class="img-fluid poster-carousel" :src="baseUrl + popular[4].poster_path" />
      <h3>{{ popular[4].title | shortTitle }}</h3>
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb d-block d-md-none"><b>imdb</b>&nbsp;
      <b-icon-star-fill />&nbsp;{{ popular[4].vote_average }}</p>
      </b-carousel-slide>

      <b-carousel-slide v-for="popular in popularArr" :key="popular.id"
        :img-src="baseUrl + popular[5].backdrop_path"
      >
      <img class="img-fluid poster-carousel" :src="baseUrl + popular[5].poster_path" />
      <h3>{{ popular[5].title | shortTitle }}</h3>
      <p class="release">2021</p>
      <div class="clearfix"></div>
      <p class="imdb d-block d-md-none"><b>imdb</b>&nbsp;
      <b-icon-star-fill />&nbsp;{{ popular[5].vote_average }}</p>
      </b-carousel-slide>
        </b-carousel>
  </div>
</template>
<script>
import { BCarousel, BCarouselSlide, BIconStarFill } from 'bootstrap-vue';
import popularMixin from '@/mixins/movies/popularMixin';

export default {
  name: 'MainSlider',
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  components: {
    BCarousel,
    BCarouselSlide,
    BIconStarFill,
  },
  filters: {
    // eslint-disable-next-line consistent-return
    shortTitle(val) {
      return `${val.substring(0, 20)} ..`;
    },
  },
  mixins: [popularMixin],
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
