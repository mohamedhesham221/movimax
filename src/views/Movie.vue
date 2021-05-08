<template>
  <div>
    <movi-tv heading="movie" />
    <all-movies />
    <footer-vue />
  </div>
</template>
<script>
import MoviTv from '@/components/MoviTvComponent/MoviTvBck.vue';
import AllMovies from '@/components/MoviTvComponent/AllMovies.vue';
import FooterVue from '@/components/footer/FooterVue.vue';

export default {
  components: {
    MoviTv,
    AllMovies,
    FooterVue,
  },
};
</script>
