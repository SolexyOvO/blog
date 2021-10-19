<template>
  <div>
    <el-card class="blog-details">
      <div slot="header" class="blog-title" style=" text-align: center;">
        <span >{{ blog.title }}</span>
      </div>
      <div class="blog-item">
        <p v-html="blog.content"></p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ShowBlog",
  data() {
    return {
      blog: {},
    };
  },
  computed: {},
  beforeMount() {
    for (let i of this.$store.state.blog) {
      if (i.id == this.$route.params.id) {
        this.blog = i;
      }
    }
  },
};
</script>

<style>
.blog-item {
  min-height: 750px;
 
}
</style>
