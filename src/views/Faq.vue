<template>
  <div>
    <movi-tv heading="faq" />
    <question-and-answer />
    <footer-vue />
  </div>
</template>
<script>
import MoviTv from '@/components/MoviTvComponent/MoviTvBck.vue';
import questionAndAnswer from '@/components/faq/Faq.vue';
import FooterVue from '@/components/footer/FooterVue.vue';

export default {
  name: 'faq',
  components: {
    questionAndAnswer,
    MoviTv,
    FooterVue,
  },
};
</script>
