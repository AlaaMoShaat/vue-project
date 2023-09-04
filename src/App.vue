<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/global/AppHeader.vue';
</script>

<template>
  <div class="app text-center">
  <AppHeader />
  <RouterView />
  </div>
</template>

<style scoped lang="scss">

</style>
