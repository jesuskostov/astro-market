<script setup>
import { ref, onMounted } from 'vue';

const stars = ref([]);

// Generate random stars for the background
onMounted(() => {
  const generateStars = () => {
    const newStars = [];
    const count = Math.floor(window.innerWidth / 10); // Responsive number of stars
    
    for (let i = 0; i < count; i++) {
      newStars.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        duration: `${Math.random() * 3 + 2}s`
      });
    }
    
    stars.value = newStars;
  };
  
  generateStars();
  window.addEventListener('resize', generateStars);
});
</script>

<template>
  <section class="relative min-h-screen flex items-center text-white overflow-hidden pt-20" id="home">
    <!-- Star background -->
    <div class="absolute inset-0 bg-neutral-950 starfield z-0 overflow-hidden">
      <div v-for="star in stars" :key="star.id" 
           class="star" 
           :style="{
             top: star.top,
             left: star.left,
             width: star.size,
             height: star.size,
             animationDuration: star.duration
           }">
      </div>
      <!-- Nebula effect -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-accent-900/30 mix-blend-overlay"></div>
    </div>
    
    <!-- Overlay with image -->
    <div class="absolute inset-0 z-0 opacity-10">
      <img src="https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1600" 
           alt="Ancient star map" 
           class="w-full h-full object-cover object-center" />
    </div>
    
    <!-- Content -->
    <div class="container relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <div class="w-full lg:w-1/2" data-aos="fade-right">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            <span class="block">Unlock Ancient Wisdom</span>
            <span class="gold-gradient">to Predict Modern Markets</span>
          </h1>
          <p class="text-xl text-neutral-300 mb-8 max-w-2xl">
            Harness the secrets of Babylonian astrology to anticipate market movements with precision. Our celestial insights have guided investors through uncertainty for over a decade.
          </p>
          <div class="flex flex-wrap gap-4">
            <button class="btn btn-primary">
              Start Your Journey
            </button>
            <button class="btn btn-outline">
              See a Forecast Sample
            </button>
          </div>
          
          <div class="mt-12 flex items-center gap-4">
            <div class="flex -space-x-2">
              <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="User" class="w-10 h-10 rounded-full border-2 border-neutral-900 object-cover" />
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="User" class="w-10 h-10 rounded-full border-2 border-neutral-900 object-cover" />
              <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="User" class="w-10 h-10 rounded-full border-2 border-neutral-900 object-cover" />
            </div>
            <span class="text-sm text-neutral-400">Join <span class="text-secondary-400">2,500+</span> investors harnessing the stars</span>
          </div>
        </div>
        
        <div class="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
          <div class="relative animate-float">
            <div class="w-full max-w-md bg-neutral-900/80 backdrop-blur-sm border border-primary-700/50 rounded-lg p-6 shadow-lg shadow-primary-900/30">
              <div class="text-center mb-6">
                <span class="text-sm text-neutral-400">Next Major Market Shift</span>
                <h3 class="text-2xl font-serif gold-gradient">Jupiter-Saturn Alignment</h3>
                <p class="text-neutral-300">June 15, 2025 • 22 days remaining</p>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center">
                    <div class="w-8 h-8 bg-secondary-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-serif text-secondary-400">Energy Sector</h4>
                    <p class="text-sm text-neutral-300">Forecasted 12% Growth</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center">
                    <div class="w-8 h-8 bg-error-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-serif text-error-500">Technology Sector</h4>
                    <p class="text-sm text-neutral-300">Forecasted 8% Decline</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center">
                    <div class="w-8 h-8 bg-accent-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-serif text-accent-400">Precious Metals</h4>
                    <p class="text-sm text-neutral-300">Forecasted 15% Growth</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-6 pt-4 border-t border-primary-800">
                <button class="w-full btn btn-secondary">Access Full Report</button>
              </div>
            </div>
            
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-accent-500/20 rounded-full blur-xl"></div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>