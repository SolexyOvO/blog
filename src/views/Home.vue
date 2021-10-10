<template>
  <div>
    <el-container>
      <el-header>
        <blog-header></blog-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <left-nav></left-nav>
        </el-aside>
        <el-container>
          <el-main>
            <home-main></home-main>
          </el-main>
        </el-container>
        <el-aside width="200px">
          <right-nav></right-nav>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftNav from '../components/navigation/LeftNav.vue'
import BlogHeader  from '../components/BlogHeader.vue'
import RightNav from '../components/navigation/RightNav.vue'
import HomeMain from "../components/HomeMain.vue"
export default {
  name: "Home",
  components:{
    LeftNav,
    BlogHeader,
    RightNav,
    HomeMain,
  },
};
</script>

<style scoped>
/* .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
