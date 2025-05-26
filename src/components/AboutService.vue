<script setup>
// Information and predictions provided by Hristo Yamalov
</script>

<template>
  <section class="section bg-neutral-900 cosmic-bg" id="about">
    <div class="container">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="w-full lg:w-1/2" data-aos="fade-right">
          <img 
            src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Ancient Babylonian tablet" 
            class="w-full h-auto rounded-lg shadow-2xl shadow-primary-900/30 border border-primary-800/30"
          />
          
          <!-- Decorative elements -->
          <div class="relative mt-8 ml-8">
            <div class="absolute -top-4 -left-4 w-full h-full border-2 border-secondary-500/30 rounded-lg"></div>
            <img 
              src="https://images.pexels.com/photos/5472258/pexels-photo-5472258.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Financial chart" 
              class="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <div class="w-full lg:w-1/2" data-aos="fade-left">
          <span class="text-secondary-500 uppercase tracking-wider text-sm font-medium">Our Approach</span>
          <h2 class="text-3xl md:text-4xl mb-6 mt-2">Ancient Wisdom Meets Modern Finance</h2>
          
          <p class="text-neutral-300 mb-6">
            For over 4,000 years, Babylonian astrologers studied the heavens to predict earthly events. 
            They recognized patterns we\'ve now scientifically correlated with market cycles.
          </p>
          
          <p class="text-neutral-300 mb-6">
            Our team, led by renowned astrologer Hristo Yamalov, combines ancient knowledge of celestial mechanics with cutting-edge market analysis 
            to provide you with insights that transcend conventional financial wisdom.
          </p>
          
          <div class="space-y-6 mb-8">
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-secondary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-serif mb-2 text-secondary-400">Celestial Timing</h3>
                <p class="text-neutral-400">Our proprietary algorithms translate planetary movements into precise market entry and exit points.</p>
              </div>
            </div>
            
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-secondary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-serif mb-2 text-secondary-400">Cyclical Forecasting</h3>
                <p class="text-neutral-400">We\'ve mapped the correlation between ancient Babylonian cycles and modern market movements with stunning accuracy.</p>
              </div>
            </div>
            
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-secondary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-serif mb-2 text-secondary-400">Exclusive Insights</h3>
                <p class="text-neutral-400">Our subscribers gain access to predictive market intelligence unavailable through conventional financial analysis.</p>
              </div>
            </div>
          </div>
          
          <button class="btn btn-secondary">Discover Our Methodology</button>
        </div>
      </div>
    </div>
  </section>
</template>