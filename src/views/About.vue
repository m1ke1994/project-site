<script setup lang="ts">
/**
 * Компонент страницы «О компании».
 * ВАЖНО: по просьбе автора код не меняем — только добавляем поясняющие комментарии.
 * Используется Vue 3 <script setup> и Tailwind CSS.
 */

import { ref } from 'vue';

/**
 * Дальнейшее развитие:
 * - milestones — сюда можно добавить хронологию (таймлайн компании)
 * - team — сюда можно добавить список сотрудников/команды
 * Пока массивы пустые и в шаблоне не используются.
 */
const milestones = ref([
]);

const team = ref([
]);

/**
 * achievements — блок «Наши достижения».
 * Каждое достижение: value (число/метрика), label (подпись), icon (путь к SVG).
 *
 * ИКОНКИ:
 * - Пути начинаются с /assets/... → это файлы из ПАПКИ public, т.е. public/assets/...
 * - Подключаются как <img src="...">. Через CSS (например text-white) цвет SVG в <img> не меняется;
 *   если нужен другой цвет — правим сам .svg (fill/stroke), либо рендерим inline-иконку (не в этом файле).
 */
const achievements = ref([
  {
    value: '50+',
    label: 'Специалистов',
    icon: '/assets/AchievementIcons/specialistov.svg'
  },
  {
    value: '5',
    label: 'Линеек продукции',
    icon: '/assets/AchievementIcons/lineek-produkcii.svg'
  },
  {
    value: '2',
    label: 'Офиса в Москве и СПб',
    icon: '/assets/AchievementIcons/ofisa-v-moskve-i-spb.svg'
  },
  {
    value: '100%',
    label: 'Российская продукция',
    icon: '/assets/AchievementIcons/rossiyskaya-produkciya.svg'
  }
]);

/**
 * values — блок «Наша миссия / ценности».
 * Каждая запись: title (заголовок), description (описание), icon (путь к SVG).
 *
 * ИКОНКИ:
 * - Также из public/assets/ValueIcons/*.svg.
 * - Используем <img>, поэтому для доступности желательно осмысленный alt (ниже alt берётся как есть).
 */
const values = ref([
  {
    title: 'Инновации',
    description: 'Мы постоянно исследуем новые технологии и подходы к решению сложных задач, чтобы предлагать нашим клиентам самые передовые решения.',
    icon: '/assets/ValueIcons/innovacii.svg'
  },
  {
    title: 'Качество',
    description: 'Мы внедрили строгую систему контроля качества на всех этапах разработки и производства, чтобы гарантировать надежность наших решений.',
    icon: '/assets/ValueIcons/kachestvo.svg'
  },
  {
    title: 'Надежность',
    description: 'Наши продукты проходят тщательное тестирование в различных условиях, чтобы обеспечить стабильную работу в любой ситуации.',
    icon: '/assets/ValueIcons/nadezhnost.svg'
  },
  {
    title: 'Импортозамещение',
    description: 'Мы стремимся предоставить российским предприятиям и госструктурам современные альтернативы импортному оборудованию и ПО.',
    icon: '/assets/ValueIcons/importozameschenie.svg'
  }
]);
</script>

