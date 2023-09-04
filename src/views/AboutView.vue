<script setup>
</script>
<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDecription }}</p>
    <input type="text" v-model="userName">
    <p>{{ valdUserName }}</p>
  </div>
</template>


<script>
  export default {
      data() {
        return {
          pageName: 'About',
          pageDecription: "This is an About page",
          userName:'',
        }
      },
      computed:{
        valdUserName: function() {
          var regexPattern =/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
          if(regexPattern.test(this.userName)) {
            return "UserName is Valid";
          }else{
            return "Enter a Valid UserName like: AlaaShaat01";
          }
        }
      } 
  }
</script>
<style>

</style>
