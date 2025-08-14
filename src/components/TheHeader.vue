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
  { name: 'Продукты', path: '/products', 
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
  
  // Close search if it's open
  if (isMenuOpen.value && isSearchOpen.value) {
    isSearchOpen.value = false;
  }
};

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  
  // Close menu if it's open
  if (isSearchOpen.value && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
  
  // Focus the search input when opened
  if (isSearchOpen.value) {
    setTimeout(() => {
      const searchInput = document.getElementById('header-search-input');
      if (searchInput) {
        searchInput.focus();
      }
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
  
  // Detect if page is scrolled for styling
  isScrolled.value = currentScrollTop > 20;
  
  // Hide header on scroll down, show on scroll up
  if (currentScrollTop > 150) { // Only apply hide/show after 150px scroll
    isHeaderHidden.value = currentScrollTop > lastScrollTop.value;
  }
  
  lastScrollTop.value = currentScrollTop;
};

// Handle click outside to close dropdown menus
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const dropdown = document.querySelector('.dropdown-menu');
  
  if (dropdown && !dropdown.contains(target) && !target.classList.contains('dropdown-toggle')) {
    const openDropdowns = document.querySelectorAll('.dropdown-open');
    openDropdowns.forEach(dropdown => {
      dropdown.classList.remove('dropdown-open');
    });
  }
};

// Close mobile menu when navigating and ensure header is visible
const closeMenuOnNavigate = (to: any, from: any) => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
  }
  if (isSearchOpen.value) {
    isSearchOpen.value = false;
  }
  
  // Always show header when navigating to a new page
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

// Toggle dropdown menu
const toggleDropdown = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  const dropdown = target.nextElementSibling;
  
  if (dropdown) {
    dropdown.classList.toggle('dropdown-open');
  }
  
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
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
       <!-- Логотип компании как картинка из public/assets -->
<img
  src="/assets/Logo/logo.svg"
  alt="Логотип компании"
  class="h-8 w-8"
/>

          <span class="text-2xl font-bold ml-2 text-[var(--primary)]">АРЕС</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-2">
          <template v-for="item in menuItems" :key="item.name">
            <div class="relative group" v-if="item.children">
              <button 
                class="px-3 py-2 rounded-lg transition-colors group-hover:bg-gray-100 
                      text-gray-700 hover:text-[var(--primary)] font-medium
                      flex items-center"
                @click="toggleDropdown"
              >
                {{ item.name }}
                <svg class="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="dropdown-menu absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100">
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
          
          <!-- Search button -->
          <button 
            @click="toggleSearch"
            class="ml-2 p-2 rounded-full hover:bg-gray-100 text-gray-700"
            :class="{ 'bg-gray-100 text-[var(--primary)]': isSearchOpen }"
            aria-label="Поиск"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center lg:hidden">
          <button 
            @click="toggleSearch"
            class="p-2 rounded-full hover:bg-gray-100 text-gray-700 mr-2"
            :class="{ 'bg-gray-100 text-[var(--primary)]': isSearchOpen }"
            aria-label="Поиск"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          
          <button
            class="p-2 rounded-lg hover:bg-gray-100 text-gray-700"
            @click="toggleMenu"
            aria-label="Меню"
          >
            <span class="sr-only">Меню</span>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Search Bar -->
      <div 
        v-show="isSearchOpen"
        class="mt-4 relative"
      >
        <div class="flex items-center bg-gray-100 rounded-lg overflow-hidden p-2 transition-all duration-300">
          <svg class="w-5 h-5 text-gray-500 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input 
            id="header-search-input"
            v-model="searchQuery" 
            @keyup.enter="handleSearch"
            type="text" 
            placeholder="Поиск по сайту..."
            class="w-full py-1 px-2 outline-none bg-transparent text-gray-700"
          />
          <button 
            v-if="searchQuery" 
            @click="searchQuery = ''"
            class="text-gray-500 hover:text-gray-700 mx-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMenuOpen"
        class="lg:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div class="py-2 max-h-[calc(100vh-100px)] overflow-y-auto">
          <div v-for="item in menuItems" :key="item.name" class="relative">
            <div v-if="item.children" class="px-4 py-3 border-b border-gray-100">
              <div 
                class="flex justify-between items-center cursor-pointer text-gray-700"
                @click="toggleDropdown($event)"
              >
                <span>{{ item.name }}</span>
                <svg class="w-4 h-4 dropdown-toggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
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
          
          <!-- Contact buttons in mobile menu -->
          <div class="p-4 space-y-2">
            <a href="tel:+7XXXXXXXXXX" class="flex items-center text-gray-700 py-2">
              <svg class="w-5 h-5 mr-3 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              +7 (XXX) XXX-XX-XX
            </a>
            <a href="mailto:info@ares.ru" class="flex items-center text-gray-700 py-2">
              <svg class="w-5 h-5 mr-3 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              info@ares.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  <!-- Spacer to prevent content from being hidden behind fixed header -->
  <div :class="{'h-16': !isScrolled, 'h-20': isScrolled}"></div>
</template>

<style scoped>
/* Animation for the header transitions */
.fixed {
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Show dropdown menu properly on mobile */
.dropdown-open {
  display: block !important;
}
</style>