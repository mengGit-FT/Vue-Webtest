<template>
  <div
    class="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white font-sans pt-20">
    <div class="max-w-7xl mx-auto px-6 py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-black mb-6">
          Your <span class="text-cyan-400">Shopping Cart</span>
        </h1>
        <p class="text-xl text-slate-300">Review and manage your products</p>
      </div>

      <div v-if="cartStore.items.length === 0" class="text-center py-20">
        <div class="text-7xl mb-6">🛒</div>
        <h2 class="text-3xl font-bold mb-4">Your cart is empty</h2>
        <p class="text-slate-400 mb-8">
          Start shopping to fill your cart with our premium beverages
        </p>
        <router-link
          to="/products"
          class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all">
          Continue Shopping
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <div class="space-y-6">
            <div
              v-for="item in cartStore.items"
              :key="item.id"
              class="p-6 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all">
              <div class="flex items-center gap-6">
                <!-- Product Image/Icon -->
                <div
                  class="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center text-4xl flex-shrink-0">
                  {{ item.emoji }}
                </div>

                <!-- Product Details -->
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-2">{{ item.name }}</h3>
                  <p class="text-slate-400 mb-3">{{ item.description }}</p>
                  <div class="flex items-center gap-4">
                    <span class="text-2xl font-bold text-cyan-400"
                      >${{ item.price }}</span
                    >
                    <span class="text-sm text-slate-400">per unit</span>
                  </div>
                </div>

                <!-- Quantity Controls -->
                <div class="flex flex-col items-center gap-3">
                  <div
                    class="flex items-center gap-3 bg-slate-800/50 rounded-lg p-2">
                    <button
                      @click="cartStore.decrementQuantity(item.id)"
                      class="w-8 h-8 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all flex items-center justify-center font-bold">
                      −
                    </button>
                    <span class="w-8 text-center font-bold">{{
                      item.quantity
                    }}</span>
                    <button
                      @click="cartStore.incrementQuantity(item.id)"
                      class="w-8 h-8 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all flex items-center justify-center font-bold">
                      +
                    </button>
                  </div>
                  <span class="text-sm text-slate-400"
                    >{{ item.quantity }} x ${{ item.price }}</span
                  >
                  <button
                    @click="cartStore.removeFromCart(item.id)"
                    class="px-3 py-1 text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-all">
                    Remove
                  </button>
                </div>

                <!-- Subtotal -->
                <div class="text-right">
                  <p class="text-sm text-slate-400 mb-2">Subtotal</p>
                  <p class="text-2xl font-bold text-cyan-400">
                    ${{ (item.price * item.quantity).toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cart Summary -->
        <div class="lg:col-span-1">
          <div
            class="sticky top-24 p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl">
            <h2 class="text-2xl font-black mb-6">Order Summary</h2>

            <div class="space-y-4 mb-6 pb-6 border-b border-cyan-500/20">
              <div class="flex justify-between">
                <span class="text-slate-400">Subtotal</span>
                <span class="font-bold">${{ subtotal }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Shipping</span>
                <span class="font-bold text-green-400">FREE</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Tax (10%)</span>
                <span class="font-bold">${{ tax }}</span>
              </div>
            </div>

            <div class="mb-6 pb-6 border-b border-cyan-500/20">
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold">Total</span>
                <span class="text-3xl font-black text-cyan-400"
                  >${{ total }}</span
                >
              </div>
            </div>

            <div class="space-y-3">
              <button
                class="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
                Proceed to Checkout
              </button>
              <router-link
                to="/products"
                class="block text-center py-3 border border-cyan-400/30 text-cyan-300 font-bold rounded-full hover:bg-cyan-400/10 transition-all">
                Continue Shopping
              </router-link>
            </div>

            <!-- Trust Badges -->
            <div
              class="mt-8 pt-6 border-t border-cyan-500/20 space-y-2 text-center text-sm text-slate-400">
              <p>✓ Secure Checkout</p>
              <p>✓ Fast Shipping</p>
              <p>✓ 30-day Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { cartStore } from "../store";

  const subtotal = computed(() => cartStore.getTotalPrice());
  const tax = computed(() => (parseFloat(subtotal.value) * 0.1).toFixed(2));
  const total = computed(() =>
    (parseFloat(subtotal.value) + parseFloat(tax.value)).toFixed(2),
  );
</script>
