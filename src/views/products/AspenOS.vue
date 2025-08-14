<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-[var(--primary)] text-white py-16">
      <div class="container">
        <div class="flex flex-wrap items-center">
          <!-- Breadcrumbs -->
          <div class="w-full mb-6">
            <div class="flex items-center text-sm">
              <router-link to="/" class="text-white opacity-80 hover:opacity-100">Главная</router-link>
              <svg class="w-4 h-4 mx-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
              <router-link to="/products" class="text-white opacity-80 hover:opacity-100">Продукты</router-link>
              <svg class="w-4 h-4 mx-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
              <span class="text-white font-medium">Aspen OS</span>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div class="bg-white/10 inline-block px-3 py-1 rounded-full text-sm mb-4">
              Программное обеспечение
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Aspen OS</h1>
            <p class="text-xl mb-6 opacity-90">Операционная система для сетевого оборудования</p>
            <p class="text-lg mb-8 max-w-xl opacity-80">
              Специализированная операционная система для маршрутизаторов и коммутаторов АРЕС. 
              Обеспечивает высокую производительность, надежность и безопасность сетевой инфраструктуры.
            </p>
            <div class="flex flex-wrap gap-4 mb-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">L3</div>
                <div class="text-sm opacity-80">Маршрутизация</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">CLI/Web</div>
                <div class="text-sm opacity-80">Управление</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">от 60 000 ₽</div>
                <div class="text-sm opacity-80">Лицензия</div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-4">
              <router-link to="/contacts" class="btn bg-white text-[var(--primary)] hover:bg-gray-100 px-6 py-3">
                Запросить предложение
              </router-link>
              <a href="https://aspenos-demo.aresdev.ru" target="_blank" class="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] transition-colors px-6 py-3">
                Посмотреть демо
              </a>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div class="aspect-w-16 aspect-h-9 bg-white/5 rounded-lg mb-6 overflow-hidden">

              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm opacity-70 mb-1">Доступность</div>
                  <div class="font-medium">В наличии</div>
                </div>
                <div>
                  <div class="text-sm opacity-70 mb-1">Способ поставки</div>
                  <div class="font-medium">Цифровая доставка</div>
                </div>
                <div>
                  <div class="text-sm opacity-70 mb-1">Поддержка</div>
                  <div class="font-medium">1 год в комплекте</div>
                </div>
                <div>
                  <div class="text-sm opacity-70 mb-1">Статус</div>
                  <div class="font-medium flex items-center">
                    <span class="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                    Хит продаж
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Ключевые особенности</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <img src="/assets/time.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">Реальное время</h3>
            <p class="text-gray-600">
              Оптимизированная операционная система с минимальными накладными расходами обеспечивает максимальную производительность сетевых устройств.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
             <img src="/assets/prom.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">Промышленные протоколы</h3>
            <p class="text-gray-600">
              Полная поддержка современных сетевых протоколов: BGP, OSPF, RIP, VLAN, VPN, что обеспечивает гибкость построения корпоративных сетей.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
             <img src="/assets/SolutionIcons/reliability.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">Высокая надежность</h3>
            <p class="text-gray-600">
              Встроенные средства защиты, регулярные обновления безопасности и высокая отказоустойчивость обеспечивают надежную работу сети.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specifications -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Технические характеристики</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--primary)] text-white p-4 font-medium">
              Базовая информация
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Версия</span>
                <span class="font-medium">2.5</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Ядро</span>
                <span class="font-medium">Linux 5.15 LTS</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Интерфейс</span>
                <span class="font-medium">CLI, Web UI, RESTful API</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Безопасность</span>
                <span class="font-medium">Встроенный файрвол, шифрование</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--primary)] text-white p-4 font-medium">
              Системные требования
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Архитектура</span>
                <span class="font-medium">x86-64</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Оперативная память</span>
                <span class="font-medium">минимум 2 ГБ</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Дисковое пространство</span>
                <span class="font-medium">минимум 8 ГБ</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Сетевые интерфейсы</span>
                <span class="font-medium">минимум 1 Ethernet</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--primary)] text-white p-4 font-medium">
              Поддерживаемые протоколы
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Маршрутизация</span>
                <span class="font-medium">IPv4, IPv6, RIP, OSPF, BGP, IS-IS</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">VPN</span>
                <span class="font-medium">IPsec, OpenVPN, L2TP, PPTP</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Туннелирование</span>
                <span class="font-medium">GRE, VXLAN, MPLS</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Другие</span>
                <span class="font-medium">DHCP, DNS, NTP, SNMP</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--primary)] text-white p-4 font-medium">
              Управление и мониторинг
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Централизованное управление</span>
                <span class="font-medium">Да, через АРЕС Мониторинг</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">SNMP</span>
                <span class="font-medium">v2c, v3</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Логирование</span>
                <span class="font-medium">Локальное и удаленное (Syslog)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">NetFlow/sFlow</span>
                <span class="font-medium">Поддерживается</span>
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
          <h2 class="text-3xl font-bold mb-6">Создайте надежную промышленную систему</h2>
          <h2 class="text-3xl font-bold mb-6">Создайте надежную сетевую инфраструктуру</h2>
          <p class="text-xl mb-8 opacity-90">
            Получите консультацию по внедрению операционной системы для сетевого оборудования
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-8 py-3">
              Заказать звонок
            </button>
            <router-link to="/contacts" class="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] transition-colors text-lg px-8 py-3">
              Написать сообщение
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>