Here's the fixed script with missing closing brackets added:

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Product categories
const categories = ref([
  { id: 'all', name: 'Все продукты', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { id: 'hardware', name: 'Сетевое оборудование', icon: 'M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z' },
  { id: 'software', name: 'Программное обеспечение', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
]);

// Extended product data with more details
const products = ref([
  {
    id: 1, 
    category: 'hardware',
    name: 'Промышленная mesh точка доступа Wi-Fi',
    shortDescription: 'Беспроводная точка доступа для создания mesh-сетей в промышленных условиях',
    description: 'Промышленная беспроводная точка доступа, спроектированная для работы в сложных условиях производственных объектов. Поддерживает mesh-технологии для создания бесшовных беспроводных сетей большой площади с высокой надежностью и производительностью.',
    price: 'от 35 000 ₽',
    availability: 'В наличии',
    features: [
      'Wi-Fi 6 (802.11ax)',
      'Mesh-технология для бесшовного покрытия',
      'Защита от пыли и влаги IP67',
      'Рабочая температура от -40°C до +70°C',
      'Питание через PoE+',
      'Поддержка VLAN и QoS',
      'Централизованное управление',
      'Встроенная система безопасности',
      'Поддержка до 128 одновременных подключений',
      'Дальность покрытия до 300 метров',
      'Антенны с высоким коэффициентом усиления',
      'Автоматическое переключение каналов'
    ],
    specs: [
      { name: 'Стандарт Wi-Fi', value: '802.11ax (Wi-Fi 6)' },
      { name: 'Частотные диапазоны', value: '2.4 ГГц, 5 ГГц' },
      { name: 'Максимальная скорость', value: 'до 1.8 Гбит/с' },
      { name: 'Степень защиты', value: 'IP67' },
      { name: 'Рабочая температура', value: 'от -40°C до +70°C' }
    ],
    bestseller: true,
    new: false,
    image: '/products/mesh-wifi.jpg',
    benefits: ['Промышленное исполнение', 'Mesh-технология', 'Широкий температурный диапазон'],
    path: '/products/mesh-wifi'
  },
  {
    id: 2,
    category: 'hardware', 
    name: 'Промышленный коммутатор',
    shortDescription: 'Управляемый коммутатор для промышленных сетей с расширенными функциями',
    description: 'Промышленный управляемый коммутатор, разработанный для работы в сложных производственных условиях. Обеспечивает надежную передачу данных, поддерживает промышленные протоколы и имеет защищенное исполнение для работы в агрессивных средах.',
    price: 'от 45 000 ₽',
    availability: 'В наличии',
    features: [
      '24 порта Fast Ethernet',
      '4 порта Gigabit Ethernet',
      'Поддержка PoE для IP-устройств',
      'Защита от пыли и влаги IP40',
      'Рабочая температура от -40°C до +75°C',
      'Резервированное питание',
      'Поддержка промышленных протоколов',
      'VLAN и QoS',
      'Ring topology с быстрым восстановлением',
      'SNMP управление',
      'Защита от электромагнитных помех',
      'DIN-rail монтаж'
    ],
    specs: [
      { name: 'Порты Fast Ethernet', value: '24 x 10/100 Мбит/с' },
      { name: 'Порты Gigabit', value: '4 x 10/100/1000 Мбит/с' },
      { name: 'Коммутационная матрица', value: '8.8 Гбит/с' },
      { name: 'Степень защиты', value: 'IP40' },
      { name: 'Рабочая температура', value: 'от -40°C до +75°C' }
    ],
    bestseller: false,
    new: true,
    image: '/products/industrial-switch.jpg',
    benefits: ['Промышленное исполнение', 'PoE поддержка', 'Высокая надежность'],
    path: '/products/industrial-switch'
  },
  {
    id: 3,
    category: 'hardware',
    name: 'Умный домофон',
    shortDescription: 'IP-домофон с распознаванием лиц и удаленным управлением',
    description: 'Современный IP-домофон с функциями распознавания лиц, видеозвонков и удаленного управления через мобильное приложение. Обеспечивает высокий уровень безопасности и удобство использования для жилых и офисных зданий.',
    price: 'от 25 000 ₽',
    availability: 'В наличии',
    features: [
      'Распознавание лиц с ИИ',
      'HD видеокамера с ночным видением',
      'Сенсорный экран 7 дюймов',
      'Удаленное управление через приложение',
      'Двусторонняя аудиосвязь',
      'Защита от вандализма',
      'Интеграция с системами СКУД',
      'База данных до 10 000 лиц',
      'Поддержка карт доступа',
      'Уведомления на смартфон',
      'Запись видео при вызове',
      'Работа в диапазоне температур от -30°C до +60°C'
    ],
    specs: [
      { name: 'Экран', value: '7" TFT сенсорный' },
      { name: 'Камера', value: 'Full HD 1080p' },
      { name: 'Связь', value: 'Ethernet, Wi-Fi' },
      { name: 'Степень защиты', value: 'IP54' },
      { name: 'Рабочая температура', value: 'от -30°C до +60°C' }
    ],
    bestseller: false,
    new: true, 
    image: '/products/smart-intercom.jpg',
    benefits: ['ИИ распознавание', 'Удаленное управление', 'Вандалостойкость'],
    path: '/products/smart-intercom'
  },
  {
    id: 4,
    category: 'software',
    name: 'Промышленная операционная система Aspen OS',
    shortDescription: 'Специализированная ОС для промышленных компьютеров и контроллеров',
    description: 'Aspen OS - это операционная система реального времени, разработанная специально для промышленных применений. Обеспечивает высокую надежность, детерминированность и безопасность для критически важных промышленных процессов.',
    price: 'Лицензия от 60 000 ₽',
    availability: 'В наличии',
    features: [
      'Операционная система реального времени (RTOS)',
      'Поддержка промышленных протоколов',
      'Высокая отказоустойчивость',
      'Детерминированная обработка задач',
      'Встроенная система безопасности',
      'Поддержка виртуализации',
      'Модульная архитектура',
      'Удаленное управление и мониторинг',
      'Интеграция с SCADA системами',
      'Поддержка промышленных шин данных',
      'Резервирование критических процессов',
      'Сертификация для критических применений'
    ],
    specs: [
      { name: 'Тип ОС', value: 'RTOS (Real-Time OS)' },
      { name: 'Архитектура', value: 'x86-64, ARM' },
      { name: 'Время отклика', value: '< 1 мс' },
      { name: 'Поддержка протоколов', value: 'Modbus, EtherCAT, Profinet' },
      { name: 'Требования к ОЗУ', value: 'минимум 1 ГБ' }
    ],
    bestseller: true,
    new: false,
    image: '/products/aspen-os.jpg',
    benefits: ['Реальное время', 'Промышленные протоколы', 'Высокая надежность'],
    path: '/products/aspen-os'
  },
  {
    id: 5,
    category: 'software',
    name: 'Система мониторинга Ares Monitoring',
    shortDescription: 'Комплексная платформа для мониторинга промышленного оборудования',
    description: 'Ares Monitoring - это мощная система мониторинга и управления промышленным оборудованием. Обеспечивает централизованный контроль состояния оборудования, предиктивную аналитику и автоматизацию процессов обслуживания.',
    price: 'Лицензия от 90 000 ₽',
    availability: 'В наличии',
    features: [
      'Мониторинг промышленного оборудования в реальном времени',
      'Предиктивная аналитика отказов',
      'Интерактивные дашборды',
      'Система оповещений и уведомлений',
      'Интеграция с промышленными сетями',
      'Анализ энергопотребления',
      'Планирование технического обслуживания',
      'Отчетность и аналитика',
      'Поддержка IoT устройств',
      'Машинное обучение для анализа трендов',
      'Мобильное приложение для операторов',
      'Интеграция с ERP системами'
    ],
    specs: [
      { name: 'Количество устройств', value: 'до 10 000' },
      { name: 'База данных', value: 'PostgreSQL, InfluxDB' },
      { name: 'Поддержка протоколов', value: 'OPC UA, Modbus, MQTT' },
      { name: 'Веб-интерфейс', value: 'Адаптивный HTML5' },
      { name: 'Требования к серверу', value: '16 ГБ ОЗУ, 500 ГБ SSD' }
    ],
    bestseller: false,
    new: true,
    image: '/products/ares-monitoring.jpg',
    benefits: ['Предиктивная аналитика', 'IoT интеграция', 'Мобильный доступ'],
    path: '/products/ares-monitoring'
  }
]);

// Customer testimonials  
const testimonials = ref([
  {
    id: 1,
    customer: 'ПАО "ПромТех"',
    quote: 'Внедрение промышленных коммутаторов АРЕС позволило нам создать надежную сеть на производстве с высокой отказоустойчивостью.',
    author: 'Сергей Петров',
    position: 'Главный инженер',
    image: '/testimonials/promtech.jpg'
  },
  {
    id: 2,
    customer: 'ЗАО "Автоматизация+"',
    quote: 'Система мониторинга Ares Monitoring помогла нам снизить простои оборудования на 40% благодаря предиктивной аналитике.',
    author: 'Анна Козлова',
    position: 'Руководитель отдела автоматизации',
    image: '/testimonials/automation.jpg'
  }
]);

// Frequently asked questions
const faqs = ref([
  {
    question: 'Какие гарантии предоставляются на промышленное оборудование?',
    answer: 'На все промышленное оборудование АРЕС предоставляется гарантия 3 года с возможностью расширения до 5 лет. В течение гарантийного срока предоставляется бесплатное обслуживание и замена оборудования в случае выхода из строя.'
  },
  {
    question: 'Подходит ли оборудование для работы в агрессивных средах?',
    answer: 'Да, наше промышленное оборудование специально разработано для работы в сложных условиях: широкий температурный диапазон, защита от пыли и влаги, устойчивость к вибрациям и электромагнитным помехам.'
  },
  {
    question: 'Возможна ли интеграция с существующими системами?',
    answer: 'Наши продукты поддерживают стандартные промышленные протоколы (Modbus, OPC UA, EtherCAT и др.), что обеспечивает совместимость с большинством существующих систем автоматизации.'
  },
  {
    question: 'Как получить техническую поддержку?',
    answer: 'Техническая поддержка доступна 24/7 по телефону и электронной почте. Для корпоративных клиентов предоставляется персональный менеджер и возможность выезда специалиста на объект.'
  }
]);

// Current active category and search term
const activeCategory = ref('all');
const searchTerm = ref('');
const activeDropdown = ref(null);

// Computed filtered products based on category and search
const filteredProducts = computed(() => {
  let filtered = products.value;
  
  // Filter by category
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(product => product.category === activeCategory.value);
  }
  
  // Filter by search term
  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase();
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(term) || 
      product.shortDescription.toLowerCase().includes(term)
    );
  }
  
  return filtered;
});

