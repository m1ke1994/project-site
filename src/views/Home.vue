<script setup lang="ts">
import { ref } from 'vue';

/**
 * Карточки решений.
 * Иконки лежат в public/assets/SolutionIcons/*.svg и подключаются как <img src="/...">
 * Важно: у всех карточек задан link, чтобы <router-link> всегда имел корректный маршрут.
 */
const solutions = ref([
  {
    id: 1,
    title: 'Сетевое оборудование',
    description: 'Маршрутизаторы и коммутаторы для построения надежных сетей',
    icon: '/assets/SolutionIcons/1.svg', // ИКОНКА РЕШЕНИЯ #1 (img): файл public/assets/SolutionIcons/1.svg
    link: '/products'
  },
  {
    id: 2,
    title: 'Программное обеспечение',
    description: 'Операционная система и специализированное ПО для управления сетями',
    icon: '/assets/SolutionIcons/2.svg', // ИКОНКА РЕШЕНИЯ #2 (img): файл public/assets/SolutionIcons/2.svg
    link: '/products'
  },
  {
    id: 3,
    title: 'Решения для государственных структур',
    description: 'Безопасные решения с учетом требований импортозамещения',
    icon: '/assets/SolutionIcons/3.svg', // ИКОНКА РЕШЕНИЯ #3 (img): файл public/assets/SolutionIcons/3.svg
    link: '/solutions'
  },
  {
    id: 4,
    title: 'Телекоммуникации',
    description: 'Высокопроизводительные решения для операторов связи',
    icon: '/assets/SolutionIcons/4.svg', // ИКОНКА РЕШЕНИЯ #4 (img): файл public/assets/SolutionIcons/4.svg
    link: '/solutions'
  }
]);

/**
 * Отзывы клиентов. Без изображений в данных; иконка кавычек добавлена в шаблоне.
 */
const customers = ref([
  {
    id: 1,
    name: 'ПАО "ТехноГрад"',
    quote:
      'Внедрение оборудования АРЕС позволило нам создать надежную и безопасную сетевую инфраструктуру, полностью соответствующую требованиям импортозамещения.',
    role: 'Директор по ИТ'
  },
  {
    id: 2,
    name: 'Министерство цифрового развития',
    quote:
      'Сотрудничество с ООО «АРЕС» позволило нам модернизировать сетевую инфраструктуру в соответствии с современными требованиями безопасности и производительности.',
    role: 'Руководитель департамента'
  }
]);
</script>

