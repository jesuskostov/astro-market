<script setup>
import { ref } from 'vue';

const testimonials = ref([
  {
    id: 1,
    name: 'Alexandra R.',
    title: 'Hedge Fund Manager',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'The celestial insights gave our fund a crucial edge during the volatile market period of last year. The Jupiter-Neptune alignment prediction was particularly valuable.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael T.',
    title: 'Private Investor',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'I was skeptical at first, but the accuracy of the predictions, especially regarding commodity cycles, has made me a believer. My portfolio is up 22% since subscribing.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sophia L.',
    title: 'Financial Advisor',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'MarketOracle\'s predictions have added a fascinating dimension to my client consultations. The celestial forecasts have proven surprisingly accurate, especially for long-term trends.',
    rating: 4
  },
  {
    id: 4,
    name: 'David K.',
    title: 'Cryptocurrency Trader',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    quote: 'The correlation between lunar cycles and crypto volatility that MarketOracle identified has transformed my trading strategy. Their insights helped me navigate the last market correction.',
    rating: 5
  }
]);

const currentIndex = ref(0);
const slideInterval = ref(null);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};
</script>

<template>
  <section class="section bg-neutral-950 cosmic-bg relative" id="testimonials">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/5 w-64 h-64 bg-primary-900/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/5 w-96 h-96 bg-secondary-900/20 rounded-full blur-3xl"></div>
    </div>
    
    <div class="container relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-secondary-500 uppercase tracking-wider text-sm font-medium">Testimonials</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl mb-6 mt-2">What Our Members Say</h2>
        <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
          Investors around the world are using our celestial market insights to gain an edge in their financial decisions.
        </p>
      </div>

      <!-- Desktop Testimonials Grid -->
      <div class="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div v-for="testimonial in testimonials" :key="testimonial.id" 
             class="card" data-aos="fade-up">
          <div class="flex gap-4 mb-4">
            <img :src="testimonial.image" :alt="testimonial.name" 
                 class="w-16 h-16 rounded-full object-cover" />
            <div>
              <h4 class="font-serif text-xl text-secondary-400">{{ testimonial.name }}</h4>
              <p class="text-neutral-400">{{ testimonial.title }}</p>
              <div class="flex mt-1">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" 
                     class="h-4 w-4" 
                     :class="i <= testimonial.rating ? 'text-secondary-400' : 'text-neutral-600'"
                     viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <blockquote class="text-neutral-300 italic">
            "{{ testimonial.quote }}"
          </blockquote>
        </div>
      </div>
      
      <!-- Mobile Testimonials Carousel -->
      <div class="md:hidden relative" data-aos="fade-up">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out"
               :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="testimonial in testimonials" :key="testimonial.id" 
                 class="w-full flex-shrink-0 card">
              <div class="flex gap-4 mb-4">
                <img :src="testimonial.image" :alt="testimonial.name" 
                     class="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 class="font-serif text-xl text-secondary-400">{{ testimonial.name }}</h4>
                  <p class="text-neutral-400">{{ testimonial.title }}</p>
                  <div class="flex mt-1">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" 
                         class="h-4 w-4" 
                         :class="i <= testimonial.rating ? 'text-secondary-400' : 'text-neutral-600'"
                         viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              <blockquote class="text-neutral-300 italic">
                "{{ testimonial.quote }}"
              </blockquote>
            </div>
          </div>
        </div>
        
        <!-- Navigation arrows -->
        <button @click="prev" class="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-300" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button @click="next" class="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-300" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        
        <!-- Indicators -->
        <div class="flex justify-center mt-4 space-x-2">
          <button v-for="(_, index) in testimonials" :key="index"
                  @click="currentIndex = index"
                  class="w-2 h-2 rounded-full"
                  :class="currentIndex === index ? 'bg-secondary-500' : 'bg-neutral-700'">
          </button>
        </div>
      </div>

      <div class="flex justify-center items-center mt-12" data-aos="fade-up">
        <a href="#" class="text-secondary-400 hover:underline flex items-center gap-2">
          <span>Read More Success Stories</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>