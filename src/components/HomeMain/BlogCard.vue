<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
        <el-link :underline="false" @click="$router.push({name: 'Blog',params:{id}})">{{title}}</el-link>
    </div>
    <div class="text item">
      {{description}}
    </div>
  </el-card>
</template>

<script>
export default {
  name: "BlogCard",
  props:['title','description','id']
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card{
  width: 480px;
  height: 200px!important;
}
.box-card{
  background: url("../../assets/image/qft2.png");
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  min-width: 80px;
  z-index: -9;
  zoom: 1;
  content: '';
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  /* opacity:0.7; */
}

</style>
