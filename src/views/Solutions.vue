<script setup lang="ts">
import { ref } from 'vue';

const industries = ref([
  {
    id: 'government',
    title: 'Государственный сектор',
    description: 'Комплексные решения для государственных учреждений с учетом требований безопасности и импортозамещения',
    icon: 'M11 11V9a1 1 0 112 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2zm1 11a10 10 0 100-20 10 10 0 000 20z',
    features: [
      'Полное соответствие требованиям регуляторов',
      'Российское оборудование и ПО',
      'Защищенные каналы связи',
      'Сертифицированные решения',
    ],
    benefits: [
      'Независимость от иностранных поставщиков',
      'Повышенная защита конфиденциальной информации',
      'Прозрачность управления инфраструктурой',
      'Долгосрочная техническая поддержка',
    ],
    caseStudies: [
      {
        name: 'Региональное управление',
        description: 'Внедрение защищенной сетевой инфраструктуры для государственного учреждения',
        results: [
          'Повышение безопасности на 40%', 
          'Снижение затрат на 25%', 
          'Полное соответствие требованиям 152-ФЗ',
          'Упрощение администрирования сети'
        ],
        technologies: ['АРЕС Маршрутизатор PRO', 'АРЕС Межсетевой экран', 'АРЕС ОС']
      },
      {
        name: 'Муниципальные службы',
        description: 'Модернизация ИТ-инфраструктуры муниципальных служб среднего города',
        results: [
          'Создание единой защищенной сети', 
          'Централизованное управление доступом', 
          'Снижение времени простоя на 70%',
          'Соответствие требованиям регуляторов'
        ],
        technologies: ['АРЕС Коммутатор Enterprise', 'АРЕС ОС', 'АРЕС Мониторинг']
      }
    ]
  },
  {
    id: 'industry',
    title: 'Промышленность',
    description: 'Надежные решения для промышленных предприятий с поддержкой специализированных протоколов и работой в сложных условиях',
    icon: 'M18.364 5.636a9 9 0 11-12.728 0m12.728 0L12 0l-6.364 5.636m0 12.728L12 24l6.364-5.636m0-12.728L12 12l-6.364-5.636',
    features: [
      'Устойчивость к экстремальным условиям',
      'Поддержка промышленных протоколов',
      'Защита от несанкционированного доступа',
      'Резервирование критически важных компонентов'
    ],
    benefits: [
      'Минимизация простоев производства',
      'Сегментация производственных и офисных сетей',
      'Надежная передача данных в реальном времени',
      'Защита от промышленного шпионажа'
    ],
    caseStudies: [
      {
        name: 'Машиностроительный завод',
        description: 'Модернизация сетевой инфраструктуры производственного предприятия',
        results: [
          'Увеличение отказоустойчивости сети', 
          'Поддержка промышленных протоколов', 
          'Снижение простоев на 60%',
          'Разделение административных и производственных сетей'
        ],
        technologies: ['АРЕС Маршрутизатор PRO', 'АРЕС Коммутатор Enterprise', 'АРЕС Межсетевой экран']
      },
      {
        name: 'Нефтеперерабатывающее предприятие',
        description: 'Создание отказоустойчивой сетевой инфраструктуры для критически важных объектов',
        results: [
          'Повышение безопасности сетевого взаимодействия', 
          'Интеграция с системами АСУ ТП', 
          'Защита от внешних и внутренних угроз',
          'Работа в режиме 24/7 без сбоев'
        ],
        technologies: ['АРЕС Маршрутизатор PRO', 'АРЕС ОС', 'АРЕС Мониторинг']
      }
    ]
  },
  {
    id: 'telecom',
    title: 'Телекоммуникации',
    description: 'Высокопроизводительные решения для операторов связи и провайдеров услуг с поддержкой масштабирования',
    icon: 'M5.636 18.364a9 9 0 010-12.728m0 12.728l5.636-5.636m-5.636 5.636L0 12l5.636-5.636m12.728 0a9 9 0 010 12.728m0-12.728L12 0l5.636 5.636m0 12.728L12 24l5.636-5.636',
    features: [
      'Высокая пропускная способность',
      'Поддержка современных протоколов',
      'Масштабируемость решений',
      'Централизованное управление'
    ],
    benefits: [
      'Снижение операционных затрат',
      'Быстрое внедрение новых услуг',
      'Повышение качества обслуживания клиентов',
      'Оптимизация использования сетевых ресурсов'
    ],
    caseStudies: [
      {
        name: 'Региональный провайдер',
        description: 'Внедрение оборудования для построения опорной сети провайдера',
        results: [
          'Увеличение пропускной способности в 2 раза', 
          'Снижение задержек на 30%', 
          'Упрощение администрирования',
          'Повышение отказоустойчивости сети'
        ],
        technologies: ['АРЕС Маршрутизатор PRO', 'АРЕС Межсетевой экран', 'АРЕС Мониторинг']
      },
      {
        name: 'Оператор мобильной связи',
        description: 'Модернизация транспортной сети для поддержки растущего трафика',
        results: [
          'Поддержка трафика 5G', 
          'Снижение эксплуатационных расходов на 35%', 
          'Повышение надежности сети',
          'Уменьшение времени простоя'
        ],
        technologies: ['АРЕС Маршрутизатор PRO', 'АРЕС Коммутатор Enterprise', 'АРЕС ОС']
      }
    ]
  },
  {
    id: 'finance',
    title: 'Финансовый сектор',
    description: 'Безопасные и надежные решения для банков, страховых компаний и финансовых организаций',
    icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2m7-5a2 2 0 11-4 0 2 2 0 014 0z',
    features: [
      'Многоуровневая защита данных',
      'Соответствие требованиям PCI DSS',
      'Резервирование критических систем',
      'Мониторинг в режиме реального времени'
    ],
    benefits: [
      'Защита персональных данных клиентов',
      'Непрерывность бизнес-процессов',
      'Противодействие мошенничеству',
      'Соответствие требованиям регуляторов'
    ],
    caseStudies: [
      {
        name: 'Коммерческий банк',
        description: 'Модернизация сетевой инфраструктуры и систем защиты региональной сети банка',
        results: [
          'Повышение уровня безопасности', 
          'Обеспечение отказоустойчивости каналов связи', 
          'Централизованное управление',
          'Соответствие требованиям ЦБ РФ'
        ],
        technologies: ['АРЕС Межсетевой экран', 'АРЕС Маршрутизатор PRO', 'АРЕС Мониторинг']
      }
    ]
  },
  {
    id: 'education',
    title: 'Образование',
    description: 'Комплексные сетевые решения для образовательных учреждений всех уровней',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
    features: [
      'Сегментация учебной и административной сети',
      'Управление пропускной способностью',
      'Контроль доступа к контенту',
      'Безопасный Wi-Fi'
    ],
    benefits: [
      'Создание современной образовательной среды',
      'Защита учащихся от нежелательного контента',
      'Оптимизация расходов на ИТ-инфраструктуру',
      'Соответствие требованиям импортозамещения'
    ],
    caseStudies: [
      {
        name: 'Университетский кампус',
        description: 'Модернизация сетевой инфраструктуры крупного университета',
        results: [
          'Повышение скорости доступа к образовательным ресурсам', 
          'Обеспечение безопасности пользователей', 
          'Разделение административной и учебной сетей',
          'Централизованное управление'
        ],
        technologies: ['АРЕС Коммутатор Enterprise', 'АРЕС Маршрутизатор PRO', 'АРЕС Межсетевой экран']
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Здравоохранение',
    description: 'Специализированные решения для медицинских учреждений с учетом требований к защите персональных данных',
    icon: 'M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    features: [
      'Защита персональных медицинских данных',
      'Сегментация сетей медицинского оборудования',
      'Непрерывность доступа к критически важным данным',
      'Резервирование каналов связи'
    ],
    benefits: [
      'Соответствие требованиям 152-ФЗ',
      'Защита от утечек медицинских данных',
      'Бесперебойная работа медицинских информационных систем',
      'Унификация ИТ-инфраструктуры'
    ],
    caseStudies: [
      {
        name: 'Городская клиническая больница',
        description: 'Создание защищенной сетевой инфраструктуры для медицинского учреждения',
        results: [
          'Обеспечение безопасности персональных данных пациентов', 
          'Создание надежной среды для работы медицинских информационных систем', 
          'Повышение отказоустойчивости',
          'Разделение сетей медицинского оборудования и административных систем'
        ],
        technologies: ['АРЕС Межсетевой экран', 'АРЕС Коммутатор Enterprise', 'АРЕС Мониторинг']
      }
    ]
  }
]);

const activeIndustry = ref('government');

const setActiveIndustry = (id: string) => {
  activeIndustry.value = id;
  // Scroll to the section with smooth behavior
  setTimeout(() => {
    const element = document.getElementById('industry-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-[var(--secondary)] text-white py-20">
      <div class="container">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Отраслевые решения</h1>
          <p class="text-xl leading-relaxed">
            Комплексные технологические решения для различных отраслей с учетом их специфики, 
            обеспечивающие высокий уровень производительности, безопасности и надежности.
          </p>
        </div>
      </div>
    </section>

    <!-- Industries Tabs -->
    <section class="bg-white py-12 border-b">
      <div class="container">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="industry in industries"
            :key="industry.id"
            @click="setActiveIndustry(industry.id)"
            :class="[
              'px-5 py-3 rounded-lg transition-colors flex items-center',
              activeIndustry === industry.id
                ? 'bg-[var(--primary)] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="industry.icon"
              />
            </svg>
            {{ industry.title }}
          </button>
        </div>
      </div>
    </section>

<!-- Industry Details -->
<section id="industry-details" class="py-16 bg-gray-50">
  <!-- Центрируем и фиксируем максимальную ширину -->
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div
      v-for="industry in industries"
      :key="industry.id"
      v-show="activeIndustry === industry.id"
    >
      <!-- Заголовок -->
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {{ industry.title }}
        </h2>
        <p class="text-base md:text-lg text-gray-600">
          {{ industry.description }}
        </p>
      </div>

      <!-- Возможности и Преимущества: одинаковая ширина и высота карточек -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 items-stretch">
        <!-- Features -->
        <article class="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col h-full">
          <h3 class="text-lg md:text-xl font-bold mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Ключевые возможности
          </h3>
          <ul class="space-y-4 flex-1">
            <li
              v-for="(feature, index) in industry.features"
              :key="index"
              class="flex items-start"
            >
              <svg class="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>
        </article>

        <!-- Benefits -->
        <article class="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col h-full">
          <h3 class="text-lg md:text-xl font-bold mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Преимущества
          </h3>
          <ul class="space-y-4 flex-1">
            <li
              v-for="(benefit, index) in industry.benefits"
              :key="index"
              class="flex items-start"
            >
              <svg class="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
              </svg>
              <span class="text-gray-700">{{ benefit }}</span>
            </li>
          </ul>
        </article>
      </div>

      <!-- Кейсы: одинаковая ширина и выравнивание по высоте -->
      <h3 class="text-2xl md:text-3xl font-bold mb-8 text-center">Наши проекты</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 items-stretch">
        <article
          v-for="(case_study, index) in industry.caseStudies"
          :key="index"
          class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full"
        >
          <header class="bg-[var(--primary)] px-6 py-4 text-white">
            <h4 class="text-lg md:text-xl font-bold">{{ case_study.name }}</h4>
          </header>

          <div class="p-6 md:p-8 flex-1 flex flex-col">
            <p class="text-gray-600 mb-6">
              {{ case_study.description }}
            </p>

            <div class="mb-6">
              <h5 class="font-bold text-gray-800 mb-3">Результаты:</h5>
              <ul class="space-y-2">
                <li
                  v-for="(result, idx) in case_study.results"
                  :key="idx"
                  class="flex items-start"
                >
                  <svg class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-gray-700">{{ result }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-auto">
              <h5 class="font-bold text-gray-800 mb-3">Использованные технологии:</h5>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, idx) in case_study.technologies"
                  :key="idx"
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div class="bg-white rounded-2xl shadow-md p-6 md:p-10 text-center">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Нужна консультация по внедрению?</h3>
        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
          Наши специалисты помогут подобрать оптимальный набор решений для вашей организации с учетом отраслевой специфики и требований.
        </p>
        <router-link
          to="/contacts"
          class="inline-flex items-center justify-center rounded-2xl btn btn-primary text-base md:text-lg px-6 md:px-8 py-3 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]"
        >
          Связаться с нами
        </router-link>
      </div>
    </div>
  </div>
</section>

    
    <!-- Methodology Section -->
    <section class="py-16 bg-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Наш подход к реализации проектов</h2>
          <p class="text-lg text-gray-600">
            Комплексная методология, обеспечивающая высокое качество внедрения и сопровождения наших решений
          </p>
        </div>
        
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border-t-4 border-[var(--primary)]">
    <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
      <img :src="'/assets/audit.svg'" alt="Аудит" class="w-8 h-8">
    </div>
    <h3 class="text-xl font-bold mb-3">Аудит</h3>
    <p class="text-gray-600">
      Анализ существующей инфраструктуры, выявление узких мест и потенциальных рисков, определение требований
    </p>
  </div>

  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border-t-4 border-[var(--primary)]">
    <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
      <img :src="'/assets/design.svg'" alt="Проектирование" class="w-8 h-8">
    </div>
    <h3 class="text-xl font-bold mb-3">Проектирование</h3>
    <p class="text-gray-600">
      Разработка архитектуры решения, подбор оптимального оборудования и программного обеспечения
    </p>
  </div>

  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border-t-4 border-[var(--primary)]">
    <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
      <img :src="'/assets/deploy.svg'" alt="Внедрение" class="w-8 h-8">
    </div>
    <h3 class="text-xl font-bold mb-3">Внедрение</h3>
    <p class="text-gray-600">
      Поэтапное внедрение решения с минимальным влиянием на бизнес-процессы, тестирование и настройка
    </p>
  </div>

  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border-t-4 border-[var(--primary)]">
    <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
      <img :src="'/assets/support.svg'" alt="Сопровождение" class="w-8 h-8">
    </div>
    <h3 class="text-xl font-bold mb-3">Сопровождение</h3>
    <p class="text-gray-600">
      Техническая поддержка, мониторинг работоспособности, обновления и расширение функциональности по мере необходимости
    </p>
  </div>
</div>


      </div>
    </section>
    
    <!-- Partners Section -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Наши партнеры</h2>
          <p class="text-lg text-gray-600">
            Мы сотрудничаем с ведущими технологическими компаниями для предоставления комплексных решений
          </p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-8">
          <!-- Partner logos would go here -->
          <div class="w-40 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
            <div class="text-gray-400 font-medium">Партнер 1</div>
          </div>
          <div class="w-40 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
            <div class="text-gray-400 font-medium">Партнер 2</div>
          </div>
          <div class="w-40 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
            <div class="text-gray-400 font-medium">Партнер 3</div>
          </div>
          <div class="w-40 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
            <div class="text-gray-400 font-medium">Партнер 4</div>
          </div>
          <div class="w-40 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
            <div class="text-gray-400 font-medium">Партнер 5</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 bg-[var(--primary)]">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-6">Готовы начать проект?</h2>
          <p class="text-xl mb-8 opacity-90">
            Свяжитесь с нами для получения подробной консультации по подбору оптимального решения для вашей отрасли
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

<style scoped>
/* Optional: Add smooth scrolling to the entire page */
html {
  scroll-behavior: smooth;
}

/* Animation for the benefits and features cards */
.bg-white {
  transition: transform 0.3s ease-in-out;
}

.bg-white:hover {
  transform: translateY(-5px);
}
</style>