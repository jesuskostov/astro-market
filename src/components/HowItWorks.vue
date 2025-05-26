<script setup>
import { ref } from 'vue';

const steps = ref([
  {
    id: 1,
    title: 'Небесен Анализ',
    description: 'Нашият екип от експерти астролози проследява планетарните позиции, използвайки както древни вавилонски техники, така и модерни астрономически данни.',
    icon: 'telescope',
    color: 'secondary'
  },
  {
    id: 2,
    title: 'Разпознаване на Модели',
    description: 'Идентифицираме корелации между небесните движения и пазарното представяне, използвайки нашия патентован алгоритъм, разработван над 15 години.',
    icon: 'chart',
    color: 'accent'
  },
  {
    id: 3,
    title: 'Пазарна Проекция',
    description: 'Нашите анализатори превръщат астрологическите прозрения в практически пазарни прогнози за конкретни сектори и активи.',
    icon: 'chart-bar',
    color: 'primary'
  },
  {
    id: 4,
    title: 'Доставка и Актуализации',
    description: 'Получавате редовни прогнози и сигнали според нивото на абонамента си, с актуализации в реално време за значими събития.',
    icon: 'envelope',
    color: 'secondary'
  }
]);
</script>

<template>
  <section class="section bg-neutral-950 cosmic-bg relative" id="how-it-works">
    <div class="container">
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-secondary-500 uppercase tracking-wider text-sm font-medium">Нашата Методология</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl mb-6 mt-2">Как Работи Небесното Пазарно Предсказване</h2>
        <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
          Нашият доказан процес съчетава древната вавилонска астрологична мъдрост със съвременен финансов анализ, за да предостави пазарни прозрения, недостъпни чрез конвенционални методи.
        </p>
      </div>
      
      <div class="relative">
        <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-accent-500 to-secondary-500 transform -translate-x-1/2 z-0"></div>
        
        <div class="space-y-16 lg:space-y-32 relative z-10">
          <div v-for="(step, index) in steps" :key="step.id" 
               class="flex flex-col lg:flex-row lg:items-center gap-8"
               :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
               data-aos="fade-up">
            
            <div class="w-full lg:w-1/2" :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'">
              <div class="card h-full p-8 relative overflow-hidden">
                <div class="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-xl"
                     :class="step.color === 'primary' ? 'bg-primary-500/30' : 
                            step.color === 'secondary' ? 'bg-secondary-500/30' : 
                            'bg-accent-500/30'"></div>
                
                <div class="relative z-10">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center"
                         :class="step.color === 'primary' ? 'bg-primary-800/50' : 
                                step.color === 'secondary' ? 'bg-secondary-500/20' : 
                                'bg-accent-800/50'">
                      <svg v-if="step.icon === 'telescope'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
                           :class="step.color === 'primary' ? 'text-primary-400' : 
                                  step.color === 'secondary' ? 'text-secondary-400' : 
                                  'text-accent-400'">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      
                      <svg v-if="step.icon === 'chart'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
                           :class="step.color === 'primary' ? 'text-primary-400' : 
                                  step.color === 'secondary' ? 'text-secondary-400' : 
                                  'text-accent-400'">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                      </svg>
                      
                      <svg v-if="step.icon === 'chart-bar'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
                           :class="step.color === 'primary' ? 'text-primary-400' : 
                                  step.color === 'secondary' ? 'text-secondary-400' : 
                                  'text-accent-400'">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                      
                      <svg v-if="step.icon === 'envelope'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
                           :class="step.color === 'primary' ? 'text-primary-400' : 
                                  step.color === 'secondary' ? 'text-secondary-400' : 
                                  'text-accent-400'">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <h3 class="text-2xl font-serif"
                        :class="step.color === 'primary' ? 'text-primary-400' : 
                              step.color === 'secondary' ? 'text-secondary-400' : 
                              'text-accent-400'">
                      Стъпка {{ step.id }}: {{ step.title }}
                    </h3>
                  </div>
                  
                  <p class="text-lg text-neutral-300 ml-16">{{ step.description }}</p>
                </div>
              </div>
            </div>
            
            <div class="w-full lg:w-1/2 flex justify-center items-center" :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'">
              <div class="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 border-2 border-neutral-800 z-20 shadow-lg">
                <span class="text-2xl font-serif" 
                      :class="step.color === 'primary' ? 'text-primary-400' : 
                             step.color === 'secondary' ? 'text-secondary-400' : 
                             'text-accent-400'">{{ step.id }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center" data-aos="fade-up">
        <button class="btn btn-secondary">Научете Повече за Нашите Методи</button>
      </div>
    </div>
  </section>
</template>