<script setup>
import { ref } from 'vue';

const currentStep = ref(1);
const email = ref('');
const cardNumber = ref('');
const cardExpiry = ref('');
const cardCvc = ref('');
const selectedPlan = ref(null);

const plans = [
  {
    id: 'novice',
    name: 'Начинаещ Оракул',
    price: 29,
    features: [
      'Седмичен пазарен преглед',
      'Месечен доклад за небесно подравняване',
      'Достъп до обучителни материали',
      'Имейл доставка'
    ]
  },
  {
    id: 'adept',
    name: 'Напреднал Гадател',
    price: 79,
    features: [
      'Дневни пазарни прогнози',
      'Прогнози за конкретни сектори',
      'Препоръки за вход и изход',
      'Приоритетна имейл поддръжка',
      'Месечна консултация'
    ]
  }
];

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value);
};

const handleEmailSubmit = () => {
  if (validateEmail()) {
    currentStep.value = 2;
  }
};

const formatCardNumber = (e) => {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/(\d{4})/g, '$1 ').trim();
  cardNumber.value = value;
};

const formatExpiry = (e) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length >= 2) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4);
  }
  cardExpiry.value = value;
};

const handlePayment = () => {
  // Here you would integrate with your payment processor
  console.log('Processing payment...');
};
</script>

<template>
  <div class="min-h-screen bg-neutral-950 cosmic-bg py-20">
    <div class="container max-w-2xl mx-auto px-4">
      <!-- Progress Steps -->
      <div class="flex items-center justify-center mb-12">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center text-primary-900 font-bold">
            1
          </div>
          <div class="h-1 w-16 mx-2" :class="currentStep > 1 ? 'bg-secondary-500' : 'bg-neutral-700'"></div>
          <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold"
               :class="currentStep > 1 ? 'bg-secondary-500 text-primary-900' : 'bg-neutral-700 text-neutral-400'">
            2
          </div>
        </div>
      </div>

      <!-- Step 1: Email -->
      <div v-if="currentStep === 1" class="card" data-aos="fade-up">
        <h2 class="text-2xl font-serif mb-6">Въведете вашия имейл</h2>
        <form @submit.prevent="handleEmailSubmit" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-neutral-300 mb-1">
              Имейл адрес
            </label>
            <input 
              type="email" 
              id="email"
              v-model="email"
              class="w-full px-4 py-3 bg-neutral-800 border border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 text-white"
              placeholder="вашият@емайл.com"
              required
            />
          </div>
          <button type="submit" class="btn btn-secondary w-full">
            Продължи
          </button>
        </form>
      </div>

      <!-- Step 2: Plan Selection and Payment -->
      <div v-else class="space-y-8" data-aos="fade-up">
        <!-- Plan Selection -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="plan in plans" :key="plan.id"
               class="card cursor-pointer"
               :class="selectedPlan === plan.id ? 'border-secondary-500' : 'border-primary-700/50'"
               @click="selectedPlan = plan.id">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-serif text-secondary-400">{{ plan.name }}</h3>
              <span class="text-2xl font-bold">${{ plan.price }}<span class="text-sm text-neutral-400">/месец</span></span>
            </div>
            <ul class="space-y-2 mb-4">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2 text-sm text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Payment Form -->
        <div class="card">
          <h3 class="text-xl font-serif mb-6">Детайли за плащане</h3>
          <form @submit.prevent="handlePayment" class="space-y-4">
            <div>
              <label for="card-number" class="block text-sm font-medium text-neutral-300 mb-1">
                Номер на карта
              </label>
              <input 
                type="text"
                id="card-number"
                v-model="cardNumber"
                @input="formatCardNumber"
                maxlength="19"
                class="w-full px-4 py-3 bg-neutral-800 border border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 text-white"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="expiry" class="block text-sm font-medium text-neutral-300 mb-1">
                  Валидност
                </label>
                <input 
                  type="text"
                  id="expiry"
                  v-model="cardExpiry"
                  @input="formatExpiry"
                  maxlength="5"
                  class="w-full px-4 py-3 bg-neutral-800 border border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 text-white"
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div>
                <label for="cvc" class="block text-sm font-medium text-neutral-300 mb-1">
                  CVC
                </label>
                <input 
                  type="text"
                  id="cvc"
                  v-model="cardCvc"
                  maxlength="3"
                  class="w-full px-4 py-3 bg-neutral-800 border border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 text-white"
                  placeholder="123"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              class="btn btn-secondary w-full"
              :disabled="!selectedPlan">
              Завърши плащането
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>