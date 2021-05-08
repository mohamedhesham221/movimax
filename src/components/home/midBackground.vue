<template>
  <div>
    <div class="background">
      <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6">
          <div class="left-section">
        <h2>Join Today</h2>
        <p class="lead">Get access to maintain your own custom personal lists,track
          what you've seen and search and filter for what to watch next—regardless
            if it's in theatres,
          on TV or available on popular streaming services like .</p>
          <button class="btn" @click="formChanged" >Join Now</button>
      </div>
        </div>
        <div class="col-sm-12 col-lg-6">
          <div class="right-section">
        <ul class="list">
          <li class="item-list">Enjoy ad free</li>
          <li class="item-list">Maintain a personal watchlist</li>
          <li class="item-list">Log the movies and TV shows you've seen</li>
          <li class="item-list">
            Filter by your subscribed streaming services and find something to watch</li>
        </ul>
      </div>
        </div>
      </div>
      </div>
    </div>
    <transition name="opacity">
    <join-form v-if="form" />
    </transition>
  </div>
</template>
<script>
import JoinForm from '@/components/home/JoinForm.vue';
import EventBus from '../../main';

export default {
  name: 'background',
  components: {
    JoinForm,
  },
  data() {
    return {
      form: null,
    };
  },
  created() {
    EventBus.$on('formChange', (val) => {
      this.form = val;
    });
  },
  methods: {
    formChanged() {
      this.form = true;
      EventBus.$emit('formChange', this.form);
    },
  },
};
</script>
