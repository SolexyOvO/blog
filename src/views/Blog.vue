<template>
  <div>
    <el-container>
      <el-header>
        <blog-header></blog-header>
      </el-header>
      <el-container>
      <el-aside width="250px"></el-aside>
      <el-main class="blog-details">
        <show-blog ></show-blog>
      </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import BlogHeader from "../components/BlogHeader.vue";
import ShowBlog from "../components/BlogDetails/ShowBlog.vue";
export default {
  name: "Blog",
  components: {
    BlogHeader,
    ShowBlog,
  },
};
</script>

<style>
.blog-details {
  /* text-align: center; */
  width: 80%!important;
  min-height: 800px;
  /* margin-left: 100px; */
}

</style>
