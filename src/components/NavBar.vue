<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <header :class="[
    'fixed w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-neutral-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
  ]">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2">
        <div class="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center">
          <span class="text-primary-900 font-serif text-lg font-bold">M</span>
        </div>
        <span class="text-xl font-serif text-secondary-400">MarketOracle</span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <router-link to="/#about" class="text-neutral-200 hover:text-secondary-400 transition-colors">About</router-link>
        <router-link to="/#how-it-works" class="text-neutral-200 hover:text-secondary-400 transition-colors">How It Works</router-link>
        <router-link to="/#pricing" class="text-neutral-200 hover:text-secondary-400 transition-colors">Pricing</router-link>
        <router-link to="/blog" class="text-neutral-200 hover:text-secondary-400 transition-colors">Insights</router-link>
        <router-link to="/#faq" class="text-neutral-200 hover:text-secondary-400 transition-colors">FAQ</router-link>
      </nav>

      <!-- Call to Action -->
      <div class="hidden md:flex items-center gap-4">
        <button class="btn btn-outline text-sm py-2">Login</button>
        <button class="btn btn-primary text-sm py-2">Start Free Trial</button>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-neutral-200" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden bg-neutral-900 shadow-lg animate-fade-in-down">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex flex-col gap-4">
          <router-link to="/#about" @click="isMenuOpen = false" class="text-neutral-200 py-2 border-b border-neutral-800">About</router-link>
          <router-link to="/#how-it-works" @click="isMenuOpen = false" class="text-neutral-200 py-2 border-b border-neutral-800">How It Works</router-link>
          <router-link to="/#pricing" @click="isMenuOpen = false" class="text-neutral-200 py-2 border-b border-neutral-800">Pricing</router-link>
          <router-link to="/blog" @click="isMenuOpen = false" class="text-neutral-200 py-2 border-b border-neutral-800">Insights</router-link>
          <router-link to="/#faq" @click="isMenuOpen = false" class="text-neutral-200 py-2 border-b border-neutral-800">FAQ</router-link>
          <div class="flex flex-col gap-3 mt-4">
            <button class="btn btn-outline">Login</button>
            <button class="btn btn-primary">Start Free Trial</button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.3s ease-out forwards;
}
</style>