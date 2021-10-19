<template>
  <div class="top-nav">
    <el-menu
      :default-active="activeIndex2"
      class="nav-top"
      mode="horizontal"
      :router="true"
      @select="handleSelect"
      background-color="#87CEFA"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="100" route="/"><el-image
          style="width: 50px; height: 50px;"
          class="my-logo"
          :src="require('../../assets/logo.png')"
          fit="cover"
        ></el-image
      ></el-menu-item>
      <el-menu-item index="1" class="index-1" route="/">主页</el-menu-item>
      <el-menu-item index="2" class="index-2" route="/blogadd">添加博客</el-menu-item>
      <!-- <el-menu-item index="2" class="index-2">友人帐</el-menu-item> -->
      <el-menu-item index="3" class="index-3"><el-avatar :size="50" :src="avator"></el-avatar></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      activeIndex2: "1",
      avator:require("../../assets/image/qft3.png")
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  text-align: center !important;
  width: 100%;
  z-index: 999;
  background-color: var(--module-bg);
  backdrop-filter: blur(5px);
}
.el-menu-item {
  margin: 0 20px !important;
}
.index-3{
  position: fixed !important;
  top : 0!important;
  right: 10px!important;
}
</style>
