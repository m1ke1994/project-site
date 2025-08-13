<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-[var(--accent)] text-white py-16">
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
              <span class="text-white font-medium">АРЕС Коммутатор Enterprise</span>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div class="bg-white/10 inline-block px-3 py-1 rounded-full text-sm mb-4">
              Сетевое оборудование
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">АРЕС Коммутатор Enterprise</h1>
            <p class="text-xl mb-6 opacity-90">Основа современной корпоративной сети</p>
            <p class="text-lg mb-8 max-w-xl opacity-80">
              Высокопроизводительный коммутатор уровня L3, разработанный для обеспечения надежного и безопасного соединения в корпоративных сетях. Поддерживает расширенные функции управления и мониторинга сети.
            </p>
            <div class="flex flex-wrap gap-4 mb-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">176 Гбит/с</div>
                <div class="text-sm opacity-80">Коммутационная матрица</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">48 + 4</div>
                <div class="text-sm opacity-80">Портов 1G + 10G</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">от 95 000 ₽</div>
                <div class="text-sm opacity-80">Стоимость</div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-4">
              <button class="btn bg-white text-[var(--accent)] hover:bg-gray-100 px-6 py-3">
                Запросить предложение
              </button>
              <button class="btn border-2 border-white text-white hover:bg-white hover:text-[var(--accent)] transition-colors px-6 py-3">
                Техническая консультация
              </button>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <!-- Product Image Placeholder -->
              <div class="aspect-w-16 aspect-h-9 bg-white/5 rounded-lg mb-6 overflow-hidden">
                <div class="flex items-center justify-center h-full">
                  <svg class="w-24 h-24 text-white opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm opacity-70 mb-1">Доступность</div>
                  <div class="font-medium">В наличии</div>
                </div>
                <div>
                  <div class="text-sm opacity-70 mb-1">Срок доставки</div>
                  <div class="font-medium">3-5 рабочих дней</div>
                </div>
                <div>
                  <div class="text-sm opacity-70 mb-1">Гарантия</div>
                  <div class="font-medium">3 года</div>
                </div>
                <div>
                  <div class="text-sm opacity-70 mb-1">Статус</div>
                  <div class="font-medium flex items-center">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Новинка
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
            <div class="w-14 h-14 bg-[var(--accent)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Гибкое подключение</h3>
            <p class="text-gray-600">
              48 портов 1GbE и 4 порта 10GbE SFP+ предоставляют широкие возможности для подключения устройств и наращивания сети.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--accent)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Расширенные возможности</h3>
            <p class="text-gray-600">
              Поддержка PoE+ (до 30 Вт на порт), стекирование до 8 устройств и обширные функции управления сетью.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--accent)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Надежность</h3>
            <p class="text-gray-600">
              Резервированные блоки питания, защита от петель STP/RSTP/MSTP и расширенные функции QoS для надежной работы сети.
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
                <span>48 портов 1GbE</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>4 порта 10GbE SFP+</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Стекирование до 8 устройств</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Поддержка PoE+ (до 30 Вт на порт)</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Неблокируемая коммутация</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>LACP агрегация каналов</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Поддержка Jumbo-кадров</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Расширенная QoS</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Зеркалирование портов</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>VLAN на основе портов и 802.1Q</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Управление потоком 802.3x</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Защита от петель STP/RSTP/MSTP</span>
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
            <div class="bg-[var(--accent)] text-white p-4 font-medium">
              Производительность
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Коммутационная матрица</span>
                <span class="font-medium">176 Гбит/с</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Пропускная способность</span>
                <span class="font-medium">130.9 Mpps</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Таблица MAC-адресов</span>
                <span class="font-medium">32K записей</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Jumbo-кадры</span>
                <span class="font-medium">до 9216 байт</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--accent)] text-white p-4 font-medium">
              Интерфейсы
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Ethernet 1GbE</span>
                <span class="font-medium">48 портов RJ-45</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">SFP+ 10GbE</span>
                <span class="font-medium">4 порта</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Консольный порт</span>
                <span class="font-medium">1 порт RJ-45</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">USB</span>
                <span class="font-medium">1 порт USB 2.0</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Стекирование</span>
                <span class="font-medium">2 порта QSFP+</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--accent)] text-white p-4 font-medium">
              Питание и PoE
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Бюджет PoE</span>
                <span class="font-medium">740 Вт</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Стандарты PoE</span>
                <span class="font-medium">IEEE 802.3af, IEEE 802.3at</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Макс. мощность на порт</span>
                <span class="font-medium">30 Вт</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Блоки питания</span>
                <span class="font-medium">2 блока по 550 Вт (резервирование)</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--accent)] text-white p-4 font-medium">
              Физические характеристики
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Размеры (ШxВxГ)</span>
                <span class="font-medium">440 x 44 x 350 мм (1U)</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Вес</span>
                <span class="font-medium">5.8 кг</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Питание</span>
                <span class="font-medium">100-240В, 50-60 Гц</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Энергопотребление</span>
                <span class="font-medium">максимум 60 Вт (без PoE)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">MTBF</span>
                <span class="font-medium">350,000 часов</span>
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
              <div class="w-14 h-14 bg-[var(--accent)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Доступ к корпоративной сети</h3>
              <p class="text-gray-600">
                Универсальное решение для организации сети доступа с поддержкой PoE для подключения IP-телефонов, камер видеонаблюдения и точек доступа Wi-Fi.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Большое количество портов для конечных устройств</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Питание по PoE для IP-устройств</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Сегментация трафика с помощью VLAN</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="w-14 h-14 bg-[var(--accent)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Агрегация трафика</h3>
              <p class="text-gray-600">
                Коммутатор может эффективно использоваться как устройство агрегации в трехуровневой архитектуре сети, объединяя трафик от коммутаторов доступа.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Высокая производительность коммутации</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Возможности маршрутизации уровня L3</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Агрегация каналов для повышения пропускной способности</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="w-14 h-14 bg-[var(--accent)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Кампусные сети</h3>
              <p class="text-gray-600">
                Надежная основа для построения кампусных сетей с возможностью стекирования для увеличения количества портов и упрощения управления.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Стекирование для масштабирования сети</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Единое управление группой коммутаторов</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Расширенные функции QoS для приоритизации трафика</span>
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
        <h2 class="text-3xl font-bold mb-12 text-center">Внешний вид</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500">Фронтальный вид</span>
              </div>
            </div>
            <div class="p-4">
              <p class="font-medium">АРЕС Коммутатор Enterprise - фронтальный вид</p>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500">Порты</span>
              </div>
            </div>
            <div class="p-4">
              <p class="font-medium">АРЕС Коммутатор Enterprise - порты</p>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500">Стекирование</span>
              </div>
            </div>
            <div class="p-4">
              <p class="font-medium">АРЕС Коммутатор Enterprise - возможности стекирования</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Package Contents -->
    <section class="py-16">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Комплект поставки</h2>
        
        <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div class="bg-[var(--accent)] text-white p-4 font-medium">
            В комплект поставки АРЕС Коммутатор Enterprise входит:
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Коммутатор АРЕС Enterprise</span>
              </li>
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Блок питания (2 шт.)</span>
              </li>
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Кабель питания (2 шт.)</span>
              </li>
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Консольный кабель</span>
              </li>
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Комплект для монтажа в стойку</span>
              </li>
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Краткое руководство по установке</span>
              </li>
              <li class="flex items-center py-2">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Гарантийный талон</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Products -->
    <section class="py-16 bg-gray-50">
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
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-[var(--accent)]">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-6">Нужна помощь с выбором?</h2>
          <p class="text-xl mb-8 opacity-90">
            Наши специалисты готовы помочь подобрать оптимальное решение для вашей организации
            и ответить на все технические вопросы.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="btn bg-white text-[var(--accent)] hover:bg-gray-100 text-lg px-8 py-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Заказать звонок
            </button>
            <router-link to="/contacts" class="btn border-2 border-white text-white hover:bg-white hover:text-[var(--accent)] transition-colors text-lg px-8 py-3 flex items-center">
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