<template>
  <div>
    <!-- Hero Section with Background -->
    <section class="relative bg-[var(--secondary)] text-white py-0 overflow-hidden">
      <!-- ПОЛУПРОЗРАЧНЫЙ ГРАДИЕНТ ФОН -->
      <div class="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] opacity-90"></div>

      <!-- ФОНОВЫЙ ПАТТЕРН (data URI, не внешний файл) -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          style="background-image: url('data:image/svg+xml,%3Csvg width%3D%22100%22 height%3D%22100%22 viewBox%3D%220 0 100 100%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22%23ffffff%22 fill-rule%3D%22evenodd%22%3E%3Ccircle cx%3D%2225%22 cy%3D%2225%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%2225%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2275%22 cy%3D%2225%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%22100%22 cy%3D%2225%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2225%22 cy%3D%2250%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%2250%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2275%22 cy%3D%2250%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%22100%22 cy%3D%2250%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2225%22 cy%3D%2275%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%2275%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2275%22 cy%3D%2275%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%22100%22 cy%3D%2275%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2225%22 cy%3D%22100%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2250%22 cy%3D%22100%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2275%22 cy%3D%22100%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%22100%22 cy%3D%22100%22 r%3D%221%22%2F%3E%3Cpath d%3D%22M0 0h25v25H0zM25 0h1v1h-1zM0 25h1v1H0zM99 0h1v1h-1zM0 99h1v1H0zM99 99h1v1h-1z%22 opacity%3D%220.05%22%2F%3E%3Cpath d%3D%22M30 10h5v5h-5zM70 10h5v5h-5zM30 70h5v5h-5zM70 70h5v5h-5zM10 30h5v5h-5zM90 30h5v5h-5zM10 60h5v5h-5zM90 60h5v5h-5z%22 opacity%3D%220.1%22%2F%3E%3Cpath d%3D%22M40 20h20v1H40zM60 40h1v20h-1zM40 60h20v1H40zM20 40h1v20h-1zM80 40h1v20h-1z%22 opacity%3D%220.2%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'); background-size: 50px 50px;"
        />
      </div>

      <div class="container relative z-10 py-20 md:py-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Технологии для цифровой трансформации
            </h1>
            <p class="text-xl md:text-2xl opacity-90 leading-relaxed">
              Разрабатываем инновационные сетевые решения и программное обеспечение для построения надежной и безопасной
              ИТ-инфраструктуры
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link
                to="/products"
                class="btn btn-primary bg-white text-[var(--primary)] hover:bg-gray-100 hover:text-[#004287] border-2 border-[#0350A3] text-lg px-8 py-3"
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
            <div class="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20">
              <!-- ИЛЛЮСТРАЦИЯ СЕТИ (img): public/assets/Illustrations/network-graph.svg — декоративная схема сетевых узлов -->
              <img
                src="/assets/Illustrations/network-graph.svg"
                alt="Network graph"
                class="w-full h-80"
                loading="lazy"
                aria-hidden="true"
              />
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
                <!-- ИКОНКА КАРТОЧКИ (img): solution.icon — файл public/assets/SolutionIcons/{id}.svg -->
                <img
                  :src="solution.icon"
                  :alt="`Иконка решения: ${solution.title}`"
                  class="w-6 h-6"
                  loading="lazy"
                />
              </div>

              <h3 class="text-xl font-bold mb-2">{{ solution.title }}</h3>
              <p class="text-gray-600 mb-4 flex-1">{{ solution.description }}</p>

              <router-link
                :to="solution.link"
                class="text-[var(--primary)] hover:text-[var(--secondary)] font-medium flex items-center mt-auto"
              >
                Подробнее
                <!-- СТРЕЛКА ПОДРОБНЕЕ (img): public/assets/SolutionIcons/arrow-right.svg — индикатор перехода -->
                <img
                  src="/assets/SolutionIcons/arrow-right.svg"
                  alt="Перейти"
                  class="w-4 h-4 ml-1"
                  loading="lazy"
                  aria-hidden="true"
                />
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
                <!-- ИКОНКА «БЕЗОПАСНОСТЬ» (img): public/assets/SolutionIcons/security.svg — визуальный маркер преимущества -->
                <img
                  class="w-10 h-10 mx-auto"
                  src="/assets/SolutionIcons/security.svg"
                  alt="Безопасность"
                  loading="lazy"
                />
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-3">Безопасность</h3>
            <p class="text-gray-600">
              Встроенные механизмы защиты от сетевых угроз, шифрование данных и контроль доступа обеспечивают высокий
              уровень безопасности инфраструктуры
            </p>
          </div>

          <div class="text-center">
            <div class="mb-6">
              <div class="w-20 h-20 mx-auto bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center">
                <!-- ИКОНКА «ПРОИЗВОДИТЕЛЬНОСТЬ» (img): public/assets/SolutionIcons/efficiency.svg -->
                <img
                  class="w-10 h-10 mx-auto"
                  src="/assets/SolutionIcons/efficiency.svg"
                  alt="Производительность"
                  loading="lazy"
                />
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-3">Производительность</h3>
            <p class="text-gray-600">
              Оптимизированная архитектура оборудования и программного обеспечения позволяет достичь высокой скорости
              обработки и передачи данных
            </p>
          </div>

          <div class="text-center">
            <div class="mb-6">
              <div class="w-20 h-20 mx-auto bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center">
                <!-- ИКОНКА «НАДЕЖНОСТЬ» (img): public/assets/SolutionIcons/reliability.svg -->
                <img
                  class="w-10 h-10 mx-auto"
                  src="/assets/SolutionIcons/reliability.svg"
                  alt="Надежность"
                  loading="lazy"
                />
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-3">Надежность</h3>
            <p class="text-gray-600">
              Стабильная работа в любых условиях эксплуатации, резервирование критически важных компонентов и
              возможность горячей замены модулей
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
              <!-- ИКОНКА КАВЫЧЕК (img): public/assets/SolutionIcons/apostle.svg — декоративная иконка в карточке отзыва -->
              <img
                src="/assets/SolutionIcons/apostle.svg"
                alt="Кавычки"
                class="w-8 h-8 mr-2"
                loading="lazy"
                aria-hidden="true"
              />
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
            <router-link to="/contacts" class="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-8 py-3">
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
