<script setup lang="ts">
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

const socialLinks = [
  { name: 'ВКонтакте', icon:'src/assets/vk.svg' },
  { name: 'Telegram', icon: 'M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z', viewBox: '0 0 24 24' },
  { name: 'Rutube', icon: 'M3.584 4.002h16.75c.06 0 .111.05.111.111V10.4c0 6.172-5.3 10.424-8.288 10.424-2.988 0-8.506-4.174-8.506-10.424V4.113a.11.11 0 0 1 .11-.111h-.177zm7.713 9.85H9.005V8.492c0-.159.082-.22.22-.22h1.927c.137 0 .22.061.22.22v5.139a.22.22 0 0 1-.22.22h.145zm6.403-5.139c0-.159-.083-.22-.22-.22h-1.904c-.138 0-.22.061-.22.22v2.302c0 .067-.045.067-.066.021 0 0-.782-2.543-.782-2.543-.046-.082-.092-.159-.175-.159h-1.904c-.137 0-.22.061-.22.22v5.139c0 .159.083.22.22.22h1.904c.138 0 .22-.061.22-.22v-2.324c0-.066.046-.066.067-.02l.805 2.563c.045.082.09.16.174.16h1.903c.138 0 .22-.061.22-.22V8.712h-.022z', viewBox: '0 0 24 24' },
];
</script>

<template>
  <footer>
    <!-- Main Footer -->
    <div class="bg-[var(--secondary)] text-white py-12">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <!-- SVG Logo -->
              <svg class="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5.75C3 4.78 3.79 4 4.75 4H19.25C20.21 4 21 4.78 21 5.75V11H3V5.75Z" fill="currentColor"/>
                <path d="M3 13H21V18.25C21 19.21 20.21 20 19.25 20H4.75C3.79 20 3 19.21 3 18.25V13Z" fill="currentColor" fill-opacity="0.6"/>
                <path d="M8 8H16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M8 16H16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="text-3xl font-bold ml-3">АРЕС</span>
            </div>
            
            <p class="text-gray-300 mb-6 opacity-60 ">
              Российский разработчик и производитель сетевого оборудования и программного обеспечения для построения современных и безопасных ИТ-инфраструктур.
            </p>
            
            <div class="space-y-3">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3 text-gray-300 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-gray-300 opacity-60">г. Москва, ул. Космонавта Волкова, д. 6а</span>
              </div>
              
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3 text-gray-300 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="text-gray-300 opacity-60">office@aresdev.ru</span>
              </div>
            </div>
            
            <!-- Social Icons -->
           <!-- Social Icons -->
<div class="flex mt-6 space-x-4">
  <a 
    v-for="link in socialLinks" 
    :key="link.name"
    href="#" 
    class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
    :title="link.name"
  >
    <!-- Если это картинка -->
    <img 
      v-if="!link.viewBox" 
      :src="link.icon" 
      :alt="link.name" 
      class="w-5 h-5"
    />

    <!-- Если это inline SVG -->
    <svg 
      v-else
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="link.viewBox" 
      class="w-5 h-5" 
      fill="white"
    >
      <path :d="link.icon"></path>
    </svg>
  </a>
</div>

          </div>
          
          <!-- Links Columns -->
          <div>
            <h3 class="text-lg font-bold mb-4 text-white">Продукты</h3>
            <ul class="space-y-2">
              <li v-for="link in footerLinks.products" :key="link.name">
                <router-link :to="link.path" class="text-gray-300 hover:text-white opacity-60 hover:opacity-100 transition-opacity">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-4 text-white">Решения</h3>
            <ul class="space-y-2">
              <li v-for="link in footerLinks.solutions" :key="link.name">
                <router-link :to="link.path" class="text-gray-300 hover:text-white opacity-60 hover:opacity-100 transition-opacity">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-4 text-white">Компания</h3>
            <ul class="space-y-2">
              <li v-for="link in footerLinks.company" :key="link.name">
                <router-link :to="link.path" class="text-gray-300 hover:text-white opacity-60 hover:opacity-100 transition-opacity">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom Footer -->
    <div class="bg-[var(--secondary)]/90 text-gray-300 py-4 border-t border-gray-700">
      <div class="container">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0 text-center md:text-left text-[#003366] font-bold">
            <p>&copy; {{ currentYear }} ООО «АРЕС». Все права защищены.</p>
          </div>
          
          <div class="flex space-x-6">
            <router-link 
              v-for="link in footerLinks.legal" 
              :key="link.name"
              :to="link.path" 
              class="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Smooth hover transitions */
a {
  transition: color 0.2s ease;
}

/* Optional animation for subscription form */
input, button {
  transition: all 0.2s ease;
}

/* Container spacing adjustments for mobile */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>