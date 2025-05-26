<script setup>
import { ref } from 'vue';

const isYearly = ref(false);

const plans = ref([
  {
    id: 'novice',
    name: 'Начинаещ Оракул',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Основни предсказания за начинаещи, търсещи небесно пазарно напътствие.',
    features: [
      'Седмичен пазарен преглед чрез Telegram',
      'Месечен доклад за небесни подравнявания',
      'Достъп до обучителни материали',
      'SMS известия за критични пазарни събития',
      'Достъп до частния Telegram канал'
    ],
    color: 'primary',
    popular: false
  },
  {
    id: 'adept',
    name: 'Напреднал Гадател',
    monthlyPrice: 79,
    yearlyPrice: 790,
    description: 'Изчерпателни предсказания за сериозни инвеститори, търсещи небесно предимство.',
    features: [
      'Ежедневни пазарни прогнози в Telegram',
      'Прогнози за конкретни сектори',
      'Препоръки за вход и изход',
      'Приоритетна поддръжка в Telegram',
      'Месечна консултация',
      'Достъп до исторически данни',
      'Незабавни SMS сигнали за пазарни възможности'
    ],
    color: 'secondary',
    popular: true
  },
  {
    id: 'master',
    name: 'Майстор Астролог',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: 'Елитни предсказания за професионални инвеститори, изискващи максимално небесно прозрение.',
    features: [
      'Сигнали в реално време чрез Telegram',
      'Персонализирано портфолио съобразено с небесните сили',
      'Директен достъп до главния астролог в Telegram',
      'Тримесечна частна консултация',
      'Патентовани търговски алгоритми',
      'Достъп до ексклузивна инвеститорска общност',
      'Приоритетни SMS известия за спешни космически събития',
      'VIP Telegram група с ограничен достъп'
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
        <span class="text-secondary-500 uppercase tracking-wider text-sm font-medium">Ценови Планове</span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl mb-6 mt-2">Небесни Пазарни Прозрения</h2>
        <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
          Изберете нивото на космическо прозрение, което отговаря на вашите инвестиционни амбиции. 
          Всички планове включват нашите основни небесни пазарни предсказания, доставени чрез Telegram и SMS.
        </p>
        
        <!-- Billing toggle -->
        <div class="flex items-center justify-center mt-8 space-x-4">
          <span :class="!isYearly ? 'text-white' : 'text-neutral-400'">Месечно</span>
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
            Годишно <span class="text-secondary-500 text-xs ml-1">(Спести 20%)</span>
          </span>
        </div>

        <!-- Communication channels info -->
        <div class="mt-8 p-4 bg-neutral-800/50 rounded-lg max-w-2xl mx-auto" data-aos="fade-up">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-secondary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <div class="flex-grow">
              <h3 class="text-lg font-serif text-secondary-400 mb-2">Мигновена Доставка на Прозрения</h3>
              <p class="text-neutral-300">
                Получавайте всички предсказания и сигнали директно в Telegram и чрез SMS за критични пазарни предупреждения. 
                Нашият Telegram канал осигурява бърз и сигурен достъп до всички прозрения, където и да се намирате.
              </p>
            </div>
          </div>
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
                НАЙ-ПОПУЛЯРЕН
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
                  /{{ isYearly ? 'година' : 'месец' }}
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
                @click="$router.push('/subscribe')" 
                class="w-full btn" 
                :class="plan.color === 'primary' ? 'btn-outline' : 
                        plan.color === 'secondary' ? 'btn-secondary' : 
                        'btn-primary'">
                Избери {{ plan.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center" data-aos="fade-up">
        <p class="text-neutral-400 mb-6">
          Всички планове идват с 14-дневна гаранция за връщане на парите. <br>
          Цените са в USD. Може да се начислят данъци според вашата юрисдикция.
        </p>
        <a href="#" class="text-secondary-400 hover:underline">Вижте Пълно Сравнение на Функциите на Плановете</a>
      </div>
    </div>
  </section>
</template>