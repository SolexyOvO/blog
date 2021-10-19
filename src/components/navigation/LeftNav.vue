<template>
  <div class="nav-left">
    
    <el-menu
      default-active="2"
      class="nav-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="2">
        <i class="el-icon-coffee-cup"></i>
        <span slot="title">嘻</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-ship"></i>
        <span slot="title">嘻</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-service"></i>
        <span slot="title">哈</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-lollipop"></i>
        <span slot="title">哈</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
/* .nav-left {
  position: fixed;
  top: 100px;
  left: 50px;
  height: 100%;
  width: 110px;
} */
.nav-menu {
  min-height: 800px;
  border-right: 0;

}

.el-menu {
  border-right: 0!important;
}
</style>
