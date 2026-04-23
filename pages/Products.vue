<template>
  <div
    class="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white font-sans">
    <!-- Notification -->
    <transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4">
      <div
        v-if="addedNotification"
        class="fixed top-24 right-6 z-50 px-6 py-4 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 text-black font-bold shadow-2xl">
        ✓ {{ addedNotification }} added to cart!
      </div>
    </transition>

    <!-- Navigation -->
    <Navbar />

    <!-- Products Hero -->
    <section class="relative px-6 py-20 md:py-32 pt-32">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-black mb-6">
          Our <span class="text-cyan-400">Product Line</span>
        </h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
          Explore our complete collection of premium hydration beverages crafted
          for peak performance
        </p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20 px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10">
            <div
              class="text-6xl mb-4 group-hover:scale-125 transition-transform">
              {{ product.emoji }}
            </div>
            <h3 class="text-2xl font-bold mb-2">{{ product.name }}</h3>
            <p class="text-slate-300 mb-4">{{ product.description }}</p>
            <div
              class="mb-4 p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
              <p class="text-sm text-blue-300">✓ Natural Ingredients</p>
              <p class="text-sm text-blue-300">✓ 500ml Premium Bottle</p>
            </div>
            <div class="flex justify-between items-center gap-4">
              <div>
                <p class="text-sm text-slate-400">Price</p>
                <span class="text-3xl font-bold text-cyan-400"
                  >${{ product.price }}</span
                >
              </div>
              <button
                @click="addProductToCart(product)"
                class="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 whitespace-nowrap">
                + Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Features -->
    <section
      class="py-20 px-6 bg-gradient-to-r from-blue-950/50 to-cyan-950/50 border-y border-cyan-500/20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-black text-center mb-16">
          Why Choose Our <span class="text-cyan-400">Products?</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="benefit in benefits"
            :key="benefit.id"
            class="text-center">
            <div class="text-5xl mb-4">{{ benefit.icon }}</div>
            <h3 class="text-xl font-bold mb-2">{{ benefit.title }}</h3>
            <p class="text-slate-300">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Navbar from "../components/Navbar.vue";
  import { cartStore } from "../store";

  const addedNotification = ref(null);

  const products = [
    {
      id: 1,
      name: "Tropical Mango",
      emoji: "🥭",
      description: "Sweet and exotic mango burst with natural electrolytes",
      price: 3.99,
    },
    {
      id: 2,
      name: "Berry Blast",
      emoji: "🫐",
      description: "Mixed berries with a zing and performance boost",
      price: 3.99,
    },
    {
      id: 3,
      name: "Citrus Wave",
      emoji: "🍋",
      description: "Refreshing lemon and lime perfect for summer",
      price: 3.99,
    },
    {
      id: 4,
      name: "Mint Chill",
      emoji: "🌿",
      description: "Cool and invigorating mint for refreshment",
      price: 3.99,
    },
    {
      id: 5,
      name: "Tropical Paradise",
      emoji: "🍹",
      description: "Blend of tropical fruits with premium hydration",
      price: 4.99,
    },
    {
      id: 6,
      name: "Energy Boost",
      emoji: "⚡",
      description: "Enhanced formula for athletes and active lifestyle",
      price: 5.99,
    },
  ];

  const benefits = [
    {
      id: 1,
      icon: "💪",
      title: "Performance",
      description: "Scientifically formulated for peak athletic performance",
    },
    {
      id: 2,
      icon: "🌿",
      title: "Natural",
      description: "100% natural ingredients with no artificial additives",
    },
    {
      id: 3,
      icon: "⚡",
      title: "Energy",
      description: "Sustained energy boost without crashes",
    },
    {
      id: 4,
      icon: "✨",
      title: "Premium",
      description: "Premium quality crafted for excellence",
    },
  ];

  const addProductToCart = (product) => {
    cartStore.addToCart(product);
    // Show notification
    addedNotification.value = product.name;
    setTimeout(() => {
      addedNotification.value = null;
    }, 2000);
  };
</script>
