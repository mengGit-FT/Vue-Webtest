<template>
  <div>
    <nav
      class="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-cyan-500/20 shadow-2xl">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <router-link to="/" class="flex items-center gap-2 group">
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative bg-slate-900 px-3 py-2 rounded-lg">
                <span
                  class="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                  >AQ</span
                >
              </div>
            </div>
            <div class="hidden sm:block">
              <h1 class="text-xl font-black text-white">AquaFlow</h1>
              <p class="text-xs text-cyan-400">Premium Hydration</p>
            </div>
          </router-link>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-1">
            <router-link
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="relative group px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300"
              :class="
                isActive(link.path)
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-cyan-300'
              ">
              <span>{{ link.name }}</span>
              <!-- Active indicator -->
              <div
                v-if="isActive(link.path)"
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
              <!-- Hover indicator -->
              <div
                v-else
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full group-hover:w-full transition-all duration-300"></div>
            </router-link>
          </div>

          <!-- Right side actions -->
          <div class="flex items-center gap-4">
            <!-- Cart Icon -->
            <router-link
              to="/cart"
              class="relative group hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all">
              <svg
                class="w-5 h-5 text-cyan-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="text-sm font-bold text-cyan-300">Cart</span>
              <span
                v-if="cartCount > 0"
                class="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {{ cartCount }}
              </span>
            </router-link>

            <!-- CTA Button -->
            <router-link
              to="/products"
              class="hidden sm:block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 text-sm uppercase tracking-widest">
              Shop Now
            </router-link>

            <!-- Mobile Menu Toggle -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="md:hidden relative w-10 h-10 flex items-center justify-center">
              <div class="flex flex-col justify-center items-center gap-1.5">
                <span
                  :class="[
                    'w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full transition-all duration-300',
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : '',
                  ]"></span>
                <span
                  :class="[
                    'w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full transition-all duration-300',
                    mobileMenuOpen ? 'opacity-0' : '',
                  ]"></span>
                <span
                  :class="[
                    'w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full transition-all duration-300',
                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : '',
                  ]"></span>
              </div>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <transition
          enter-active-class="transition-all duration-300"
          leave-active-class="transition-all duration-300"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-96"
          leave-from-class="opacity-100 max-h-96"
          leave-to-class="opacity-0 max-h-0">
          <div
            v-if="mobileMenuOpen"
            class="md:hidden overflow-hidden border-t border-cyan-500/20 mt-4 pt-4">
            <div class="space-y-2">
              <router-link
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                class="block px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-all duration-300"
                :class="
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                    : 'text-slate-300 hover:bg-white/5'
                "
                @click="mobileMenuOpen = false">
                {{ link.name }}
              </router-link>
              <button
                class="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all uppercase tracking-widest text-sm"
                @click="mobileMenuOpen = false">
                Shop Now
              </button>
            </div>
          </div>
        </transition>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
        :style="{
          width: scrollProgress + '%',
          transition: 'width 0.1s ease-out',
        }"></div>
    </nav>

    <!-- Spacer for fixed navbar -->
    <div class="h-20"></div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onUnmounted, watch } from "vue";
  import { useRoute } from "vue-router";
  import { cartStore } from "../store";

  const route = useRoute();
  const mobileMenuOpen = ref(false);
  const scrollProgress = ref(0);

  const cartCount = computed(() => cartStore.getTotalItems());

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Check if current route is active
  const isActive = (path) => {
    return route.path === path;
  };

  // Handle scroll progress bar
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
    scrollProgress.value = progress;
  };

  // Close mobile menu on route change
  const closeMenu = () => {
    mobileMenuOpen.value = false;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  // Watch for route changes to close mobile menu
  watch(route, () => {
    closeMenu();
  });
</script>

<style scoped>
  /* Smooth transitions */
  nav {
    transition: all 0.3s ease;
  }

  /* Active link animation */
  .router-link-active {
    animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse-glow {
    0%,
    100% {
      text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
    }
    50% {
      text-shadow: 0 0 20px rgba(6, 182, 212, 0.8);
    }
  }

  /* Mobile menu animation */
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: all 0.3s ease;
  }

  .mobile-menu-enter-from {
    opacity: 0;
    max-height: 0;
  }

  .mobile-menu-enter-to {
    opacity: 1;
    max-height: 500px;
  }

  .mobile-menu-leave-from {
    opacity: 1;
    max-height: 500px;
  }

  .mobile-menu-leave-to {
    opacity: 0;
    max-height: 0;
  }
</style>
