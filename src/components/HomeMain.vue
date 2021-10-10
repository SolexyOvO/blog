<template>
  <div>
    <top-carousel></top-carousel>
    <blog-pages></blog-pages>
  </div>
</template>

<script>
import TopCarousel from "./HomeMain/TopCarousel.vue"
import BlogPages from './HomeMain/BlogPages.vue'
export default {
  name: 'HomeMain',
  components:{
    TopCarousel,
    BlogPages,
  },
}
</script>

<style>

</style>