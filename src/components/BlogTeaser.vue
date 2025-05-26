<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const featuredArticles = ref([
  {
    id: 1,
    title: 'The Ancient Babylonian Calendar and Market Cycles',
    excerpt: 'Discover how the ancient Babylonian lunar calendar reveals patterns in modern market movements and what it predicts for the coming quarter.',
    image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'May 15, 2025',
    category: 'Market Insights'
  },
  {
    id: 2,
    title: 'Venus Retrograde: Historical Impact on Tech Stocks',
    excerpt: 'Our analysis shows a fascinating correlation between Venus retrograde periods and technology sector performance over the last 50 years.',
    image: 'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'May 3, 2025',
    category: 'Sector Analysis'
  },
  {
    id: 3,
    title: 'Jupiter-Saturn Conjunction: The Great Reset Cycle',
    excerpt: 'The rare Jupiter-Saturn conjunction signals major economic transitions. Learn how this celestial event has coincided with market resets throughout history.',
    image: 'https://images.pexels.com/photos/1434580/pexels-photo-1434580.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'April 21, 2025',
    category: 'Economic Cycles'
  }
]);

const navigateToBlog = () => {
  router.push('/blog');
};
</script>

<template>
  <section class="section bg-neutral-950 cosmic-bg">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between items-center mb-12" data-aos="fade-up">
        <div>
          <span class="text-secondary-500 uppercase tracking-wider text-sm font-medium">Our Insights</span>
          <h2 class="text-3xl md:text-4xl mb-4 mt-2">Celestial Market Wisdom</h2>
          <p class="text-lg text-neutral-300 max-w-2xl">
            Explore our latest articles on the intersection of ancient celestial knowledge and modern financial markets.
          </p>
        </div>
        <div class="mt-6 md:mt-0">
          <button @click="navigateToBlog" class="btn btn-outline flex items-center gap-2">
            <span>View All Articles</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="article in featuredArticles" :key="article.id" 
             class="card overflow-hidden group" data-aos="fade-up">
          <div class="relative h-48 mb-4 overflow-hidden rounded-t-lg -mx-6 -mt-6">
            <img :src="article.image" :alt="article.title" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
            <div class="absolute bottom-4 left-4">
              <span class="text-xs px-2 py-1 bg-primary-800/80 text-primary-200 rounded-full">
                {{ article.category }}
              </span>
            </div>
          </div>
          
          <div class="mb-2">
            <span class="text-xs text-neutral-400">{{ article.date }}</span>
          </div>
          
          <h3 class="text-xl font-serif mb-2 group-hover:text-secondary-400 transition-colors">
            {{ article.title }}
          </h3>
          
          <p class="text-neutral-300 mb-4">{{ article.excerpt }}</p>
          
          <button @click="navigateToBlog" class="text-secondary-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            <span>Read Article</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>