<template>
  <div>
    博客展示
    {{$route.params.id}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Blog',
}
</script>

<style>

</style>