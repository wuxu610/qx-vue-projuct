<template>
      <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <RouterLink to="/articleList">Article List</RouterLink>
      </div>
    <div class="home">
        <h2 >廖艺林</h2>
        <h3>2203840133</h3>
        <RouterLink to="/articleList">第一次作业</RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>
.nav {
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff; 
  padding: 10px; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
  display: flex; 
  justify-content: space-around; 
  z-index: 1000; 
}
.home {
    text-align: center;
    font-size: 20px;
}
</style>