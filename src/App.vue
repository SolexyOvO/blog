<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <blog-footer></blog-footer>
    </footer>
  </div>
</template>

<script>
import BlogFooter from "./components/BlogFooter.vue";
export default {
  name: "app",
  components: {
    BlogFooter,
  },
};
</script>

<style>
#app::before {
  background: url("./assets/image/background1.jpg");
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  content: "";
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  opacity: 0.5;
}
</style>
