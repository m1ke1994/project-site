<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);
const isSearchOpen = ref(false);
const searchQuery = ref('');
const lastScrollTop = ref(0);
const isHeaderHidden = ref(false);
const isScrolled = ref(false);

const menuItems = [
  { name: 'Главная', path: '/' },
  { name: 'О компании', path: '/about' },
  {
    name: 'Продукты', path: '/products',
    children: [
      { name: 'Mesh точка доступа Wi-Fi', path: '/products/mesh-wifi' },
      { name: 'Промышленный коммутатор', path: '/products/industrial-switch' },
      { name: 'Умный домофон', path: '/products/smart-intercom' },
      { name: 'Aspen OS', path: '/products/aspen-os' },
      { name: 'Ares Monitoring', path: '/products/ares-monitoring' }
    ]
  },
  { name: 'Решения', path: '/solutions' },
  { name: 'Документация', path: '/docs' },
  { name: 'Контакты', path: '/contacts' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  // Если открыли меню — закрываем поиск
  if (isMenuOpen.value && isSearchOpen.value) {
    isSearchOpen.value = false;
  }
};

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;

  // Если открыли поиск — закрываем меню
  if (isSearchOpen.value && isMenuOpen.value) {
    isMenuOpen.value = false;
  }

  // Фокус в поле поиска при открытии
  if (isSearchOpen.value) {
    setTimeout(() => {
      const searchInput = document.getElementById('header-search-input') as HTMLInputElement | null;
      searchInput?.focus();
    }, 100);
  }
};

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value } });
    searchQuery.value = '';
    isSearchOpen.value = false;
  }
};

const handleScroll = () => {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  // Флаг «прокручено» для стилизации
  isScrolled.value = currentScrollTop > 20;

  // Прячем хедер при скролле вниз, показываем при скролле вверх (после 150px)
  if (currentScrollTop > 150) {
    isHeaderHidden.value = currentScrollTop > lastScrollTop.value;
  }

  lastScrollTop.value = currentScrollTop;
};

// Закрытие выпадашек по клику вне их области
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const dropdown = document.querySelector('.dropdown-menu');

  if (dropdown && !dropdown.contains(target) && !target.classList.contains('dropdown-toggle')) {
    const openDropdowns = document.querySelectorAll('.dropdown-open');
    openDropdowns.forEach(d => d.classList.remove('dropdown-open'));
  }
};

// Закрываем мобильное меню/поиск при навигации и показываем хедер
const closeMenuOnNavigate = () => {
  if (isMenuOpen.value) isMenuOpen.value = false;
  if (isSearchOpen.value) isSearchOpen.value = false;
  isHeaderHidden.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
  router.beforeEach(closeMenuOnNavigate);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});

