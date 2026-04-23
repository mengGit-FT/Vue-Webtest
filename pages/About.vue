<template>
  <div
    class="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white font-sans">
    <!-- Navigation -->
    <Navbar />

    <!-- About Hero -->
    <section class="relative px-6 py-20 md:py-32 pt-32">
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-5xl md:text-7xl font-black mb-6">
            About <span class="text-cyan-400">AquaFlow</span>
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed mb-6">
            Founded in 2024, AquaFlow is dedicated to revolutionizing the way
            people stay hydrated. We believe that premium hydration should be
            accessible, sustainable, and delicious.
          </p>
          <p class="text-lg text-slate-400 leading-relaxed">
            Our mission is to empower athletes, professionals, and wellness
            enthusiasts with scientifically-formulated beverages that deliver
            real results.
          </p>
        </div>
        <div class="flex items-center justify-center">
          <div class="relative">
            <div
              class="absolute inset-0 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-40"></div>
            <div
              class="relative w-72 h-72 bg-gradient-to-br from-blue-200/30 to-cyan-200/10 rounded-full border-2 border-cyan-400/30 flex items-center justify-center text-7xl">
              💧
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 px-6 max-w-7xl mx-auto">
      <h2 class="text-4xl font-black text-center mb-16">
        Our <span class="text-blue-400">Story</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="story in storyPoints"
          :key="story.id"
          class="p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl">
          <div class="text-5xl mb-4">{{ story.icon }}</div>
          <h3 class="text-2xl font-bold mb-3">{{ story.title }}</h3>
          <p class="text-slate-300 leading-relaxed">{{ story.description }}</p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section
      class="py-20 px-6 bg-gradient-to-r from-blue-950/50 to-cyan-950/50 border-y border-cyan-500/20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-black text-center mb-16">
          Meet Our <span class="text-cyan-400">Team</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="text-center">
            <div class="text-6xl mb-4 mx-auto">{{ member.emoji }}</div>
            <h3 class="text-xl font-bold">{{ member.name }}</h3>
            <p class="text-cyan-400 mb-2">{{ member.role }}</p>
            <p class="text-sm text-slate-400">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 px-6 max-w-7xl mx-auto">
      <h2 class="text-4xl font-black text-center mb-16">
        Our <span class="text-blue-400">Core Values</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="value in values"
          :key="value.id"
          class="p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all">
          <h3 class="text-2xl font-bold mb-3">{{ value.title }}</h3>
          <p class="text-slate-300 leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import Navbar from "../components/Navbar.vue";

  const storyPoints = [
    {
      id: 1,
      icon: "🚀",
      title: "Innovation",
      description:
        "We started with a vision to create hydration solutions that combine taste, health, and sustainability.",
    },
    {
      id: 2,
      icon: "🏆",
      title: "Excellence",
      description:
        "Every product is crafted with meticulous attention to detail and quality standards.",
    },
    {
      id: 3,
      icon: "🌍",
      title: "Sustainability",
      description:
        "We are committed to reducing our environmental footprint and supporting local communities.",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      emoji: "👨‍💼",
      bio: "Visionary leader with 15 years in beverage industry",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Chief Scientist",
      emoji: "👩‍🔬",
      bio: "PhD in Nutrition, formulating premium drinks",
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "Operations",
      emoji: "👨‍💻",
      bio: "Expert in supply chain and production",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Marketing",
      emoji: "👩‍💼",
      bio: "Creative strategist building brand presence",
    },
  ];

  const values = [
    {
      id: 1,
      title: "Quality First",
      description:
        "We never compromise on the quality of our ingredients or the integrity of our products.",
    },
    {
      id: 2,
      title: "Customer Focused",
      description:
        "Your satisfaction and wellness journey is at the heart of everything we do.",
    },
    {
      id: 3,
      title: "Sustainable Practice",
      description:
        "We take responsibility for our environmental impact and continuously improve our practices.",
    },
    {
      id: 4,
      title: "Innovation Driven",
      description:
        "We invest in research and development to stay ahead of wellness trends.",
    },
  ];
</script>
