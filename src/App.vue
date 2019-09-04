<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  name: "App",
  data() {
    return {};
  },
  mounted() {
    // if (location.protocol != "https:") {
    //   location.href =
    //     "https:" +
    //     window.location.href.substring(window.location.protocol.length);
    // }
  }
};
</script>

<style lang="scss">
@import "./assets/css/sprite.css";
@import "./assets/css/app.css";
</style>



    