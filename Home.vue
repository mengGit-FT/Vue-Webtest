<template>
  <div
    class="w-full h-screen bg-linear-to-br from-blue-300 via-gray-600 to-cyan-800">
    <h1>Welcome to the Home Page</h1>
    <div></div>
    <h1>Counter: {{ message }}</h1>
    <button
      class="active:bg-blue-300 m-3 shadow-lg bg-white rounded-lg hover:bg-gray-400 transition-all duration-300 p-2"
      @click="increment">
      Increment
    </button>
    <button
      class="active:bg-blue-300 m-3 shadow-lg bg-white rounded-lg hover:bg-gray-400 transition-all duration-300 p-2"
      @click="decrement">
      Decrement
    </button>
  </div>
</template>
<script>
  import { ref } from "vue";
  export default {
    setup() {
      const message = ref(0);
      const increment = () => {
        message.value++;
      };
      const decrement = () => {
        message.value--;
      };
      return {
        message,
        increment,
        decrement,
      };
    },
  };
</script>
