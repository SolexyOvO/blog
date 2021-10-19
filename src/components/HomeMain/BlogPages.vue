<template>
  <div class="block">


    <div v-for="i in blogShow" :key="i.id" @click="$router.push({name:'Blog',params:{id:i.id}})">
      <template>
        <v-card class="mx-auto" max-width="1500" style="margin: 40px 0">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>{{i.title}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">{{i.time}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{i.description}}</div>
          </v-card-text>
        </v-card>
      </template>
    </div>

    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :total="pageTotal"
      :page-size="pageSize"
      :current-page="currentPage"
    >
    </el-pagination>
  </div>
</template>

<script>
import BlogCard from "./BlogCard.vue";
export default {
  name: "BlogPages",
  components: {
    BlogCard,
  },
  data() {
    return {
      pageTotal: 10,
      pageSize: 5,
      currentPage: 1,
      // blog:[],
      // blogShow:[],
    };
  },
  computed: {
    blogShow() {
      return this.$store.state.blog.slice(
        (this.currentPage - 1) * 5,
        (this.currentPage - 1) * 5 + 5
      );
    },
  },
  mounted() {},
  beforeCreate() {
    let _this = this;
    _this.$http.get(_this.$store.state.baseurl + "/getBlog").then((res) => {
      _this.$store.state.blog = res.body;
      this.pageTotal = res.body.length;
    });
  },
  methods: {
    handleCurrentChange(pages) {
      this.currentPage = pages;
      console.log(pages);
      this.blogShow = this.blog.slice(
        (this.currentPage - 1) * 5,
        (this.currentPage - 1) * 5 + 5
      );
    },
  },
};
</script>

<style>
.el-pagination {
  text-align: center;
}
</style>
