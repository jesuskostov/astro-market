<script setup>
import { ref } from 'vue';

const email = ref('');
const isSubmitted = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');

const handleSubmit = () => {
  // Basic validation
  if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
    errorMessage.value = 'Please enter a valid email address';
    return;
  }
  
  // Simulate API call
  isLoading.value = true;
  errorMessage.value = '';
  
  setTimeout(() => {
    isLoading.value = false;
    isSubmitted.value = true;
    // In a real application, you would make an API call to submit the email
  }, 1500);
};
</script>

<template>
  <section class="section bg-primary-900 cosmic-bg relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute inset-0 z-0 opacity-10">
      <img src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1600" 
           alt="Ancient Babylonian symbols" 
           class="w-full h-full object-cover object-center" />
    </div>
    
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute -top-10 -right-10 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"></div>
    </div>
    
    <div class="container relative z-10">
      <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
        <span class="text-secondary-500 uppercase tracking-wider text-sm font-medium">Stay Informed</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl mb-6 mt-2">
          Celestial Wisdom in Your Inbox
        </h2>
        <p class="text-xl text-neutral-300 mb-8">
          Subscribe to receive a free weekly market prediction and exclusive celestial insights not available anywhere else.
        </p>
        
        <div v-if="!isSubmitted" class="mb-6 relative max-w-md mx-auto">
          <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-3">
            <div class="flex-grow relative">
              <input 
                type="email" 
                v-model="email" 
                placeholder="Your email address" 
                class="w-full px-4 py-3 bg-neutral-800 border border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 text-white"
                :class="{'border-error-500': errorMessage}"
              />
              <p v-if="errorMessage" class="text-error-500 text-sm mt-1 text-left absolute">
                {{ errorMessage }}
              </p>
            </div>
            <button 
              type="submit" 
              class="btn btn-secondary flex items-center justify-center min-w-[120px]"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Subscribe</span>
              <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </form>
        </div>
        
        <div v-else class="bg-neutral-800/50 border border-primary-700 rounded-lg p-6 max-w-md mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-secondary-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-serif mb-2">Thank You for Subscribing!</h3>
          <p class="text-neutral-300">
            Your cosmic market journey begins now. Check your inbox soon for your first celestial prediction.
          </p>
        </div>
        
        <p class="text-neutral-400 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time. No spam, just celestial wisdom.
        </p>
      </div>
    </div>
  </section>
</template>