<template>
  <div
    class="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white font-sans">
    <!-- Hero Section -->
    <section class="relative px-6 py-20 md:py-32 overflow-hidden">
      <!-- Animated Background Gradient -->
      <div class="absolute inset-0 -z-10">
        <div
          class="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div
        class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="z-10">
          <span
            class="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-sm font-bold mb-6">
            🥤 PREMIUM BEVERAGE
          </span>
          <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span
              class="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              AquaFlow
            </span>
            <br />
            <span class="text-white">Premium Hydration</span>
          </h1>
          <p
            class="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
            Experience the perfect blend of natural ingredients, electrolytes,
            and pure refreshment. Designed for athletes, professionals, and
            wellness enthusiasts.
          </p>
          <div class="flex gap-4">
            <button
              class="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
              Shop Now
            </button>
            <button
              class="px-8 py-4 border-2 border-cyan-400 text-cyan-300 font-bold rounded-full hover:bg-cyan-400/10 transition-all">
              Learn More
            </button>
          </div>
        </div>

        <!-- Right Product Display -->
        <div class="relative h-96 md:h-full flex items-center justify-center">
          <div class="relative">
            <!-- Rotating Background Ring -->
            <div
              class="absolute inset-0 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>

            <!-- Product Bottle -->
            <div
              class="relative w-64 h-96 bg-gradient-to-b from-blue-200/30 to-cyan-200/10 rounded-3xl border-2 border-cyan-400/30 backdrop-blur-xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
              <div class="text-center">
                <div class="text-7xl mb-4">💧</div>
                <h3 class="text-2xl font-bold text-cyan-300 mb-2">AquaFlow</h3>
                <p class="text-sm text-slate-300">500ml Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-6 max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black text-center mb-16">
        Why Choose <span class="text-cyan-400">AquaFlow?</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="group relative p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300">
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10">
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
            <p class="text-slate-300 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Variants Carousel -->
    <section class="py-20 px-6 max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black mb-12 text-center">
        Our <span class="text-blue-400">Flavors</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="flavor in flavors"
          :key="flavor.id"
          class="relative group cursor-pointer">
          <div
            class="absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
            :style="{
              backgroundImage: `linear-gradient(135deg, ${flavor.color1}, ${flavor.color2})`,
            }"></div>
          <div
            class="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-white/30 transition-all h-full flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-bold mb-2">{{ flavor.name }}</h3>
              <p class="text-slate-300 text-sm mb-4">
                {{ flavor.description }}
              </p>
            </div>
            <div class="text-3xl group-hover:scale-125 transition-transform">
              {{ flavor.emoji }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section
      class="py-20 px-6 bg-gradient-to-r from-blue-950/50 to-cyan-950/50 border-y border-cyan-500/20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16">
          What Our <span class="text-cyan-400">Customers</span> Say
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all">
            <div class="flex items-center gap-2 mb-4">
              <span v-for="n in 5" :key="n" class="text-yellow-400">⭐</span>
            </div>
            <p class="text-slate-200 mb-6 italic">"{{ testimonial.text }}"</p>
            <div>
              <p class="font-bold">{{ testimonial.author }}</p>
              <p class="text-sm text-slate-400">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-20 px-6 max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black text-center mb-16">
        Simple <span class="text-blue-400">Pricing</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="plan in pricingPlans" :key="plan.id" class="relative group">
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold text-sm rounded-full">
            MOST POPULAR
          </div>
          <div
            :class="[
              'p-8 rounded-2xl border backdrop-blur-xl transition-all',
              plan.popular
                ? 'border-cyan-400/50 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 md:scale-105'
                : 'border-cyan-500/20 bg-white/5 hover:border-cyan-400/50',
            ]">
            <h3 class="text-2xl font-bold mb-2">{{ plan.name }}</h3>
            <p class="text-slate-400 mb-6">{{ plan.description }}</p>
            <div class="mb-6">
              <span class="text-4xl font-black">${{ plan.price }}</span>
              <span class="text-slate-400">/month</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-center gap-3">
                <span class="text-cyan-400">✓</span>
                <span class="text-slate-300">{{ feature }}</span>
              </li>
            </ul>
            <button
              :class="[
                'w-full py-3 rounded-full font-bold transition-all',
                plan.popular
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-black hover:shadow-xl hover:shadow-blue-500/50'
                  : 'border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10',
              ]">
              {{ plan.cta }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section
      class="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-y border-cyan-500/20">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-black mb-6">
          Stay <span class="text-cyan-400">Hydrated</span> & Updated
        </h2>
        <p class="text-xl text-slate-300 mb-8">
          Subscribe to get exclusive offers, new flavors, and wellness tips
          delivered to your inbox.
        </p>

        <form
          @submit.prevent="handleNewsletter"
          class="flex flex-col md:flex-row gap-4">
          <input
            v-model="newsletter.email"
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-6 py-4 rounded-full bg-white/10 border border-cyan-400/30 focus:border-cyan-400 outline-none text-white placeholder:text-slate-400 transition-all"
            required />
          <button
            class="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
            Subscribe
          </button>
        </form>
        <p class="text-sm text-slate-400 mt-4">
          ✓ No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="py-16 px-6 text-center">
      <h2 class="text-3xl md:text-5xl font-black mb-8">
        Ready to Experience <span class="text-cyan-400">AquaFlow?</span>
      </h2>
      <button
        class="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-110">
        Start Your Journey Today
      </button>
    </section>
  </div>
</template>

<script setup>
  import { reactive } from "vue";

  const features = [
    {
      id: 1,
      icon: "⚡",
      title: "Natural Electrolytes",
      description:
        "Packed with potassium, sodium, and magnesium for optimal hydration and muscle recovery.",
    },
    {
      id: 2,
      icon: "🌿",
      title: "100% Natural Ingredients",
      description:
        "No artificial colors, flavors, or preservatives. Pure ingredients you can trust.",
    },
    {
      id: 3,
      icon: "💪",
      title: "Performance Boost",
      description:
        "Scientifically formulated to enhance energy levels and athletic performance.",
    },
  ];

  const flavors = [
    {
      id: 1,
      name: "Tropical Mango",
      description: "Sweet and exotic mango burst",
      emoji: "🥭",
      color1: "#FF6B35",
      color2: "#FFA500",
    },
    {
      id: 2,
      name: "Berry Blast",
      description: "Mixed berries with a zing",
      emoji: "🫐",
      color1: "#6A3F9E",
      color2: "#FF1493",
    },
    {
      id: 3,
      name: "Citrus Wave",
      description: "Refreshing lemon and lime",
      emoji: "🍋",
      color1: "#FFD700",
      color2: "#FFA500",
    },
    {
      id: 4,
      name: "Mint Chill",
      description: "Cool and invigorating mint",
      emoji: "🌿",
      color1: "#00CED1",
      color2: "#32CD32",
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "AquaFlow has completely transformed my daily hydration routine. I feel more energized throughout my workouts!",
      author: "Sarah Mitchell",
      role: "Fitness Coach",
    },
    {
      id: 2,
      text: "The taste is incredible and I love that it's made from natural ingredients. This is my go-to drink now.",
      author: "James Chen",
      role: "Professional Athlete",
    },
    {
      id: 3,
      text: "Finally, a drink that doesn't leave me feeling guilty. AquaFlow is healthy, delicious, and sustainable.",
      author: "Emma Rodriguez",
      role: "Wellness Enthusiast",
    },
  ];

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for casual drinkers",
      price: 9,
      cta: "Get Started",
      popular: false,
      features: [
        "4 bottles per month",
        "Access to one flavor",
        "Email support",
        "Exclusive newsletter",
      ],
    },
    {
      id: 2,
      name: "Premium",
      description: "Our most popular choice",
      price: 24,
      cta: "Subscribe Now",
      popular: true,
      features: [
        "12 bottles per month",
        "Access to all flavors",
        "Priority support",
        "Monthly surprise box",
        "Exclusive events access",
      ],
    },
    {
      id: 3,
      name: "Elite",
      description: "For the serious hydration enthusiast",
      price: 49,
      cta: "Go Elite",
      popular: false,
      features: [
        "Unlimited bottles",
        "VIP flavor access",
        "24/7 personal support",
        "Custom blends",
        "Free shipping worldwide",
      ],
    },
  ];

  const newsletter = reactive({
    email: "",
  });

  const handleNewsletter = () => {
    if (newsletter.email) {
      alert(
        `✓ Welcome to AquaFlow! Check ${newsletter.email} for confirmation.`,
      );
      newsletter.email = "";
    }
  };
</script>

<style scoped>
  /* Smooth animations */
  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .bg-gradient-to-r {
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
  }

  /* Smooth hover effects */
  .group:hover {
    transition: all 0.3s ease;
  }
</style>
