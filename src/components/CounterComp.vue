<template>
  <div class="counter">
    <button class="increment-btn" @click.prevent.stop="increment">+</button>
    <div class="counter-value">{{ count }}</div>
    <button class="decrement-btn" @click.prevent.stop="decrement">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
