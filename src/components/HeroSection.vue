<script setup>
import { ref, onMounted } from 'vue';

const stars = ref([]);

onMounted(() => {
  const generateStars = () => {
    const newStars = [];
    const count = Math.floor(window.innerWidth / 10);
    
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
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-accent-900/30 mix-blend-overlay"></div>
    </div>
    
    <div class="absolute inset-0 z-0 opacity-10">
      <img src="https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1600" 
           alt="Древна звездна карта" 
           class="w-full h-full object-cover object-center" />
    </div>
    
    <div class="container relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <div class="w-full lg:w-1/2" data-aos="fade-right">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            <span class="block">Отключете Древната Мъдрост</span>
            <span class="gold-gradient">за Предсказване на Модерните Пазари</span>
          </h1>
          <p class="text-xl text-neutral-300 mb-8 max-w-2xl">
            Използвайте тайните на вавилонската астрология, за да предвидите движенията на пазара с прецизност. Нашите небесни прозрения водят инвеститорите през несигурността повече от десетилетие.
          </p>
          <div class="flex flex-wrap gap-4">
            <button class="btn btn-primary">
              Започнете Вашето Пътешествие
            </button>
            <button class="btn btn-outline">
              Вижте Примерна Прогноза
            </button>
          </div>
          
          <div class="mt-12 flex items-center gap-4">
            <div class="flex -space-x-2">
              <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Потребител" class="w-10 h-10 rounded-full border-2 border-neutral-900 object-cover" />
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Потребител" class="w-10 h-10 rounded-full border-2 border-neutral-900 object-cover" />
              <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Потребител" class="w-10 h-10 rounded-full border-2 border-neutral-900 object-cover" />
            </div>
            <span class="text-sm text-neutral-400">Присъединете се към <span class="text-secondary-400">2,500+</span> инвеститори, използващи звездите</span>
          </div>
        </div>
        
        <div class="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
          <div class="relative animate-float">
            <div class="w-full max-w-md bg-neutral-900/80 backdrop-blur-sm border border-primary-700/50 rounded-lg p-6 shadow-lg shadow-primary-900/30">
              <div class="text-center mb-6">
                <span class="text-sm text-neutral-400">Следваща Голяма Пазарна Промяна</span>
                <h3 class="text-2xl font-serif gold-gradient">Юпитер-Сатурн Подравняване</h3>
                <p class="text-neutral-300">15 юни, 2025 • остават 22 дни</p>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center">
                    <div class="w-8 h-8 bg-secondary-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-serif text-secondary-400">Енергиен Сектор</h4>
                    <p class="text-sm text-neutral-300">Прогнозиран 12% Растеж</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center">
                    <div class="w-8 h-8 bg-error-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-serif text-error-500">Технологичен Сектор</h4>
                    <p class="text-sm text-neutral-300">Прогнозиран 8% Спад</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary-800/50 rounded-full flex items-center justify-center">
                    <div class="w-8 h-8 bg-accent-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 class="font-serif text-accent-400">Благородни Метали</h4>
                    <p class="text-sm text-neutral-300">Прогнозиран 15% Растеж</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-6 pt-4 border-t border-primary-800">
                <button class="w-full btn btn-secondary">Достъп до Пълния Доклад</button>
              </div>
            </div>
            
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-accent-500/20 rounded-full blur-xl"></div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>