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
  <div class="help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
  </div>
</template>