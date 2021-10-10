<template>
  <div>
    <carousel></carousel>
  </div>
</template>

<script>
import Carousel from '../RightCom/Carousel.vue'
export default {
  name: "RightNav",
  components:{
    Carousel,
  },
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style></style>
