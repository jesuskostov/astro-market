<script setup>
import { ref } from 'vue';

const articles = ref([
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
  },
  {
    id: 4,
    title: 'The Ishtar Gateway: Recognizing Golden Opportunities',
    excerpt: 'Named after the Babylonian goddess of fertility, learn to identify "Ishtar Gateways" - rare market conditions that historically lead to explosive growth.',
    image: 'https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'April 12, 2025',
    category: 'Trading Strategy'
  },
  {
    id: 5,
    title: 'Lunar Phases and Commodity Price Fluctuations',
    excerpt: 'Our proprietary research reveals startling correlations between lunar cycles and commodity price movements, particularly in precious metals and agriculture.',
    image: 'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'March 30, 2025',
    category: 'Commodities'
  },
  {
    id: 6,
    title: 'Sumerian Star Maps: The Original Market Indicators',
    excerpt: 'We\'ve decoded ancient Sumerian star maps to reveal what might be the world\'s first documented market timing indicators.',
    image: 'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'March 15, 2025',
    category: 'Historical Research'
  }
]);
</script>

<template>
  <div class="bg-neutral-950 cosmic-bg">
    <div class="container section">
      <div class="mb-16 text-center" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl mb-4">Celestial Insights</h1>
        <p class="text-xl text-neutral-300 max-w-3xl mx-auto">Ancient wisdom for modern markets, curated by our expert astrologers and financial analysts.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="article in articles" :key="article.id" class="card overflow-hidden" data-aos="fade-up">
          <img :src="article.image" alt="Blog post illustration" class="w-full h-48 object-cover rounded-t-lg mb-4" />
          
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs px-2 py-1 bg-primary-800 text-primary-200 rounded-full">{{ article.category }}</span>
            <span class="text-xs text-neutral-400">{{ article.date }}</span>
          </div>
          
          <h3 class="text-xl font-serif mb-2">{{ article.title }}</h3>
          <p class="text-neutral-300 mb-4">{{ article.excerpt }}</p>
          
          <button class="btn btn-outline text-sm">
            Read Full Article
          </button>
        </div>
      </div>

      <div class="flex justify-center mt-12">
        <button class="btn btn-primary">Load More Insights</button>
      </div>
    </div>
  </div>
</template>