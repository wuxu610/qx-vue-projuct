
<script>
import { RouterLink } from 'vue-router';


</script>

<template>
  <div class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/test">Test</RouterLink>
    <!-- <RouterLink to="/about">About</RouterLink> -->
    <RouterLink to="/articleList">Article List</RouterLink>
  </div>
  <div>
    <!-- 页面组件的占位 iframe -->
    <RouterView></RouterView> 
  </div>
  
</template>


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

</style>