// Toggle dropdown visibility
const toggleDropdown = (id) => {
  activeDropdown.value = activeDropdown.value === id ? null : id;
};

// Check if product is in viewport for animation
onMounted(() => {
  // Here we would typically implement intersection observer
  // for animation purposes when scrolling
  console.log('Products component mounted');
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-[var(--secondary)] text-white py-16">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Наши продукты</h1>
          <p class="text-xl opacity-90">
            Современные решения для промышленности: от сетевого оборудования до специализированного программного обеспечения
          </p>
        </div>
      </div>
    </section>

  <!-- Products Grid -->
<section class="py-16">
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer group
               h-full flex flex-col"
        @click="$router.push(product.path)"
        role="button"
        tabindex="0"
        @keydown.enter="$router.push(product.path)"
      >
        <!-- Медиа: фиксированное соотношение сторон -->
        <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <div class="w-full h-full flex items-center justify-center">
            <svg class="w-20 h-20 text-gray-400 group-hover:text-[var(--primary)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
        </div>

        <!-- Контент: тянется, низ — прижат -->
        <div class="p-6 flex-1 flex flex-col">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold">{{ product.name }}</h3>
            <span
              v-if="product.bestseller"
              class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
            >Хит</span>
            <span
              v-else-if="product.new"
              class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
            >Новинка</span>
          </div>

          <!-- Краткое описание -->
          <p class="text-gray-600 mb-4">
            {{ product.shortDescription }}
          </p>

          <!-- Ключевые преимущества -->
          <div class="mb-4">
            <div class="flex flex-wrap gap-1">
              <span
                v-for="(benefit, index) in product.benefits.slice(0, 3)"
                :key="benefit + index"
                class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {{ benefit }}
              </span>
            </div>
          </div>

          <!-- Нижняя строка: всегда у нижнего края карточки -->
          <div class="mt-auto flex items-center justify-between pt-2">
            <span class="text-xl font-bold text-[var(--primary)]">
              {{ product.price }}
            </span>
            <span
              class="text-sm font-medium"
              :class="product.availability === 'В наличии' ? 'text-green-600' : 'text-gray-500'"
            >
              {{ product.availability }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- CTA Section -->
    <section class="py-16 bg-[var(--primary)]">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-6">Нужна помощь с выбором?</h2>
          <p class="text-xl mb-8 opacity-90">
            Наши специалисты готовы помочь подобрать оптимальное решение для вашей организации
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link
              to="/contacts"
              class="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-8 py-3"
            >
              Связаться с нами
            </router-link>
            <router-link
              to="/solutions"
              class="btn text-white border-2 border-white hover:bg-white hover:text-[var(--primary)] transition-colors text-lg px-8 py-3"
            >
              Отраслевые решения
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>