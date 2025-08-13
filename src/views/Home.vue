<script setup lang="ts">
import { ref } from 'vue';

const solutions = ref([
  {
    id: 1,
    title: 'Сетевое оборудование',
    description: 'Маршрутизаторы и коммутаторы для построения надежных сетей',
    icon: 'M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 12a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 17.586V12z',
    link: '/products'
  },
  {
    id: 2,
    title: 'Программное обеспечение',
    description: 'Операционная система и специализированное ПО для управления сетями',
    icon: 'M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z',
    link: '/products'
  },
  {
    id: 3,
    title: 'Решения для государственных структур',
    description: 'Безопасные решения с учетом требований импортозамещения',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    link: '/solutions'
  },
  {
    id: 4,
    title: 'Телекоммуникации',
    description: 'Высокопроизводительные решения для операторов связи',
    icon: 'M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z',
    link: '/solutions'
  }
]);


const customers = ref([
  {
    id: 1,
    name: 'ПАО "ТехноГрад"',
    quote: 'Внедрение оборудования АРЕС позволило нам создать надежную и безопасную сетевую инфраструктуру, полностью соответствующую требованиям импортозамещения.',
    role: 'Директор по ИТ'
  },
  {
    id: 2,
    name: 'Министерство цифрового развития',
    quote: 'Сотрудничество с ООО «АРЕС» позволило нам модернизировать сетевую инфраструктуру в соответствии с современными требованиями безопасности и производительности.',
    role: 'Руководитель департамента'
  }
]);
</script>

<template>
  <div>
    <!-- Hero Section with Background -->
    <section class="relative bg-[var(--secondary)] text-white py-0 overflow-hidden">
      <!-- Background overlay with gradient -->
      <div class="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] opacity-90"></div>
      
      <!-- Background pattern (optional) -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width%3D%22100%22 height%3D%22100%22 viewBox%3D%220 0 100 100%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22%23ffffff%22 fill-rule%3D%22evenodd%22%3E%3Ccircle cx%3D%2225%22 cy%3D%2225%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%2225%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2275%22 cy%3D%2225%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%22100%22 cy%3D%2225%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2225%22 cy%3D%2250%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%2250%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2275%22 cy%3D%2250%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%22100%22 cy%3D%2250%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2225%22 cy%3D%2275%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%2275%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2275%22 cy%3D%2275%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%22100%22 cy%3D%2275%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2225%22 cy%3D%22100%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%22100%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2275%22 cy%3D%22100%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%22100%22 cy%3D%22100%22 r%3D%221%22%2F%3E%3Cpath d%3D%22M0 0h25v25H0zM25 0h1v1h-1zM0 25h1v1H0zM99 0h1v1h-1zM0 99h1v1H0zM99 99h1v1h-1z%22 opacity%3D%220.05%22%2F%3E%3Cpath d%3D%22M30 10h5v5h-5zM70 10h5v5h-5zM30 70h5v5h-5zM70 70h5v5h-5zM10 30h5v5h-5zM90 30h5v5h-5zM10 60h5v5h-5zM90 60h5v5h-5z%22 opacity%3D%220.1%22%2F%3E%3Cpath d%3D%22M40 20h20v1H40zM60 40h1v20h-1zM40 60h20v1H40zM20 40h1v20h-1zM80 40h1v20h-1z%22 opacity%3D%220.2%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'); background-size: 50px 50px;"></div>
      </div>
      
      <div class="container relative z-10 py-20 md:py-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Технологии для цифровой трансформации
            </h1>
            <p class="text-xl md:text-2xl opacity-90 leading-relaxed">
              Разрабатываем инновационные сетевые решения и программное обеспечение для построения надежной и безопасной ИТ-инфраструктуры
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link
                to="/products"
                class="btn btn-primary bg-white text-[var(--primary)] hover:bg-gray-100  hover:text-[#004287] border-2 border-[#0350A3] text-lg px-8 py-3"

              >
                Наши продукты
              </router-link>
              <router-link
                to="/solutions"
                class="btn text-white border-2 border-white hover:bg-white hover:text-[var(--primary)] transition-colors text-lg px-8 py-3"
              >
                Отраслевые решения
              </router-link>
            </div>
          </div>
          <div class="hidden md:block">
            <!-- Modern abstract network visualization -->
            <div class="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20">
              <svg class="w-full h-80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="white" stroke-width="2" stroke-opacity="0.3"/>
                <circle cx="100" cy="100" r="40" stroke="white" stroke-width="2" stroke-opacity="0.6"/>
                
                <!-- Connection lines -->
                <line x1="40" y1="40" x2="160" y2="160" stroke="white" stroke-width="1" stroke-opacity="0.5"/>
                <line x1="40" y1="160" x2="160" y2="40" stroke="white" stroke-width="1" stroke-opacity="0.5"/>
                <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="1" stroke-opacity="0.5"/>
                <line x1="100" y1="20" x2="100" y2="180" stroke="white" stroke-width="1" stroke-opacity="0.5"/>
                
                <!-- Nodes -->
                <circle cx="40" cy="40" r="6" fill="white"/>
                <circle cx="160" cy="160" r="6" fill="white"/>
                <circle cx="40" cy="160" r="6" fill="white"/>
                <circle cx="160" cy="40" r="6" fill="white"/>
                <circle cx="20" cy="100" r="6" fill="white"/>
                <circle cx="180" cy="100" r="6" fill="white"/>
                <circle cx="100" cy="20" r="6" fill="white"/>
                <circle cx="100" cy="180" r="6" fill="white"/>
                <circle cx="100" cy="100" r="10" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Наши решения</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексные решения для различных отраслей с учетом специфики и требований каждого сектора
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <div 
    v-for="solution in solutions" 
    :key="solution.id"
    class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg flex flex-col"
  >
    <div class="p-6 flex flex-col flex-1">
      <div class="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center mb-4">
        <svg 
          class="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            :d="solution.icon"
          />
        </svg>
      </div>
      <h3 class="text-xl font-bold mb-2">{{ solution.title }}</h3>
      <p class="text-gray-600 mb-4 flex-1">{{ solution.description }}</p>
      <router-link 
        :to="solution.link"
        class="text-[var(--primary)] hover:text-[var(--secondary)] font-medium flex items-center mt-auto"
      >
        Подробнее
        <svg class="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </router-link>
    </div>
  </div>
