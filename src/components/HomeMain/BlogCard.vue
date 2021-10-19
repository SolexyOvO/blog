<template>
<div class="blog-card" @click="$router.push({name: 'Blog',params:{id:blog.id}})">
  <!-- <el-card class="box-card">
    <div slot="header" class="clearfix">
        <el-link :underline="false" @click="$router.push({name: 'Blog',params:{id:blog.id}})">{{blog.title}}</el-link>
    </div>
    <div class="text item">
      {{blog.description}}
    </div>
  </el-card> -->
  <!-- <nx-card
  title="blog.title"
  :description="blog.description"
  ></nx-card> -->
  <InforCard 
      :frontTitle="blog.title"
      :frontData="blog.description"
      :backTitle="blog.title"
      :backData="blog.description" />

<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>
  </v-card>
</template>

</div>

</template>

<script>
import InforCard from 'vue-info-card'
export default {
  name: "BlogCard",
  props:['blog'],
  components:{
    InforCard
  },
  data(){
    return{
      blogcardimg:require('../../assets/logo.png')
    }

  },
};
</script>

<style>
.blog-card{
  max-height: 600px;
  margin-top: 10px;
}
.infor-card{
  max-height: 130px;
}
</style>
