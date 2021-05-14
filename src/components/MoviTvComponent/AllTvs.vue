<template>
  <div>
    <div class="container">
            <h2 class="tv-head">Explore Tvs</h2>
      <ul class="filters">
        <li class="list-item" @click="popularTv">popular</li>
        <li class="list-item" @click="topRatedTv">top rated</li>
        <li class="list-item" @click="airingTodayTv">airing today</li>
        <li class="list-item" @click="onTheAirTv">on the air</li>
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
      <p class="lead title-tvs">{{ title }}</p>
      <div class="row justify-content-center align-items-center">
        <div class="col-6 col-md-4 col-lg-2" v-for="tv in tvs[0][0]" :key="tv.id">
          <img class="img-fluid img-tv" :src="baseUrl + tv.poster_path" :alt="tv.name"
          @click="showTv = true; idTv = tv.id; tvDetail();" >
        </div>
      </div>
            <div class="layout" :class="{showLayout:showTv}">
        <div v-for="prop in tvData" :key="prop.id">
          <div class="tv-details"
          :style="{ backgroundImage:`url(${baseUrl}${prop.backdrop_path})` }">
          <div class="tv-info">
            <div class="container">
            <div class="row">
            <div class="col-6 col-lg-4">
              <img class="img-fluid tv-poster"
              :src= "baseUrl + prop.poster_path" :alt="prop.title" >
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
              <ul class="tv-genres">
                <li class="tv-genres-item" v-for="tvGen in prop.genres.slice(0, 3)" :key="tvGen.id">
                  {{ tvGen.name }}
                </li>
                </ul>
                <div class="video-trailer" :class="{showVid:trailer,hideVid:!trailer}">
                  <iframe
                    v-if="prop.videos.results[0]"
                    :src="youtubeUrl + prop.videos.results[0].key +
                    '?controls=1&amp;showinfo=0&amp;mute=' + muteNum"
                      allowfullscreen loading="lazy">
                  </iframe>
                  <iframe src="https://www.youtube.com" v-else></iframe>
              </div>
                  <p class="lead tv-title" v-text="prop.name"></p>
                <p class="lead tv-status" v-text="prop.status"></p>
                <p class="lead tv-votes" v-text="prop.vote_average"></p>
                <a class="link tv-homepage" :href="prop.homepage"
                  target="_blank"><b-icon-box-arrow-in-up-left /></a>
                <p class="lead tv-overview">"{{ prop.overview }}"</p>
                <p class="lead tv-tagline" v-text="prop.tagline"></p>
                <div class="d-flex">
                  <div class="actors"
                  v-for="actor in prop.credits.cast.slice(0,4)" :key="actor.id">
                  <img class="img-fluid profile-actor"
                  :src="baseUrl + actor.profile_path">
                </div>
                <div class="more">+&nbsp;5</div>
                </div>
                <div class="seasons d-none d-lg-block">
                  <p class="lead">seasons</p>
                  <div class="row">
                    <div class="col-4 col-lg-1 season-card text-center"
                      v-for="season in prop.seasons"
                    :key="season.id">
                      <img class="img-fluid season-poster" :src="baseUrl + season.poster_path"
                      :alt="season.name"  />
                      <p class="lead season-name" v-text="season.name"></p>
                      <p class="lead season-episode-year" v-if="season.air_date">
                        {{ season.air_date | year }}
                      </p>
                        <span class="episodes">{{ season.episode_count }} episode</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          </div>
          </div>
          </div>
        </div>
        <button class="btn" @click="showTv = false; trailer = false; muteNum = 1;">
          <b-icon-chevron-double-up class="chevron" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Popular from '@/mixins/tvs/PopularMixin';
import OnTheAir from '@/mixins/tvs/OnTheAirMixin';
import AiringToday from '@/mixins/tvs/AiringTodayMixin';
import TopRated from '@/mixins/tvs/TopRatedMixin';
import {
  BIconBoxArrowInUpLeft, BIconPlayFill, BIconXSquare, BIconChevronDoubleUp,
} from 'bootstrap-vue';

export default {
  name: 'AllTvs',
  mixins: [Popular, OnTheAir, AiringToday, TopRated],
  data() {
    return {
      tvs: [],
      change: false,
      title: 'popular',
      showTv: false,
      idTv: null,
      tvData: [],
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
    this.popularTv();
  },
  filters: {
    year(val) {
      return val.substring(0, 4);
    },
  },
  methods: {
    popularTv() {
      this.tvs = [];
      this.tvs.push(this.popularArr);
      this.title = 'popular';
    },
    topRatedTv() {
      this.tvs = [];
      this.tvs.push(this.topRatedArr);
      this.title = 'top rated';
    },
    onTheAirTv() {
      this.tvs = [];
      this.tvs.push(this.onTheAirArr);
      this.title = 'on the air';
    },
    airingTodayTv() {
      this.tvs = [];
      this.tvs.push(this.airingArr);
      this.title = 'airing today';
    },
    filterToZ() {
      const arr = this.tvs[0][0];
      // eslint-disable-next-line no-nested-ternary
      const sortedArr = arr.sort((a, b) => (a.name > b.name
        ? 1 : a.name < b.name ? -1 : 0));
      return sortedArr;
      // console.log(sortedArr);
    },
    filterToA() {
      const arr = this.tvs[0][0];
      // eslint-disable-next-line no-nested-ternary
      const sortedArr = arr.sort((a, b) => (b.name > a.name
        ? 1 : b.name < a.name ? -1 : 0));
      return sortedArr;
    },
    filterHigh() {
      const arr = this.tvs[0][0];
      // eslint-disable-next-line no-nested-ternary
      const sortedArr = arr.sort((a, b) => (a.vote_average > b.vote_average
        ? 1 : a.vote_average < b.vote_average ? -1 : 0));
      return sortedArr;
      // console.log(sortedArr);
    },
    filterLow() {
      const arr = this.tvs[0][0];
      // eslint-disable-next-line no-nested-ternary
      const sortedArr = arr.sort((a, b) => (b.vote_average > a.vote_average
        ? 1 : b.vote_average < a.vote_average ? -1 : 0));
      return sortedArr;
      // console.log(sortedArr);
    },
    tvDetail() {
      while (this.tvData.length > 0) {
        this.tvData.pop();
      }
      fetch(`https://api.themoviedb.org/3/tv/${this.idTv}?api_key=${this.apiKey}&append_to_response=videos,credits&language=en-US`)
        .then((response) => {
          if (response.ok) {
            return response.json();
            // eslint-disable-next-line no-else-return
          } else {
            throw new Error('error');
          }
        }).then((result) => {
          this.tvData.push(result);
          // console.log(this.tvData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
