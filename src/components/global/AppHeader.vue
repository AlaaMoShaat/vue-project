<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img class="logo" src="@/assets/logo.svg" width="60" height="60" alt="Vue logo" >
      </div>
      <nav class="text-right">
        <RouterLink to="/" exact>Home</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/help">Help</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/repos">Repos</RouterLink>
      </nav>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.header {
  background-color: #333;
  color: white;
  overflow: hidden;
  .logo {
    font-size: 24px;
    padding: 10px;
    float: left;
    width: 200px;
    img {
      padding: 0;
    }
  }
  nav {
    float: left;
    padding: 13px;
    width: calc(100% - 200px);
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    a {
      position: relative;
      font-weight: bold;
      color: #215a92;
      padding: 10px;
      font-size: 18px;
      display: inline-block;
      &.router-link-exact-active {
        color: #42b983;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #215a92;
        display: none;
      }
      &:hover::after {
        display: block;
      }
      &:focus::after {
        background-color: #42b983;
      }
    }
  }
}

</style>
