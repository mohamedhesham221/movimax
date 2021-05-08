<template>
  <div>
    <button class="top" @click="top" :class="{showBtn: show}">
      <b-icon-chevron-double-up />
    </button>
  </div>
</template>
<script>
import { BIconChevronDoubleUp } from 'bootstrap-vue';

export default {
  name: 'topBtn',
  data() {
    return {
      show: false,
    };
  },
  components: {
    BIconChevronDoubleUp,
  },
  created() {
    window.addEventListener('scroll', this.handler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handler);
  },
  methods: {
    top() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    handler() {
      if (window.scrollY > 500) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.top {
  width: 40px;
  height: 0;
  position: fixed;
  right: 10px;
  bottom: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;
  font: bold 1rem Arial, Helvetica, sans-serif;
  opacity: 0;
  background-color: #f2f2f2c9;
  box-shadow: 0 0 5px #c9c3c3;
  transition: all .5s ease-in;
}
.showBtn {
  height: 40px;
  opacity: .5;
}
</style>
