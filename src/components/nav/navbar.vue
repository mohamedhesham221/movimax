<template>
  <div>
      <img src="@/assets/logo.png" alt="LOGO" class="logo">
      <div class="nav__toggle d-block d-md-none" @click="toggleClass = !toggleClass"
      :class="{flip:toggleClass, flipReverse:!toggleClass}">
        <span :class="{forward1:toggleClass, back1:!toggleClass}"></span>
        <span :class="{forward2:toggleClass, back2:!toggleClass}"></span>
        <span :class="{forward3:toggleClass, back3:!toggleClass}"></span>
      </div>
    <div id="nav" class="text-center" :class="{activeNav:toggleClass}">
      <router-link to="/" class="nav-link">HOME</router-link>
      <router-link to="/movie" class="nav-link">MOVIE</router-link>
      <router-link to="/tv" class="nav-link">TV SHOW</router-link>
      <router-link to="/faq" class="nav-link">FAQ</router-link>
      <div class="person">
        <b-icon-person-circle class="avatar" />
        <span class="user-name">{{ gender == 'male'? 'mr.' : gender == 'female'? 'mrs.' : 'guest' }}
          &nbsp;{{ username }}</span>&nbsp;&nbsp;
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { BIconPersonCircle } from 'bootstrap-vue';
import EventBus from '../../main';

export default {
  name: 'Navbar',
  data() {
    return {
      toggleClass: false,
      username: '',
      gender: '',
    };
  },
  created() {
    this.username = window.localStorage.getItem('username');
    this.gender = window.localStorage.getItem('gender');
    EventBus.$on('accountUser', (val) => {
      this.username = val;
    });
    EventBus.$on('accountGender', (val) => {
      this.gender = val;
    });
  },
  components: {
    BIconPersonCircle,
  },
};
</script>
