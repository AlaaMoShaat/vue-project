<script setup>
defineProps({
    pageName:{ 
      type: String,
      required: true 
    },
    pageDes:{ 
      type: String,
      required: true 
    },  
})
</script>

<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
  </div>
</template>