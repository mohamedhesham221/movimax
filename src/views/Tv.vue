<template>
  <div>
    <movi-tv heading="Tv show" />
    <all-tvs />
    <footer-vue />
  </div>
</template>
<script>
import MoviTv from '@/components/MoviTvComponent/MoviTvBck.vue';
import AllTvs from '@/components/MoviTvComponent/AllTvs.vue';
import FooterVue from '@/components/footer/FooterVue.vue';

export default {
  components: {
    MoviTv,
    AllTvs,
    FooterVue,
  },
};
</script>
