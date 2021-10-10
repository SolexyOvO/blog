<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="i in pageSize" timestamp="2018/4/12" placement="top" :key="i">
        <blog-card :title="i" :description="i" :id="i"></blog-card>
      </el-timeline-item>
    </el-timeline>
    <el-pagination 
    background 
    :page-size="pageSize"
    layout="prev, pager, next" 
    :total="pageTotal">
    </el-pagination>
  </div>
</template>

<script>
import BlogCard from './BlogCard.vue'
export default {
  name: "BlogPages",
  components:{
    BlogCard,
  },
  data(){
    return{
      pageTotal: 10,
      pageSize: 5,
    }
  }
};
</script>

<style>
  .el-pagination{
    text-align: center;
  }
</style>