<template>
  <div>
    <!-- =========================
         HERO: шапка раздела «О компании»
         Фон берётся из CSS-переменной --secondary, текст — белый
         ========================= -->
    <section class="bg-[var(--secondary)] text-white py-20">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Левая колонка: заголовок и краткое описание компании -->
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">О компании</h1>
            <p class="text-xl leading-relaxed opacity-90">
              ООО «АРЕС» — российский разработчик и производитель сетевого оборудования и программного обеспечения,
              специализирующийся на создании надежных и безопасных решений для бизнеса и государственных структур.
            </p>
            <div class="mt-8 flex space-x-4">
              <!-- Якорная ссылка на блок «Миссия» ниже -->
              <a href="#mission" class="btn bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 px-6">
                Наша миссия
              </a>
            </div>
          </div>

          <!-- Правая колонка: карточки-метрики без внешних изображений -->
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
          <!-- /Правая колонка -->
        </div>
      </div>
    </section>

    <!-- =========================
         Блок «О компании»: видео + описание
         Слева — встраиваемый плеер VK через <iframe>.
         Примечание: для приватных роликов VK может требоваться hash (взять через «Поделиться → Встроить»).
         ========================= -->
    <section class="py-16 bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Контейнер с соотношением сторон под видео (aspect-video от Tailwind) -->
          <div class="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <!-- В реальном приложении здесь будет видео -->
            <div class="w-full bg-black rounded-lg overflow-hidden aspect-video">
              <iframe class="w-full h-full block" src="https://vk.com/video_ext.php?oid=-228513134&id=456239031&hd=2"
                frameborder="0" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen
                referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </div>

          <!-- Правая колонка: текстовая часть к видео -->
          <div>
            <h2 class="text-3xl font-bold mb-6">Российские инновации в области сетевых технологий</h2>
            <p class="text-gray-700 mb-4 text-lg">
              Компания «АРЕС» была основана в 2024 году группой инженеров и специалистов в области сетевых технологий с
              целью создания отечественных решений мирового уровня.
            </p>
            <p class="text-gray-700 mb-4 text-lg">
              Мы разрабатываем и производим сетевое оборудование и программное обеспечение, которое обеспечивает высокий
              уровень безопасности, производительности и надежности для корпоративных и государственных заказчиков.
            </p>
            <p class="text-gray-700 text-lg">
              Наша команда включает более 50 высококвалифицированных специалистов в области разработки программного
              обеспечения, проектирования сетевого оборудования, кибербезопасности и электроники.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
         «Наши достижения» — сетка карточек с иконками из public/assets/AchievementIcons
         Каждая карточка: круглый фон + иконка + число + подпись
         ========================= -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Наши достижения</h2>
          <p class="text-lg text-gray-600">
            Результаты, которыми мы гордимся и которые мотивируют нас продолжать развиваться и совершенствоваться
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="achievement in achievements" :key="achievement.label"
            class="bg-white rounded-lg shadow-md p-6 text-center transform transition hover:scale-105">
            <div
              class="w-12 h-12 bg-[var(--primary)] bg-opacity-10 rounded-full mx-auto flex items-center justify-center mb-4">
              <!-- ИКОНКА ДОСТИЖЕНИЯ (img):
                   - путь относительный к public (начинается с /assets/...)
                   - alt сейчас общий; если нужна лучшая доступность — можно уточнить alt под конкретный label -->
              <img class="w-6 h-6 text-[var(--primary)]" :src="achievement.icon" alt="achievement">
            </div>
            <!-- value — крупное число/метрика -->
            <div class="text-4xl font-bold text-[var(--primary)] mb-2">{{ achievement.value }}</div>
            <!-- label — подпись -->
            <div class="text-gray-600">{{ achievement.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
         «Наша миссия» + ценности компании.
         Иконки — из public/assets/ValueIcons, подключены как <img>.
         ========================= -->
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
          <div v-for="value in values" :key="value.title"
            class="bg-white rounded-lg shadow-md p-6 border-t-4 border-[var(--primary)] h-full">
            <div class="w-12 h-12 bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <!-- ИКОНКА ЦЕННОСТИ (img):
                   - файл из public/assets/ValueIcons/*.svg
                   - alt пустым оставлять можно, если иконка декоративная, но здесь alt остаётся как есть -->
              <img class="w-6 h-6 text-[var(--primary)]" :src="value.icon" alt="">
            </div>
            <!-- Текстовая часть ценности -->
            <h3 class="text-xl font-bold mb-3">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
         CTA — призыв к действию (контакты).
         Кнопка ведёт на /contacts.
         ========================= -->
    <section class="py-16 bg-[var(--primary)]">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-6">Присоединяйтесь к цифровой трансформации</h2>
          <p class="text-xl mb-8 opacity-90">
            Мы всегда открыты для талантливых специалистов, которые хотят внести свой вклад в развитие российских
            технологий
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <!-- Кнопка на страницу контактов -->
            <router-link to="/contacts" class="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-8 py-3">
              Свяжитесь с нами
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
