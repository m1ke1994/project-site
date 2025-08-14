<script setup lang="ts">
/**
 * Компонент футера.
 * Иконки соцсетей лежат в public/assets/FooterIcon/*.svg и подключаются как <img src="/...">.
 * Так как они из public/, через плагины не обрабатываются. Цвет делаем фильтром (brightness-0 invert).
 */
const currentYear = new Date().getFullYear();

const footerLinks = {
  products: [
    { name: 'Mesh точка доступа Wi-Fi', path: '/products/mesh-wifi' },
    { name: 'Промышленный коммутатор', path: '/products/industrial-switch' },
    { name: 'Умный домофон', path: '/products/smart-intercom' },
    { name: 'Aspen OS', path: '/products/aspen-os' },
    { name: 'Ares Monitoring', path: '/products/ares-monitoring' }
  ],
  solutions: [
    { name: 'Государственный сектор', path: '/solutions?industry=government' },
    { name: 'Промышленность', path: '/solutions?industry=industry' },
    { name: 'Телекоммуникации', path: '/solutions?industry=telecom' },
    { name: 'Финансовый сектор', path: '/solutions?industry=finance' },
    { name: 'Образование', path: '/solutions?industry=education' }
  ],
  company: [
    { name: 'О компании', path: '/about' },
    { name: 'Контакты', path: '/contacts' },
    { name: 'Документация', path: '/docs' }
  ],
  legal: [
    { name: 'Условия использования', path: '/terms-of-use' },
    { name: 'Политика конфиденциальности', path: '/privacy-policy' }
  ]
};

// Иконки из public/ — используем абсолютные пути, чтобы работало и в проде
const socialLinks = [
  // Иконка «ВКонтакте» — кликабельная ссылка на соцсеть в блоке соц. иконок
  { name: 'ВКонтакте', icon: '/assets/FooterIcon/vk_icon.svg', href: '#' },

  // Иконка «Telegram» — кликабельная ссылка на соцсеть в блоке соц. иконок
  { name: 'Telegram', icon: '/assets/FooterIcon/telegram_icon.svg', href: '#' },

  // Иконка «Rutube» — кликабельная ссылка на соцсеть в блоке соц. иконок
  { name: 'Rutube', icon: '/assets/FooterIcon/rutube_icon.svg', href: '#' },
];
</script>

<template>
  <footer>
    <!-- Верхняя часть футера -->
    <div class="bg-[var(--secondary)] text-white py-12">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <!-- Информация о компании -->
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <!-- ЛОГОТИП КОМПАНИИ (картинка): файл logo.svg из папки public/assets/Logo/ -->
              <img src="/assets/Logo/logo.svg" alt="Логотип АРЕС" class="h-10 w-10" />
              <span class="text-3xl font-bold ml-3">АРЕС</span>
            </div>


            <p class="text-gray-300 mb-6 opacity-60">
              Российский разработчик и производитель сетевого оборудования и программного обеспечения для построения
              современных и безопасных ИТ-инфраструктур.
            </p>

            <div class="space-y-3">
              <div class="flex items-center">
                <!-- ИКОНКА ЛОКАЦИИ (inline SVG): маркер адреса компании -->
                <svg class="w-5 h-5 mr-3 text-gray-300 opacity-60" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-gray-300 opacity-60">г. Москва, ул. Космонавта Волкова, д. 6а</span>
              </div>

              <div class="flex items-center">
                <!-- ИКОНКА E-MAIL (inline SVG): конверт, маркер контактного e-mail -->
                <svg class="w-5 h-5 mr-3 text-gray-300 opacity-60" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="text-gray-300 opacity-60">office@aresdev.ru</span>
              </div>
            </div>

            <!-- Блок соц. иконок -->
            <div class="flex mt-6 space-x-4">
              <a v-for="link in socialLinks" :key="link.name" :href="link.href"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                :title="link.name" aria-label="Социальная ссылка" rel="noopener">
                <!-- ИЗОБРАЖЕНИЕ СОЦСЕТИ (img):
                     - файл SVG из public/assets/FooterIcon/*.svg
                     - отвечает за иконку соответствующей соцсети в футере
                     - фильтр brightness-0 invert делает чёрную монохромную иконку белой -->
                <img :src="link.icon" :alt="link.name" class="w-5 h-5 brightness-0 invert" />
              </a>
            </div>
          </div>

          <!-- Колонки ссылок -->
          <div>
            <h3 class="text-lg font-bold mb-4 text-white">Продукты</h3>
            <ul class="space-y-2">
              <li v-for="link in footerLinks.products" :key="link.name">
                <router-link :to="link.path"
                  class="text-gray-300 hover:text-white opacity-60 hover:opacity-100 transition-opacity">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4 text-white">Решения</h3>
            <ul class="space-y-2">
              <li v-for="link in footerLinks.solutions" :key="link.name">
                <router-link :to="link.path"
                  class="text-gray-300 hover:text-white opacity-60 hover:opacity-100 transition-opacity">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4 text-white">Компания</h3>
            <ul class="space-y-2">
              <li v-for="link in footerLinks.company" :key="link.name">
                <router-link :to="link.path"
                  class="text-gray-300 hover:text-white opacity-60 hover:opacity-100 transition-opacity">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Нижняя полоса футера -->
    <div class="bg-[var(--secondary)]/90 text-gray-300 py-4 border-t border-gray-700">
      <div class="container">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0 text-center md:text-left text-[#003366] opacity-70 font-bold">
            <p>&copy; {{ currentYear }} ООО «АРЕС». Все права защищены.</p>
          </div>

          <div class="flex space-x-6">
            <router-link v-for="link in footerLinks.legal" :key="link.name" :to="link.path"
              class="text-[#003366] font-bold opacity-80 hover:opacity-100 text-sm transition-colors">
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Плавные ховеры */
a {
  transition: color 0.2s ease;
}

input,
button {
  transition: all 0.2s ease;
}

/* Мобильные отступы контейнера */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
