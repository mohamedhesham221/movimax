<template>
  <div class="home">
    <main-slider />
    <top-rated />
    <popular />
    <up-coming />
    <mid-background />
    <tv-popular />
    <tv-on-the-air />
    <tv-airing-today />
    <footer-vue />
    <top-btn />
  </div>
</template>

<script>
// @ is an alias to /src
import MainSlider from '@/components/home/MainSlider.vue';
import TopRated from '@/components/home/TopRated.vue';
import Popular from '@/components/home/Popular.vue';
import UpComing from '@/components/home/UpComing.vue';
import midBackground from '@/components/home/midBackground.vue';
import TvPopular from '@/components/home/TvPopular.vue';
import TvOnTheAir from '@/components/home/TvOnTheAir.vue';
import TvAiringToday from '@/components/home/TvAiringToday.vue';
import FooterVue from '@/components/footer/FooterVue.vue';
import TopBtn from '@/components/topButton/toTop.vue';

export default {
  name: 'Home',
  components: {
    MainSlider,
    TopRated,
    Popular,
    UpComing,
    midBackground,
    TvPopular,
    TvOnTheAir,
    TvAiringToday,
    FooterVue,
    TopBtn,
  },
};
</script>