// Тоггл выпадающего меню (десктоп/мобайл)
const toggleDropdown = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  const dropdown = target.nextElementSibling;
  dropdown?.classList.toggle('dropdown-open');

  event.preventDefault();
  event.stopPropagation();
};
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{
      'bg-white shadow-md': isScrolled,
      'bg-transparent': !isScrolled,
      '-translate-y-full': isHeaderHidden
    }"
  >
    <div class="container py-4">
      <nav class="flex items-center justify-between">
        <!-- ЛОГО (img): файл public/assets/Logo/logo.svg — основной логотип в шапке -->
        <router-link to="/" class="flex items-center">
          <img src="/assets/Logo/logo.svg" alt="Логотип компании" class="h-8 w-8" />
          <span class="text-2xl font-bold ml-2 text-[var(--primary)]">АРЕС</span>
        </router-link>

        <!-- Навигация (десктоп) -->
        <div class="hidden lg:flex items-center space-x-2">
          <template v-for="item in menuItems" :key="item.name">
            <div class="relative group" v-if="item.children">
              <button
                class="px-3 py-2 rounded-lg transition-colors group-hover:bg-gray-100 
                       text-gray-700 hover:text-[var(--primary)] font-medium flex items-center"
                @click="toggleDropdown"
              >
                {{ item.name }}

                <!-- СТРЕЛКА ДЛЯ ДРОПДАУНА (img): public/assets/HeaderIcon/arrow.svg — индикатор подменю -->
                <img
                  class="ml-1 w-4 h-4 transition-transform group-hover:rotate-180"
                  src="/assets/HeaderIcon/arrow.svg"
                  alt="Открыть подменю"
                />
              </button>

              <div
                class="dropdown-menu absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
                       transform origin-top-left scale-95 group-hover:scale-100"
              >
                <div class="py-2">
                  <router-link
                    v-for="child in item.children"
                    :key="child.name"
                    :to="child.path"
                    class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[var(--primary)]"
                  >
                    {{ child.name }}
                  </router-link>
                </div>
              </div>
            </div>

            <router-link
              v-else
              :to="item.path"
              class="px-3 py-2 rounded-lg transition-colors hover:bg-gray-100 
                     text-gray-700 hover:text-[var(--primary)] font-medium"
              :class="{ 'text-[var(--primary)] font-semibold': $route.path === item.path }"
            >
              {{ item.name }}
            </router-link>
          </template>

          <!-- КНОПКА ПОИСКА (img): public/assets/HeaderIcon/search.svg — иконка для открытия строки поиска -->
          <button
            @click="toggleSearch"
            class="ml-2 p-2 rounded-full hover:bg-gray-100 text-gray-700"
            :class="{ 'bg-gray-100 text-[var(--primary)]': isSearchOpen }"
            aria-label="Поиск"
          >
            <img class="w-5 h-5" src="/assets/HeaderIcon/search.svg" alt="" aria-hidden="true" />
          </button>
        </div>

        <!-- Кнопки мобильной панели -->
        <div class="flex items-center lg:hidden">
          <!-- КНОПКА ПОИСКА МОБАЙЛ (img): public/assets/HeaderIcon/search.svg — открывает поиск -->
          <button
            @click="toggleSearch"
            class="p-2 rounded-full hover:bg-gray-100 text-gray-700 mr-2"
            :class="{ 'bg-gray-100 text-[var(--primary)]': isSearchOpen }"
            aria-label="Поиск"
          >
            <img class="w-5 h-5" src="/assets/HeaderIcon/search.svg" alt="" aria-hidden="true" />
          </button>

          <!-- КНОПКА БУРГЕР/КРЕСТ (inline SVG): иконки меню и закрытия на мобильных -->
          <button class="p-2 rounded-lg hover:bg-gray-100 text-gray-700" @click="toggleMenu" aria-label="Меню">
            <span class="sr-only">Меню</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Строка поиска -->
      <div v-show="isSearchOpen" class="mt-4 relative">
        <div class="flex items-center bg-gray-100 rounded-lg overflow-hidden p-2 transition-all duration-300">
          <div class="relative w-full">
            <!-- ИКОНКА В ПОЛЕ ПОИСКА (img): public/assets/HeaderIcon/search.svg — декоративная лупа слева -->
            <img
              src="/assets/HeaderIcon/search.svg"
              alt=""
              aria-hidden="true"
              class="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
            />

            <input
              id="header-search-input"
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="Поиск по сайту..."
              class="w-full py-1 pr-2 pl-8 outline-none bg-transparent text-gray-700"
            />
          </div>

          <!-- КНОПКА ОЧИСТКИ ПОИСКА (img): public/assets/HeaderIcon/close.svg — очистка введённого текста -->
          <button
            v-if="searchQuery"
            @click="searchQuery = ''"
            class="text-gray-500 hover:text-gray-700 mx-2"
            aria-label="Очистить поиск"
          >
            <img src="/assets/HeaderIcon/close.svg" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div v-show="isMenuOpen" class="lg:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="py-2 max-h-[calc(100vh-100px)] overflow-y-auto">
          <div v-for="item in menuItems" :key="item.name" class="relative">
            <div v-if="item.children" class="px-4 py-3 border-b border-gray-100">
              <div class="flex justify-between items-center cursor-pointer text-gray-700" @click="toggleDropdown($event)">
                <span>{{ item.name }}</span>

                <!-- СТРЕЛКА РАЗВОРАЧИВАНИЯ (img): public/assets/HeaderIcon/arrow.svg — открыть/закрыть подраздел -->
                <img class="w-4 h-4 dropdown-toggle" src="/assets/HeaderIcon/arrow.svg" alt="Развернуть" />
              </div>

              <div class="dropdown-menu hidden pl-4 mt-2 space-y-1 border-l-2 border-gray-100">
                <router-link
                  v-for="child in item.children"
                  :key="child.name"
                  :to="child.path"
                  class="block py-2 text-gray-600 hover:text-[var(--primary)]"
                  @click="isMenuOpen = false"
                >
                  {{ child.name }}
                </router-link>
              </div>
            </div>

            <router-link
              v-else
              :to="item.path"
              class="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--primary)] border-b border-gray-100"
              :class="{ 'bg-gray-50 text-[var(--primary)] font-medium': $route.path === item.path }"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </div>

          <!-- Контакты в мобильном меню -->
          <div class="p-4 space-y-2">
            <a href="tel:+7XXXXXXXXXX" class="flex items-center text-gray-700 py-2">
              <!-- ИКОНКА ТЕЛЕФОНА (img): public/assets/HeaderIcon/phone.svg — звонок в один клик -->
              <img class="w-5 h-5 mr-3" src="/assets/HeaderIcon/phone.svg" alt="" aria-hidden="true" />
              +7 (XXX) XXX-XX-XX
            </a>

            <a href="mailto:info@ares.ru" class="flex items-center text-gray-700 py-2">
              <!-- ИКОНКА ПОЧТЫ (img): public/assets/HeaderIcon/mail.svg — отправить письмо на e-mail -->
              <img class="w-5 h-5 mr-3" src="/assets/HeaderIcon/mail.svg" alt="" aria-hidden="true" />
              info@ares.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Отступ, чтобы контент не заезжал под фиксированный хедер -->
  <div :class="{ 'h-16': !isScrolled, 'h-20': isScrolled }"></div>
</template>

<style scoped>
/* Плавные анимации хедера */
.fixed {
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Корректный показ выпадашек на мобайле */
.dropdown-open {
  display: block !important;
}
</style>
