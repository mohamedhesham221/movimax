<template>
  <div>
    <footer class="container text-center">
      <div class="row align-items-center">
        <div class="col-12 col-md-4 align-self-baseline">
          <img class="img-fluid" src="../../assets/logo.png" alt="logo">
        </div>
        <div class="col-6 col-md-4 align-self-baseline">
          <div class="social">
            <b-icon-facebook class="facebook"/>
            <b-icon-instagram class="instagram" />
            <b-icon-twitter class="twitter" />
          </div>
        </div>
        <div class="col-6 col-md-4 align-self-baseline">
          <div class="copyright">
            <p class="lead">copyright reserved&copy;2021</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { BIconFacebook, BIconInstagram, BIconTwitter } from 'bootstrap-vue';

export default {
  name: 'footer-vue',
  components: {
    BIconFacebook,
    BIconTwitter,
    BIconInstagram,
  },
};
</script>
