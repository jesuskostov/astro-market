<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    id: 1,
    question: 'Is this real astrology?',
    answer: 'Yes. Our methodology is based on ancient Babylonian astrological practices, which have been studied and refined for over 4,000 years. We combine these traditional methods with modern data analysis to identify correlations between celestial events and market movements.'
  },
  {
    id: 2,
    question: 'How accurate are your predictions?',
    answer: 'Our historical backtesting shows a 72% accuracy rate for major market movements and a 64% accuracy for sector-specific predictions. However, we emphasize that all investment decisions carry risk, and our predictions should be one of several tools in your investment strategy.'
  },
  {
    id: 3,
    question: 'What markets do you cover?',
    answer: 'Our primary focus is on major stock markets (US, European, Asian), commodities (especially precious metals and energy), and select cryptocurrencies. Our Adept and Master tier subscribers also receive insights on specific sectors and individual assets.'
  },
  {
    id: 4,
    question: 'Do I need to understand astrology to use your service?',
    answer: 'Not at all. While we explain the astrological basis for our predictions, all forecasts are translated into clear, actionable financial insights. No prior knowledge of astrology is required to benefit from our service.'
  },
  {
    id: 5,
    question: 'How often do you send updates?',
    answer: 'The frequency depends on your subscription tier. Novice members receive weekly overview reports, Adept members get daily insights, and Master tier subscribers receive real-time alerts for significant celestial events that may impact markets.'
  },
  {
    id: 6,
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time. We offer a 14-day money-back guarantee for new subscribers. If you cancel after this period, you\'ll maintain access until the end of your current billing cycle.'
  },
  {
    id: 7,
    question: 'Is this considered financial advice?',
    answer: 'No. Our service provides insights based on astrological analysis, but it does not constitute personalized financial advice. We strongly recommend consulting with a qualified financial advisor before making investment decisions.'
  },
  {
    id: 8,
    question: 'How do you differ from traditional market analysis?',
    answer: 'Traditional analysis focuses on economic indicators, company performance, and market sentiment. Our approach complements these by identifying cyclical patterns influenced by celestial movements that often precede or coincide with market shifts not explained by conventional analysis.'
  }
]);

const openItem = ref(null);

const toggleItem = (id) => {
  openItem.value = openItem.value === id ? null : id;
};
</script>

<template>
  <section class="section bg-neutral-900 cosmic-bg" id="faq">
    <div class="container">
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-secondary-500 uppercase tracking-wider text-sm font-medium">FAQ</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl mb-6 mt-2">Frequently Asked Questions</h2>
        <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
          Discover answers to our most commonly asked questions about celestial market predictions.
        </p>
      </div>
      
      <div class="max-w-3xl mx-auto">
        <div class="space-y-4" data-aos="fade-up">
          <div v-for="faq in faqs" :key="faq.id"
               class="border border-primary-700/30 rounded-lg overflow-hidden">
            <button 
              @click="toggleItem(faq.id)"
              class="w-full flex items-center justify-between p-4 text-left bg-neutral-900 hover:bg-neutral-800/50 transition-colors"
            >
              <span class="text-lg font-medium text-secondary-400">{{ faq.question }}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 text-secondary-400 transition-transform duration-300"
                :class="openItem === faq.id ? 'transform rotate-180' : ''"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div 
              v-show="openItem === faq.id" 
              class="p-4 bg-neutral-800/30 border-t border-primary-700/30"
            >
              <p class="text-neutral-300">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center" data-aos="fade-up">
          <p class="text-neutral-400 mb-6">Still have questions? We\'re here to help.</p>
          <button class="btn btn-outline">Contact Support</button>
        </div>
      </div>
    </div>
  </section>
</template>