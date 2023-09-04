<script setup>
   
</script>
<template>
    <div class="help">
      <h1>{{ pageName }}</h1>
      <p>{{ pageDecription }}</p>
      <div class="filter">
        <h3>Filter</h3>
        <input type="text" name="" id="" v-model="findLangs">
        <ul>
          <li v-for="lang in filterLangs" :key="lang.id">
            {{ lang }}
          </li>
        </ul>
      </div>
    </div>
</template>
  
<script>
export default {
      data() {
        return {
          pageName: 'Help',
          pageDecription: "This is an Help page",
          findLangs: '',
          langs: [
            'HTML', 'SCSS', 'CSS', 'JS', 'JAVA', 'Py','HTML', 'SCSS', 'CSS', 'JS', 'JAVA', 'Py'
          ]
        }
      },
      computed: {
        filterLangs : function() {
          var filtering = new RegExp(this.findLangs, 'i');
          return this.langs.filter(function(el) {
            return el.match(filtering);
          })
        }
      }
  }
</script>

  <style lang="scss" scoped>
    .filter {
      input {
        outline: none;
        border: 1px solid #333;
        width: 300px;
        padding: 5px;
        background-color: #333;
        color: white;
        font-size: 16px;
        border-radius: 2px;
      }
      ul {
        list-style: none;
        width: 500px;
        margin: auto;
        background-color: #333;
        padding: 10px;
        display: flex;
        justify-content: start;
        align-items: center;
        border-radius: 3px;
        margin-top: 20px;
        color: white;
        flex-wrap: wrap;
        li {
          width: initial !important;
          height: initial !important;
          padding: 5px;
          background-color: #42b983;
          border-radius: 2px;
          font-weight: bold;
          margin: {
            bottom: 5px;
            right: 5px;
          }
        }
      }
    }

  </style>
  