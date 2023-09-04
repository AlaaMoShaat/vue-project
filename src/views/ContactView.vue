<script setup>
import CounterComp from '../components/CounterComp.vue'
</script>
<template>
  <div class="contact" :style="{ '--main-color': mainColor, '--main-font-size': mainFontSize }">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDecription }}</p>
    <ul class="active-tab">
      <li @click="active = '1'" :class="[active === '1' ? 'active' : '']">
        Switch Color & Font Size
      </li>
      <li @click="active = '2'" :class="[active === '2' ? 'active' : '']">To Do List</li>
    </ul>
    <transition name="fade">
      <ul class="switch-color" v-if="active === '1'">
        <li data-color="red" @click="setColor"></li>
        <li data-color="navy" @click="setColor"></li>
        <li data-color="chartreuse" @click="setColor"></li>
        <li data-color="fuchsia" @click="setColor"></li>
        <li data-color="black" @click="setColor"></li>
      </ul>
    </transition>
    <transition name="fade">
      <ul class="switch-font-size" v-if="active === '1'">
        <li data-font="12px" @click="setFontSize">12</li>
        <li data-font="16px" @click="setFontSize">16</li>
        <li data-font="18px" @click="setFontSize">18</li>
        <li data-font="20px" @click="setFontSize">20</li>
        <li data-font="22px" @click="setFontSize">22</li>
      </ul>
    </transition>
    <transition name="fade">
      <div class="changes" v-if="active === '1'">
        <div>font Size = {{ mainFontSize }}</div>
        <div>font Size = {{ mainFontSize }}</div>
        <div>font Size = {{ mainFontSize }}</div>
        <div>font Size = {{ mainFontSize }}</div>
        <div>font Size = {{ mainFontSize }}</div>
      </div>
    </transition>
    <transition name="fade">
      <div class="to-do-list" v-if="active === '2'">
        <h2>To Do List</h2>
        <form action="">
          <input type="text" class="input" name="" id="" v-model="taskText" />
          <input
            type="submit"
            class="add"
            value="Add"
            @click.prevent="addTask"
            :disabled="!taskText"
          />
        </form>
        <div class="tasks">
          <div
            class="task"
            v-for="(task, index) in tasks"
            :key="task.index"
            @click.prevent="toggle"
          >
            {{ task.words }}
            <button class="del" @click.stop="deleteTask(index)">Delete</button>
            <CounterComp />
          </div>
        </div>
        <button v-if="tasks.length > 1" @click.prevent="deleteAll" class="remove-all">
          Remove All
        </button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageName: 'Contact',
      pageDecription: 'This is an Contact page',
      mainColor: 'red',
      mainFontSize: '12px',
      tasks: [],
      taskText: '',
      count: 0,
      active: '1'
    }
  },
  methods: {
    setColor: function (event) {
      this.mainColor = event.target.getAttribute('data-color')
    },
    setFontSize: function (event) {
      this.mainFontSize = event.target.getAttribute('data-font')
    },
    addTask: function () {
      this.tasks.push({ words: this.taskText, done: false })
      this.taskText = ''
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1)
    },
    deleteAll: function () {
      this.tasks = []
    },
    toggle: function (event) {
      event.target.classList.toggle('done')
    }
  }
}
</script>
<style>
.active-tab li {
  padding: 5px;
  background-color: #6884a3;
  margin-left: 5px;
  width: initial !important;
  height: initial !important;
}
.active-tab .active {
  background-color: #243b55;
}
ul {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
ul > li {
  width: 20px;
  height: 20px;
  list-style: none;
  margin: 2px;
  cursor: pointer;
  border-radius: 4px;
  color: white;
}
.switch-font-size > li {
  background-color: black;
  color: white;
}
.switch-color > li:first-child {
  background-color: red;
}
.switch-color > li:nth-child(2) {
  background-color: navy;
}
.switch-color > li:nth-child(3) {
  background-color: chartreuse;
}
.switch-color > li:nth-child(4) {
  background-color: fuchsia;
}
.switch-color > li:last-child {
  background-color: black;
}
.changes {
  display: flex;
  justify-content: space-between;
}
.changes > div {
  padding: 10px;
  width: calc((100% / 5) - 30px);
  background-color: var(--main-color);
  font-size: var(--main-font-size);
}

/* to-do */
.to-do-list {
  padding: 10px;
  width: 60%;
  margin: auto;
  text-align: center;
}
@media (max-width: 500px) {
  .to-do-list {
    width: 90%;
  }
}
.to-do-list h2 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
  color: #0c151d;
}
.to-do-list form {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: #0c151d;
  border-radius: 5px;
}
.to-do-list form .input {
  width: 70%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #6884a3;
  color: white;
}
.to-do-list form .add {
  width: 20%;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  background-color: crimson;
  border-radius: 5px;
  opacity: 0.9;
  color: white;
}
.to-do-list .remove-all {
  padding: 10px;
  font-weight: bold;
  border: none;
  background-color: crimson;
  border-radius: 5px;
  opacity: 0.9;
  color: white;
  margin: 20px;
}
.to-do-list form .add:hover,
.to-do-list .remove-all:hover {
  cursor: pointer;
  opacity: 1;
}
.tasks {
  min-height: 40px;
  border-radius: 5px;
  background-color: #0c151d;
  padding: 10px;
}
.tasks .task {
  width: 100%;
  padding: 10px;
  background-color: #243b55;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 5px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.counter {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 4px;
  padding-bottom: 0;
  margin-bottom: 0;
}
.counter > button {
  padding: 10px 20px !important;
  font-size: 20px !important;
  text-align: center !important;
}
.counter > div {
  padding: 15px;
}
.tasks .task:not(:last-child) {
  margin-bottom: 15px;
}
.tasks .task.done {
  opacity: 0.5;
  text-decoration: line-through;
}
.tasks .task button {
  padding: 4px;
  color: white;
  font-weight: bold;
  font-size: 11px;
  border-radius: 5px;
  border: 0;
  outline: 0;
  background-color: crimson;
  opacity: 0.9;
}
.tasks .task button:hover {
  cursor: pointer;
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
