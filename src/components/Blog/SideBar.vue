<script setup>
defineProps({
  event:{ 
      type: Number
  },
  company:{ 
      type: String
  },
  university:{ 
      type: String
  },
  time:{ 
      type: String
  },
  palce:{ 
      type: String
  }
})

</script>

<template>
  <div class="sidebar-wigdets">
    <div class="card" style="width: 25rem">
  <h2 class="card-title lead p-4 border-bottom" style="font-weight: 600">
    {{ event }}
  </h2>
  <div class="pane border-bottom p-3">
    <i class="far fa-3x fa-calendar-alt text-danger ms-2" aria-hidden="true"></i>
    <div class="ms-3">
      <h2 class="card-title mb-1 lead" style="font-weight: 600">
        {{ company }}
      </h2>
      <p class="card-text mb-2">{{ university }}</p>
      <p class="card-text mb-0 small text-muted">{{ time }}</p>
      <p class="card-text mb-0 small text-muted">
        {{ palce }}
      </p>
    </div>
  </div>
  <p class="card-text p-4 text-center pointer border-top">See All</p>
</div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          title: 'test side bar',
        }
      },
      computed: {
        titleUpperCase () {
          return this.title.toUpperCase();
        }
      }
    }

</script>

<style lang="scss" scoped>
.sidebar-wigdets {
  margin-bottom: 20px;
}
</style>