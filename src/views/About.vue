<script setup lang="ts">
import { ref } from 'vue';

const milestones = ref([
]);

const team = ref([
]);

const achievements = ref([
  { 
    value: '50+', 
    label: 'Специалистов',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  { 
    value: '5', 
    label: 'Линеек продукции',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  { 
    value: '2', 
    label: 'Офиса в Москве и СПб',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  { 
    value: '100%', 
    label: 'Российская продукция',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  }
]);

const values = ref([
  {
    title: 'Инновации',
    description: 'Мы постоянно исследуем новые технологии и подходы к решению сложных задач, чтобы предлагать нашим клиентам самые передовые решения.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    title: 'Качество',
    description: 'Мы внедрили строгую систему контроля качества на всех этапах разработки и производства, чтобы гарантировать надежность наших решений.',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  },
  {
    title: 'Надежность',
    description: 'Наши продукты проходят тщательное тестирование в различных условиях, чтобы обеспечить стабильную работу в любой ситуации.',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
  },
  {
    title: 'Импортозамещение',
    description: 'Мы стремимся предоставить российским предприятиям и госструктурам современные альтернативы импортному оборудованию и ПО.',
    icon: 'M3 3v18h18M1 12h4m5 8v-4m5 4v-8m5 8V8M5 8h14'
  }
]);
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-[var(--secondary)] text-white py-20">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">О компании</h1>
            <p class="text-xl leading-relaxed opacity-90">
              ООО «АРЕС» — российский разработчик и производитель сетевого оборудования и программного обеспечения,
              специализирующийся на создании надежных и безопасных решений для бизнеса и государственных структур.
            </p>
            <div class="mt-8 flex space-x-4">
              <a href="#mission" class="btn bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 px-6">
                Наша миссия
              </a>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div class="text-4xl font-bold text-white mb-2">2024</div>
                  <div class="text-sm uppercase tracking-wider text-white/80">дата основания</div>
                </div>
                <div class="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div class="text-4xl font-bold text-white mb-2">5</div>
                  <div class="text-sm uppercase tracking-wider text-white/80">линеек продукции</div>
                </div>
                <div class="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div class="text-4xl font-bold text-white mb-2">50+</div>
                  <div class="text-sm uppercase tracking-wider text-white/80">сотрудников</div>
                </div>
                <div class="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div class="text-4xl font-bold text-white mb-2">100%</div>
                  <div class="text-sm uppercase tracking-wider text-white/80">российское ПО</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Video Section -->
    <section class="py-16 bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <!-- В реальном приложении здесь будет видео -->
            <div class="bg-gray-200 w-full h-full flex items-center justify-center">
              <svg class="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-6">Российские инновации в области сетевых технологий</h2>
            <p class="text-gray-700 mb-4 text-lg">
              Компания «АРЕС» была основана в 2024 году группой инженеров и специалистов в области сетевых технологий с целью создания отечественных решений мирового уровня.
            </p>
            <p class="text-gray-700 mb-4 text-lg">
              Мы разрабатываем и производим сетевое оборудование и программное обеспечение, которое обеспечивает высокий уровень безопасности, производительности и надежности для корпоративных и государственных заказчиков.
            </p>
            <p class="text-gray-700 text-lg">
              Наша команда включает более 50 высококвалифицированных специалистов в области разработки программного обеспечения, проектирования сетевого оборудования, кибербезопасности и электроники.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Наши достижения</h2>
          <p class="text-lg text-gray-600">
            Результаты, которыми мы гордимся и которые мотивируют нас продолжать развиваться и совершенствоваться
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            v-for="achievement in achievements" 
            :key="achievement.label"
            class="bg-white rounded-lg shadow-md p-6 text-center transform transition hover:scale-105"
          >
            <div class="w-12 h-12 bg-[var(--primary)] bg-opacity-10 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg 
                class="w-6 h-6 text-[var(--primary)]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  :d="achievement.icon"
                />
              </svg>
            </div>
            <div class="text-4xl font-bold text-[var(--primary)] mb-2">{{ achievement.value }}</div>
            <div class="text-gray-600">{{ achievement.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="py-16 bg-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Наша миссия</h2>
          <p class="text-xl text-gray-700">
            Обеспечение технологической независимости российских предприятий и организаций
            путем создания современного и надежного сетевого оборудования и программного обеспечения.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="value in values" 
            :key="value.title"
            class="bg-white rounded-lg shadow-md p-6 border-t-4 border-[var(--primary)] h-full"
          >
            <div class="w-12 h-12 bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <svg 
                class="w-6 h-6 text-[var(--primary)]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  :d="value.icon"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section class="py-16 bg-[var(--primary)]">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-6">Присоединяйтесь к цифровой трансформации</h2>
          <p class="text-xl mb-8 opacity-90">
            Мы всегда открыты для талантливых специалистов, которые хотят внести свой вклад в развитие российских технологий
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link
              to="/contacts"
              class="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-8 py-3"
            >
              Свяжитесь с нами
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>