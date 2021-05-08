<template>
  <div>
    <section class="not__found">
    </section>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
};
</script>
<style lang="scss" scoped>
.not__found {
 width: 100%;
 height: 100vh;
 background-image: url('../assets/not-found.jpg');
 background-repeat: no-repeat;
 background-size: cover;
 background-position: 50% 50%;
 position: absolute;
 top: 0;
 left: 0;
 z-index: 99999;
}
</style>