</div>

      </div>
    </section>

    <!-- Features Section with Icons -->
    <section class="py-16">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Преимущества наших решений</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Создаем инновационные технологии, которые обеспечивают высокую безопасность, производительность и надежность
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center">
            <div class="mb-6">
              <div class="w-20 h-20 mx-auto bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center">
                <svg class="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-3">Безопасность</h3>
            <p class="text-gray-600">
              Встроенные механизмы защиты от сетевых угроз, шифрование данных и контроль доступа обеспечивают высокий уровень безопасности инфраструктуры
            </p>
          </div>
          <div class="text-center">
            <div class="mb-6">
              <div class="w-20 h-20 mx-auto bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center">
                <svg class="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-3">Производительность</h3>
            <p class="text-gray-600">
              Оптимизированная архитектура оборудования и программного обеспечения позволяет достичь высокой скорости обработки и передачи данных
            </p>
          </div>
          <div class="text-center">
            <div class="mb-6">
              <div class="w-20 h-20 mx-auto bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center">
                <svg class="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-3">Надежность</h3>
            <p class="text-gray-600">
              Стабильная работа в любых условиях эксплуатации, резервирование критически важных компонентов и возможность горячей замены модулей
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Что говорят наши клиенты</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Отзывы наших клиентов о внедрении и использовании решений АРЕС
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="customer in customers"
            :key="customer.id"
            class="bg-white rounded-lg shadow-md p-8"
          >
            <div class="flex justify-center mb-6">
              <svg class="w-12 h-12 text-[var(--primary)] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p class="text-gray-700 text-lg italic mb-6">{{ customer.quote }}</p>
            <div class="text-center">
              <p class="font-bold text-lg">{{ customer.name }}</p>
              <p class="text-gray-600">{{ customer.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section class="py-16 bg-[var(--primary)]">
      <div class="container">
        <div class="text-center text-white max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-6">Готовы создать надежную и безопасную инфраструктуру?</h2>
          <p class="text-xl mb-8 opacity-90">
            Свяжитесь с нами, чтобы получить консультацию по подбору оптимального решения для вашей организации
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link
              to="/contacts"
              class="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-8 py-3"
            >
              Связаться с нами
            </router-link>
            <router-link
              to="/products"
              class="btn text-white border-2 border-white hover:bg-white hover:text-[var(--primary)] transition-colors text-lg px-8 py-3"
            >
              Наши продукты
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>