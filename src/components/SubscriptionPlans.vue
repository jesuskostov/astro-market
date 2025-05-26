<script setup>
import { ref } from 'vue';

const isYearly = ref(false);

const plans = ref([
  {
    id: 'novice',
    name: 'Novice Oracle',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Essential predictions for beginners seeking celestial market guidance.',
    features: [
      'Weekly market forecast overview',
      'Monthly celestial alignment report',
      'Access to educational materials',
      'Email delivery'
    ],
    color: 'primary',
    popular: false
  },
  {
    id: 'adept',
    name: 'Adept Diviner',
    monthlyPrice: 79,
    yearlyPrice: 790,
    description: 'Comprehensive predictions for serious investors seeking celestial advantage.',
    features: [
      'Daily market forecasts',
      'Sector-specific predictions',
      'Entry and exit point recommendations',
      'Priority email support',
      'Monthly consultation call',
      'Access to historical data'
    ],
    color: 'secondary',
    popular: true
  },
  {
    id: 'master',
    name: 'Master Astrologer',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: 'Elite predictions for professional investors requiring maximum celestial insight.',
    features: [
      'Real-time market alerts',
      'Custom portfolio alignment with celestial forces',
      'Direct access to chief astrologer',
      'Quarterly private consultation',
      'Proprietary trading algorithms',
      'Exclusive investor community access',
      'Emergency cosmic event notifications'
    ],
    color: 'accent',
    popular: false
  }
]);

const toggleBilling = () => {
  isYearly.value = !isYearly.value;
};
</script>

<template>
  <section class="section bg-neutral-900 cosmic-bg" id="pricing">
    <div class="container">
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-secondary-500 uppercase tracking-wider text-sm font-medium">Pricing Plans</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl mb-6 mt-2">Celestial Market Insights</h2>
        <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
          Choose the level of cosmic insight that matches your investment ambitions. 
          All plans include our core celestial market predictions.
        </p>
        
        <!-- Billing toggle -->
        <div class="flex items-center justify-center mt-8 space-x-4">
          <span :class="!isYearly ? 'text-white' : 'text-neutral-400'">Monthly</span>
          <button 
            @click="toggleBilling" 
            class="relative inline-flex h-6 w-12 items-center rounded-full"
            :class="isYearly ? 'bg-secondary-500' : 'bg-neutral-700'"
          >
            <span 
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
              :class="isYearly ? 'translate-x-7' : 'translate-x-1'"
            ></span>
          </button>
          <span :class="isYearly ? 'text-white' : 'text-neutral-400'">
            Yearly <span class="text-secondary-500 text-xs ml-1">(Save 20%)</span>
          </span>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
        <div v-for="plan in plans" :key="plan.id" 
             class="relative" 
             :class="{ 'md:transform md:-translate-y-4': plan.popular }"
             data-aos="fade-up">
          <div class="card h-full flex flex-col"
               :class="plan.popular ? 'border-secondary-500' : 'border-primary-700/50'"
          >
            <!-- Popular badge -->
            <div v-if="plan.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="bg-secondary-500 text-primary-900 text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            </div>
            
            <div class="p-6 lg:p-8 flex-grow">
              <h3 class="text-2xl font-serif mb-2"
                  :class="plan.color === 'primary' ? 'text-primary-400' : 
                          plan.color === 'secondary' ? 'text-secondary-400' : 
                          'text-accent-400'">
                {{ plan.name }}
              </h3>
              
              <div class="mb-4">
                <span class="text-3xl font-bold">
                  ${{ isYearly ? plan.yearlyPrice : plan.monthlyPrice }}
                </span>
                <span class="text-neutral-400">
                  /{{ isYearly ? 'year' : 'month' }}
                </span>
              </div>
              
              <p class="text-neutral-300 mb-6">{{ plan.description }}</p>
              
              <ul class="space-y-3 mb-8">
                <li v-for="(feature, index) in plan.features" :key="index" class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0 mt-0.5"
                       :class="plan.color === 'primary' ? 'text-primary-400' : 
                              plan.color === 'secondary' ? 'text-secondary-400' : 
                              'text-accent-400'"
                       viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-neutral-200">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <div class="p-6 lg:p-8 border-t border-primary-800">
              <button 
                class="w-full btn" 
                :class="plan.color === 'primary' ? 'btn-outline' : 
                        plan.color === 'secondary' ? 'btn-secondary' : 
                        'btn-primary'">
                Choose {{ plan.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center" data-aos="fade-up">
        <p class="text-neutral-400 mb-6">
          All plans come with a 14-day money-back guarantee. <br>
          Prices shown in USD. Taxes may apply depending on your jurisdiction.
        </p>
        <a href="#" class="text-secondary-400 hover:underline">See Full Comparison of Plan Features</a>
      </div>
    </div>
  </section>
</template>