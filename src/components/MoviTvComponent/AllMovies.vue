<template>
  <div>
    <div class="container">
      <h2 class="movie-head">Explore Movies</h2>
      <ul class="filters">
        <li class="list-item" @click="popularMovi">popular</li>
        <li class="list-item" @click="topRatedMovi">top rated</li>
        <li class="list-item" @click="upcomingMovi">upcoming</li>
        <li class="list-item" @click="nowPlayMovi">now playing</li>
        <li class="list-item" @click="change = !change">
          <span :class="{changeTop:!change,backChangeTop:change}" ></span>
          <span></span>
          <span :class="{changeBot:!change,backChangeBot:change}"></span>
        </li>
      </ul>
      <div class="drop-down" :class="{showDrop:change}">
        <div class="top" @click="filterLow">Hight to Low</div>
        <div class="bot" @click="filterHigh">Low to High</div>
          <div class="to-z" @click="filterToZ">A to Z</div>
        <div class="to-a" @click="filterToA">Z to A</div>
      </div>
      <p class="lead title-movies">{{ title }}</p>
      <div class="row justify-content-center align-items-center">
        <div class="col-6 col-md-4 col-lg-2" v-for="movie in movies[0][0]" :key="movie.id">
          <img class="img-fluid img-movie" :src="baseUrl + movie.poster_path" :alt="movie.title"
          @click="showMovi = true; idMovi = movie.id; moviDetail();" loading="lazy">
        </div>
      </div>
      <div class="layout" :class="{showLayout:showMovi}">
        <div v-for="prop in movieData" :key="prop.id">
          <div class="movie-details"
          :style="{ backgroundImage:`url(${baseUrl}${prop.backdrop_path})` }">
          <div class="movi-info">
            <div class="container">
            <div class="row">
            <div class="col-6 col-lg-4">
              <img class="img-fluid movi-poster"
              :src= "baseUrl + prop.poster_path" :alt="prop.title" loading="lazy">
            </div>
            <div class="col-6 trailer">
                <button class="play" @click="trailer = !trailer">
                <transition name="animate">
                  <b-icon-play-fill v-if="!trailer" class="open-vid" @click="muteNum = 0;"/>
                </transition>
                <transition name="animate2">
                <b-icon-x-square v-if="trailer" class="close-vid" @click="muteNum = 1;"/>
                </transition>
                </button>
                <p class="lead">Youtube video&nbsp;{{ !trailer ? youtubePop : youtubeClose }}</p>
            </div>
            <div class="col-12">
              <ul class="movi-genres">
                <li class="movi-genres-item" v-for="moviGen in prop.genres.slice(0, 3)"
                :key="moviGen.id">
                  {{ moviGen.name }}
                </li>
                </ul>
                <div class="video-trailer" :class="{showVid:trailer,hideVid:!trailer}">
                <iframe
                :src="youtubeUrl + prop.videos.results[0].key +
                '?&amp;controls=1&amp;showinfo=0&amp;&amp;mute=' + muteNum" allowfullscreen
                  loading="lazy">
                </iframe>
              </div>
                  <p class="lead movi-title" v-text="prop.title"></p>
                <p class="lead movi-status" v-text="prop.status"></p>
                <p class="lead movi-votes" v-text="prop.vote_average"></p>
                <a class="link movi-homepage" :href="prop.homepage"
                  target="_blank"><b-icon-box-arrow-in-up-left /></a>
                <p class="lead movi-overview">"{{ prop.overview }}"</p>
                <p class="lead movi-tagline" v-text="prop.tagline"></p>
                <div class="d-flex">
                  <div class="actors"
                  v-for="actor in prop.credits.cast.slice(0,4)" :key="actor.id">
                  <img class="img-fluid profile-actor"
                  :src="baseUrl + actor.profile_path">
                </div>
                <div class="more"> +&nbsp;5</div>
                </div>
            </div>
          </div>
          </div>
          </div>
          </div>
        </div>
        <button class="btn" @click="showMovi = false; trailer = false; muteNum = 1;">
          <b-icon-chevron-double-up class="chevron" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Popular from '@/mixins/movies/popularMixin';
import TopRated from '@/mixins/movies/TopRatedMixin';
import Upcoming from '@/mixins/movies/UpComingMixin';
import NowPlaying from '@/mixins/movies/NowPlayingMixin';
import {
  BIconBoxArrowInUpLeft, BIconPlayFill, BIconXSquare, BIconChevronDoubleUp,
} from 'bootstrap-vue';

export default {
  name: 'AllMovies',
  data() {
    return {
      movies: [],
      change: false,
      title: 'popular',
      showMovi: false,
      idMovi: null,
      movieData: [],
      youtubeUrl: 'https://www.youtube.com/embed/',
      trailer: false,
      youtubePop: 'will pop up!!',
      youtubeClose: 'close!!',
      muteNum: 0,
    };
  },
  components: {
    BIconBoxArrowInUpLeft,
    BIconPlayFill,
    BIconXSquare,
    BIconChevronDoubleUp,
  },
  created() {
    this.popularMovi();
  },
  mixins: [Popular, TopRated, Upcoming, NowPlaying],
  methods: {
    popularMovi() {
      this.movies = [];
      this.movies.push(this.popularArr);
      this.title = 'popular';
    },
    topRatedMovi() {
      this.movies = [];
      this.movies.push(this.topRatedArr);
      this.title = 'top rated';
    },
    upcomingMovi() {
      this.movies = [];
      this.movies.push(this.upComingArr);
      this.title = 'upcoming';
    },
    nowPlayMovi() {
      this.movies = [];
      this.movies.push(this.nowPlayingArr);
      this.title = 'now playing';
    },
    filterToZ() {
      const arr = this.movies[0][0];
      // eslint-disable-next-line no-nested-ternary
      const sortedArr = arr.sort((a, b) => (a.title > b.title
        ? 1 : a.title < b.title ? -1 : 0));
      return sortedArr;
      // console.log(sortedArr);
    },
    filterToA() {
      const arr = this.movies[0][0];
      // eslint-disable-next-line no-nested-ternary
      const sortedArr = arr.sort((a, b) => (b.title > a.title
        ? 1 : b.title < a.title ? -1 : 0));
      return sortedArr;
    },
    filterHigh() {
      const arr = this.movies[0][0];
      // eslint-disable-next-line no-nested-ternary
      const sortedArr = arr.sort((a, b) => (a.vote_average > b.vote_average
        ? 1 : a.vote_average < b.vote_average ? -1 : 0));
      return sortedArr;
      // console.log(sortedArr);
    },
    filterLow() {
      const arr = this.movies[0][0];
      // eslint-disable-next-line no-nested-ternary
      const sortedArr = arr.sort((a, b) => (b.vote_average > a.vote_average
        ? 1 : b.vote_average < a.vote_average ? -1 : 0));
      return sortedArr;
      // console.log(sortedArr);
    },
    moviDetail() {
      this.movieData.splice(0, this.movieData.length);
      fetch(`https://api.themoviedb.org/3/movie/${this.idMovi}?api_key=${this.apiKey}&append_to_response=videos,credits&language=en-US`)
        .then((response) => {
          if (response.ok) {
            return response.json();
            // eslint-disable-next-line no-else-return
          } else {
            throw new Error('error');
          }
        }).then((result) => {
          this.movieData.push(result);
          console.log(this.movieData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
