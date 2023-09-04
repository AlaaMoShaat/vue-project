<script setup>
import axios from 'axios'
</script>
<template>
  <div class="help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDecription }}</p>
    <input type="text" name="" id="" v-model="username" />
    <button @click.prevent="getRepos">Get Repos</button>
    <div class="repos" v-for="repo in repos" :key="repo.id">
      <h4>{{ repo.name }}</h4>
    </div>
    <div class="calc-text">
      <h4>Write Your Message ({{ maxLenght }} Characters)</h4>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        @input="countChars"
        v-model="message"
        :maxlength="maxLenght"
      ></textarea>
      <span class="counter" :class="{ zero: reachZero }">
        Left | <span>{{ remChars }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageName: 'Repos',
      pageDecription: 'This is an Repos page',
      username: null,
      repos: null,
      maxLenght: 10,
      remChars: 10,
      message: null,
      reachZero: false
    }
  },
  methods: {
    getRepos: async function () {
      try {
        const response = await axios.get(`https://api.github.com/users/${this.username}/repos`)
        this.repos = response.data
      } catch (err) {
        console.log('error is ' + err)
      }
    },
    countChars: function () {
      this.remChars = this.maxLenght - this.message.length
      this.reachZero = this.remChars === 0
    }
  }
}
</script>

<style lang="scss" scoped>
.calc-text {
  margin: 20px auto;
  width: 400px;
  text-align: center;
  textarea {
    width: 400px;
    height: 200px;
    resize: none;
    background-color: #eee;
    border: 1px solid white;
  }
  .counter {
    display: block;
    text-align: right;
    padding-top: 10px;
  }
  .counter.zero span {
    color: red;
  }
}
</style>
