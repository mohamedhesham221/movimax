<template>
    <div class="layout-form">
      <div class="container">
    <div class="logo-form text-center">
      <img class="img-fluid" src="../../assets/logo.png" alt="logo">
      <h2 class="h1">Join Now !!</h2>
    </div>
    <form class="form">
      <div class="form-group">
          <label for="username">username</label>
          <input type="text" class="form-control" id="username"
          placeholder="type a username" v-model="username"/>
      </div>
      <div class="form-group">
          <label>your gender</label><br>
          <input type="radio" id="male" name="gender" value="male" v-model="gender" />
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" v-model="gender" />
          <label for="female">Female</label>
      </div>
      <div class="form-group">
          <label for="password">your password</label>
          <input type="password" class="form-control" id="password"
          placeholder="password" v-model="password"/>
      </div>
      <button type="submit" class="btn" :disabled="isDisabled"
        @click.prevent="formChangedTwo">submit</button>
    </form>
  </div>
  </div>
</template>

<script>
import EventBus from '../../main';

export default {
  name: 'JoinForm',
  data() {
    return {
      form: null,
      username: '',
      password: '',
      gender: '',
    };
  },
  created() {
    EventBus.$on('formChange', (val) => {
      this.form = val;
    });
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    isDisabled() {
      return !!(!this.username || !this.password || !this.gender);
    },
  },
  methods: {
    formChangedTwo() {
      this.form = false;
      EventBus.$emit('formChange', this.form);
      this.setItems();
    },
    setItems() {
      window.localStorage.setItem('username', this.username);
      window.localStorage.setItem('gender', this.gender);
      EventBus.$emit('accountUser', this.username);
      EventBus.$emit('accountGender', this.gender);
    },
  },
};
</script>
