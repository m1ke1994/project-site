<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-[#3ddc84] text-white py-16">
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
              <span class="text-white font-medium">АРЕС ОС</span>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div class="bg-white/10 inline-block px-3 py-1 rounded-full text-sm mb-4">
              Программное обеспечение
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">АРЕС ОС</h1>
            <p class="text-xl mb-6 opacity-90">Надежная основа сетевой инфраструктуры</p>
            <p class="text-lg mb-8 max-w-xl opacity-80">
              Отечественная операционная система, оптимизированная для работы на сетевом оборудовании. Обеспечивает высокий уровень безопасности, производительности и надежности при управлении сетевой инфраструктурой.
            </p>
            <div class="flex flex-wrap gap-4 mb-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">Версия 2.5</div>
                <div class="text-sm opacity-80">Последняя версия</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">100%</div>
                <div class="text-sm opacity-80">Российская разработка</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">от 50 000 ₽</div>
                <div class="text-sm opacity-80">Стоимость лицензии</div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-4">
              <button class="btn bg-white text-[#3ddc84] hover:bg-gray-100 px-6 py-3">
                Запросить предложение
              </button>
              <button class="btn border-2 border-white text-white hover:bg-white hover:text-[#3ddc84] transition-colors px-6 py-3">
                Загрузить демо-версию
              </button>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <!-- Product Image Placeholder -->
              <div class="aspect-w-16 aspect-h-9 bg-white/5 rounded-lg mb-6 overflow-hidden">
                <div class="flex items-center justify-center h-full">
                  <svg class="w-24 h-24 text-white opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
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
            <div class="w-14 h-14 bg-[#3ddc84] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[#3ddc84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Безопасность</h3>
            <p class="text-gray-600">
              Встроенные средства защиты, регулярные обновления и соответствие требованиям регуляторов обеспечивают высокий уровень безопасности.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[#3ddc84] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[#3ddc84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Высокая производительность</h3>
            <p class="text-gray-600">
              Оптимизированная операционная система с минимальными накладными расходами обеспечивает максимальную производительность сетевых устройств.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[#3ddc84] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[#3ddc84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Гибкая настройка</h3>
            <p class="text-gray-600">
              Широкие возможности конфигурации и поддержка современных сетевых протоколов для решения любых задач сетевой инфраструктуры.
            </p>
          </div>
        </div>
        
        <div class="mt-12 space-y-6">
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-lg font-bold mb-4">Полный список функций:</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Встроенные средства защиты</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Поддержка виртуализации</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Централизованное управление</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Регулярные обновления безопасности</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Поддержка контейнеризации</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Микросервисная архитектура</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Оптимизированная производительность</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Совместимость с оборудованием АРЕС</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Поддержка автоматизации через API</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Высокая отказоустойчивость</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Возможность бесшовного обновления</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Расширенная система логирования</span>
              </div>
            </div>
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
            <div class="bg-[#3ddc84] text-white p-4 font-medium">
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
            <div class="bg-[#3ddc84] text-white p-4 font-medium">
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
            <div class="bg-[#3ddc84] text-white p-4 font-medium">
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
            <div class="bg-[#3ddc84] text-white p-4 font-medium">
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

    <!-- Use Cases -->
    <section class="py-16">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Сценарии применения</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="w-14 h-14 bg-[#3ddc84] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[#3ddc84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 12a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 17.586V12z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Корпоративное сетевое оборудование</h3>
              <p class="text-gray-600">
                АРЕС ОС обеспечивает надежную работу сетевых устройств в корпоративной инфраструктуре, предоставляя расширенные возможности мониторинга и управления.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Управление маршрутизаторами и коммутаторами</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Централизованная политика безопасности</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Мониторинг производительности сети</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="w-14 h-14 bg-[#3ddc84] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[#3ddc84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Критическая инфраструктура</h3>
              <p class="text-gray-600">
                Благодаря высокому уровню безопасности и отказоустойчивости, ОС подходит для использования в критически важных системах с повышенными требованиями.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Защита от киберугроз</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Соответствие отраслевым стандартам</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Резервирование и отказоустойчивость</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="w-14 h-14 bg-[#3ddc84] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[#3ddc84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Виртуализированные среды</h3>
              <p class="text-gray-600">
                АРЕС ОС может использоваться для создания виртуальных маршрутизаторов и файрволов в облачных и виртуализированных средах.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Оптимизированная производительность в виртуальной среде</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Гибкое масштабирование</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Централизованное управление виртуальными сервисами</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Images -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Интерфейс системы</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500">Панель управления</span>
              </div>
            </div>
            <div class="p-4">
              <p class="font-medium">АРЕС ОС - панель управления</p>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500">Консоль</span>
              </div>
            </div>
            <div class="p-4">
              <p class="font-medium">АРЕС ОС - консоль</p>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500">Страница мониторинга</span>
              </div>
            </div>
            <div class="p-4">
              <p class="font-medium">АРЕС ОС - страница мониторинга</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- License Information -->
    <section class="py-16">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Информация о лицензировании</h2>
        
        <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-[#3ddc84] text-white p-4 font-medium">
            Варианты лицензирования
          </div>
          <div class="p-6">
            <p class="mb-6 text-gray-700">
              Программное обеспечение лицензируется по количеству устройств. Базовая лицензия включает техническую поддержку в течение 1 года.
            </p>
            
            <div class="space-y-6">
              <div class="border rounded-lg overflow-hidden">
                <div class="bg-gray-50 p-4 font-medium text-lg">Базовая лицензия</div>
                <div class="p-4">
                  <ul class="space-y-3">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>До 50 устройств</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Базовая техническая поддержка 8×5</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Обновления в течение 1 года</span>
                    </li>
                  </ul>
                  <div class="mt-4 text-right">
                    <span class="font-bold text-lg text-[var(--primary)]">от 50 000 ₽</span>
                  </div>
                </div>
              </div>
              
              <div class="border rounded-lg overflow-hidden">
                <div class="bg-gray-50 p-4 font-medium text-lg">Расширенная лицензия</div>
                <div class="p-4">
                  <ul class="space-y-3">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>До 200 устройств</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Расширенная техническая поддержка 12×6</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Приоритетное обновление в течение 1 года</span>
                    </li>
                  </ul>
                  <div class="mt-4 text-right">
                    <span class="font-bold text-lg text-[var(--primary)]">от 120 000 ₽</span>
                  </div>
                </div>
              </div>
              
              <div class="border rounded-lg overflow-hidden">
                <div class="bg-gray-50 p-4 font-medium text-lg">Корпоративная лицензия</div>
                <div class="p-4">
                  <ul class="space-y-3">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Неограниченное количество устройств</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Премиум техническая поддержка 24×7</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Выделенный специалист поддержки</span>
                    </li>
                  </ul>
                  <div class="mt-4 text-right">
                    <span class="font-bold text-lg text-[var(--primary)]">Цена по запросу</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Package Contents -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Комплект поставки</h2>
        
        <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-[#3ddc84] text-white p-4 font-medium">
            В комплект поставки АРЕС ОС входит:
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Установочный образ системы</span>
              </li>
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Лицензионный ключ</span>
              </li>
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Документация в электронном виде</span>
              </li>
              <li class="flex items-center py-2">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Базовая техническая поддержка на 1 год</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Products -->
    <section class="py-16">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Сопутствующие продукты</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 12a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 17.586V12z" />
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">АРЕС Маршрутизатор PRO</h3>
              <p class="text-gray-600 mb-4">Высокопроизводительный маршрутизатор для корпоративных сетей</p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-[var(--primary)]">от 120 000 ₽</span>
                <router-link to="/products/router-pro" class="btn btn-primary">
                  Подробнее
                </router-link>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">АРЕС Мониторинг</h3>
              <p class="text-gray-600 mb-4">Платформа для мониторинга и управления сетевой инфраструктурой</p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-[var(--primary)]">от 80 000 ₽</span>
                <router-link to="/products/monitoring" class="btn btn-primary">
                  Подробнее
                </router-link>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">АРЕС Межсетевой экран</h3>
              <p class="text-gray-600 mb-4">Комплексное решение для защиты корпоративной сети</p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-[var(--primary)]">от 180 000 ₽</span>
                <router-link to="/products/firewall" class="btn btn-primary">
                  Подробнее
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-[#3ddc84]">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-6">Нужна помощь с выбором?</h2>
          <p class="text-xl mb-8 opacity-90">
            Наши специалисты готовы помочь подобрать оптимальное решение для вашей организации
            и ответить на все технические вопросы.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="btn bg-white text-[#3ddc84] hover:bg-gray-100 text-lg px-8 py-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Заказать звонок
            </button>
            <router-link to="/contacts" class="btn border-2 border-white text-white hover:bg-white hover:text-[#3ddc84] transition-colors text-lg px-8 py-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Написать сообщение
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>