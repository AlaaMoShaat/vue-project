<script setup>
    import BlogPosts from '../components/Blog/BlogPosts.vue'
    import SideBar from '../components/Blog/SideBar.vue'
   
</script>
<template>
    <div class="blog">
      <h1>{{ pageName }}</h1>
      <p>{{ pageDecription }}</p>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="posts-area">
              <BlogPosts v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :auther="post.auther"
              :cat="post.category"/>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sidebar">
              <SideBar v-for="wigdet in wigdets" 
              :key="wigdet.id"
              :event="wigdet.event"
              :company="wigdet.company"
              :university="wigdet.university"
              :time="wigdet.time"
              :place="wigdet.place"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import JosnPosts from '../json/MOCK_DATA.json';
import JosnWigdets from '../json/jsonWigdets.json'

  export default {
      data() {
        return {
          pageName: 'Blog',
          pageDecription: "This is an blog page",
          posts: JosnPosts,
          wigdets: JosnWigdets
        }
      },
      directives: {
      font: {
        mounted: (el,binding) => {
          el.style.fontSize = binding.value + 'px';

          if(binding.modifiers.bold) {
            el.style.fontWeight = 'bold';
          }

          if(binding.modifiers.orange) {
            el.style.color = 'orange';
          }
        }
      }
    }
  }
</script>

  <style lang="scss" scoped>
  .blog > p {
    font: {
      size: 18px;
      weight: bold; 
    };
  }
  </style>
  