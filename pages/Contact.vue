<template>
  <div
    class="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white font-sans">
    <!-- Navigation -->
    <Navbar />

    <!-- Contact Hero -->
    <section class="relative px-6 py-20 md:py-32 pt-32">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-black mb-6">
          Get In <span class="text-cyan-400">Touch</span>
        </h1>
        <p class="text-xl text-slate-300 mb-12">
          Have questions about AquaFlow? We'd love to hear from you. Reach out
          and let's start a conversation.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-20 px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div
          class="p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl">
          <h2 class="text-3xl font-black mb-8">Send us a Message</h2>
          <form @submit.prevent="handleSubmitContact" class="space-y-6">
            <div>
              <label class="block text-sm font-bold mb-2">Full Name</label>
              <input
                v-model="contactForm.name"
                type="text"
                placeholder="Your name"
                class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                required />
            </div>
            <div>
              <label class="block text-sm font-bold mb-2">Email Address</label>
              <input
                v-model="contactForm.email"
                type="email"
                placeholder="your@email.com"
                class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                required />
            </div>
            <div>
              <label class="block text-sm font-bold mb-2">Subject</label>
              <input
                v-model="contactForm.subject"
                type="text"
                placeholder="What is this about?"
                class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                required />
            </div>
            <div>
              <label class="block text-sm font-bold mb-2">Message</label>
              <textarea
                v-model="contactForm.message"
                rows="6"
                placeholder="Tell us what's on your mind..."
                class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-600 resize-none"
                required></textarea>
            </div>
            <button
              class="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-black uppercase tracking-widest rounded-2xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <div
            v-for="info in contactInfo"
            :key="info.id"
            class="p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all">
            <div class="text-4xl mb-4">{{ info.icon }}</div>
            <h3 class="text-2xl font-bold mb-2">{{ info.title }}</h3>
            <p class="text-slate-300 mb-2">{{ info.description }}</p>
            <p class="text-cyan-400 font-bold">{{ info.detail }}</p>
          </div>

          <!-- Quick Links -->
          <div
            class="p-8 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl">
            <h3 class="text-2xl font-bold mb-6">Quick Links</h3>
            <div class="space-y-3">
              <a
                href="/"
                class="block text-cyan-300 hover:text-cyan-200 transition-colors"
                >→ Return to Home</a
              >
              <a
                href="/products"
                class="block text-cyan-300 hover:text-cyan-200 transition-colors"
                >→ Browse Products</a
              >
              <a
                href="/about"
                class="block text-cyan-300 hover:text-cyan-200 transition-colors"
                >→ Learn About Us</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section
      class="py-20 px-6 bg-gradient-to-r from-blue-950/50 to-cyan-950/50 border-y border-cyan-500/20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-black text-center mb-16">
          Frequently Asked <span class="text-cyan-400">Questions</span>
        </h2>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="p-6 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl cursor-pointer hover:border-cyan-400/50 transition-all"
            @click="toggleFaq(index)">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-bold">{{ faq.question }}</h3>
              <span class="text-2xl text-cyan-400">{{
                expandedFaq === index ? "−" : "+"
              }}</span>
            </div>
            <p v-if="expandedFaq === index" class="text-slate-300 mt-4">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { ref, reactive } from "vue";
  import Navbar from "../components/Navbar.vue";

  const expandedFaq = ref(null);

  const contactForm = reactive({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      id: 1,
      icon: "📧",
      title: "Email",
      description: "Send us an email anytime",
      detail: "support@aquaflow.com",
    },
    {
      id: 2,
      icon: "📱",
      title: "Phone",
      description: "Call us during business hours",
      detail: "+1 (555) 123-4567",
    },
    {
      id: 3,
      icon: "📍",
      title: "Address",
      description: "Visit our headquarters",
      detail: "123 Hydration Way, Wellness City, WC 12345",
    },
    {
      id: 4,
      icon: "🕐",
      title: "Hours",
      description: "We are available",
      detail: "Mon-Fri 9AM-6PM EST",
    },
  ];

  const faqs = [
    {
      question: "What are the main ingredients in AquaFlow?",
      answer:
        "AquaFlow contains natural spring water, electrolytes (potassium, sodium, magnesium), natural flavoring, and vitamins. We use no artificial colors or preservatives.",
    },
    {
      question: "Is AquaFlow suitable for vegans?",
      answer:
        "Yes! All AquaFlow products are 100% vegan and free from any animal-derived ingredients.",
    },
    {
      question: "What is the shelf life of AquaFlow?",
      answer:
        "Our products have a shelf life of 12 months from the manufacturing date when stored in cool, dry conditions.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 50 countries worldwide. Shipping costs vary by location. Check our shipping page for details.",
    },
    {
      question: "Can I return or exchange products?",
      answer:
        "We offer a 30-day satisfaction guarantee. If you're not completely satisfied, we'll refund or replace your order.",
    },
    {
      question: "Are your bottles recyclable?",
      answer:
        "Absolutely! Our bottles are made from 100% recyclable materials and we encourage proper recycling.",
    },
  ];

  const toggleFaq = (index) => {
    expandedFaq.value = expandedFaq.value === index ? null : index;
  };

  const handleSubmitContact = () => {
    if (contactForm.name && contactForm.email && contactForm.message) {
      alert(
        `✓ Thank you ${contactForm.name}! Your message has been received. We'll respond shortly.`,
      );
      contactForm.name = "";
      contactForm.email = "";
      contactForm.subject = "";
      contactForm.message = "";
    }
  };
</script>
