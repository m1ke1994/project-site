<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-[#ff4500] text-white py-16">
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
              <span class="text-white font-medium">АРЕС Межсетевой экран</span>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div class="bg-white/10 inline-block px-3 py-1 rounded-full text-sm mb-4">
              Сетевое оборудование
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">АРЕС Межсетевой экран</h1>
            <p class="text-xl mb-6 opacity-90">Комплексная защита корпоративной сети</p>
            <p class="text-lg mb-8 max-w-xl opacity-80">
              Современный межсетевой экран нового поколения (NGFW), объединяющий функции традиционного файрвола, системы предотвращения вторжений и контроля приложений для обеспечения комплексной защиты сети от внешних и внутренних угроз.
            </p>
            <div class="flex flex-wrap gap-4 mb-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">8 Гбит/с</div>
                <div class="text-sm opacity-80">Пропускная способность</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">NGFW</div>
                <div class="text-sm opacity-80">Файрвол нового поколения</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">от 180 000 ₽</div>
                <div class="text-sm opacity-80">Стоимость</div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-4">
              <button class="btn bg-white text-[#ff4500] hover:bg-gray-100 px-6 py-3">
                Запросить предложение
              </button>
              <button class="btn border-2 border-white text-white hover:bg-white hover:text-[#ff4500] transition-colors px-6 py-3">
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm opacity-70 mb-1">Доступность</div>
                  <div class="font-medium">Предзаказ</div>
                </div>
                <div>
                  <div class="text-sm opacity-70 mb-1">Срок доставки</div>
                  <div class="font-medium">4-6 недель</div>
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
            <div class="w-14 h-14 bg-[#ff4500] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[#ff4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Комплексная защита</h3>
            <p class="text-gray-600">
              Межсетевой экран нового поколения (NGFW) с функциями IPS, контроля приложений и фильтрации веб-контента для многоуровневой защиты сети.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[#ff4500] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[#ff4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Безопасность SSL</h3>
            <p class="text-gray-600">
              Инспекция зашифрованного трафика позволяет обнаруживать и блокировать угрозы, скрытые в SSL/TLS-трафике, без ущерба для производительности.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[#ff4500] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[#ff4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Продвинутая защита</h3>
            <p class="text-gray-600">
              Антивирусная защита, песочница для анализа угроз, предотвращение атак нулевого дня и защита от целевых атак (APT).
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
                <span>Пропускная способность до 8 Гбит/с</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Инспекция зашифрованного трафика</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Система предотвращения вторжений (IPS)</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Контроль приложений</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>VPN-шлюз (IPsec, SSL)</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Фильтрация веб-контента</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Защита от бот-сетей</span>
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
                <span>Антивирусная защита</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Песочница для анализа угроз</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Предотвращение атак нулевого дня</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Защита от целевых атак (APT)</span>
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
            <div class="bg-[#ff4500] text-white p-4 font-medium">
              Производительность
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Пропускная способность файрвола</span>
                <span class="font-medium">8 Гбит/с</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Пропускная способность IPS</span>
                <span class="font-medium">4 Гбит/с</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Пропускная способность инспекции SSL</span>
                <span class="font-medium">1.5 Гбит/с</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Количество сессий</span>
                <span class="font-medium">до 1 500 000</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Новых сессий в секунду</span>
                <span class="font-medium">до 50 000</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[#ff4500] text-white p-4 font-medium">
              Интерфейсы
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Ethernet 1GbE</span>
                <span class="font-medium">8 портов RJ-45</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">SFP+ 10GbE</span>
                <span class="font-medium">2 порта</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Консольный порт</span>
                <span class="font-medium">1 порт RJ-45</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">USB</span>
                <span class="font-medium">2 порта USB 3.0</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Управление</span>
                <span class="font-medium">1 порт RJ-45 MGMT</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[#ff4500] text-white p-4 font-medium">
              Функции безопасности
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Файрвол</span>
                <span class="font-medium">Stateful Inspection, Policy-Based</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">IPS</span>
                <span class="font-medium">Более 10 000 сигнатур, защита нулевого дня</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Антивирус</span>
                <span class="font-medium">Проверка HTTP, FTP, SMTP, POP3, IMAP</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Песочница</span>
                <span class="font-medium">Облачная и локальная</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">VPN</span>
                <span class="font-medium">IPsec, SSL, L2TP с IPsec</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[#ff4500] text-white p-4 font-medium">
              Физические характеристики
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Размеры (ШxВxГ)</span>
                <span class="font-medium">440 x 44 x 380 мм (1U)</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Вес</span>
                <span class="font-medium">5.5 кг</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Питание</span>
                <span class="font-medium">100-240В, 50-60 Гц, 2 блока питания</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Энергопотребление</span>
                <span class="font-medium">максимум 200 Вт</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">MTBF</span>
                <span class="font-medium">300,000 часов</span>
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
              <div class="w-14 h-14 bg-[#ff4500] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[#ff4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Защита периметра сети</h3>
              <p class="text-gray-600">
                Мощный NGFW для обеспечения комплексной защиты периметра корпоративной сети от внешних угроз и контроля исходящего трафика.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Защита от внешних сетевых атак</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Фильтрация исходящего трафика</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Выявление вредоносной активности</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="w-14 h-14 bg-[#ff4500] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[#ff4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Безопасный удаленный доступ</h3>
              <p class="text-gray-600">
                Организация защищенного доступа к корпоративной сети для удаленных сотрудников через VPN-подключения с двухфакторной аутентификацией.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Безопасные VPN-подключения</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Многофакторная аутентификация</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Контроль доступа к ресурсам</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="w-14 h-14 bg-[#ff4500] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[#ff4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Сегментация сети</h3>
              <p class="text-gray-600">
                Разделение сети на изолированные сегменты с контролем доступа между ними для минимизации потенциального ущерба при компрометации.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Изоляция критических систем</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Контроль взаимодействия между сегментами</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Минимизация распространения угроз</span>
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
        <h2 class="text-3xl font-bold mb-12 text-center">Внешний вид и интерфейс</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500">Фронтальный вид</span>
              </div>
            </div>
            <div class="p-4">
              <p class="font-medium">АРЕС Межсетевой экран - фронтальный вид</p>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500">Вид сзади</span>
              </div>
            </div>
            <div class="p-4">
              <p class="font-medium">АРЕС Межсетевой экран - вид сзади</p>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500">Панель управления</span>
              </div>
            </div>
            <div class="p-4">
              <p class="font-medium">АРЕС Межсетевой экран - панель управления</p>
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
          <div class="bg-[#ff4500] text-white p-4 font-medium">
            В комплект поставки АРЕС Межсетевой экран входит:
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Межсетевой экран АРЕС</span>
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
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Гарантийный талон</span>
              </li>
              <li class="flex items-center py-2">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>USB-накопитель с документацией</span>
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">АРЕС Коммутатор Enterprise</h3>
              <p class="text-gray-600 mb-4">Управляемый коммутатор уровня L3 для крупных предприятий</p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-[var(--primary)]">от 95 000 ₽</span>
                <router-link to="/products/switch-enterprise" class="btn btn-primary">
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
    <section class="py-16 bg-[#ff4500]">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-6">Нужна помощь с выбором?</h2>
          <p class="text-xl mb-8 opacity-90">
            Наши специалисты готовы помочь подобрать оптимальное решение для вашей организации
            и ответить на все технические вопросы.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="btn bg-white text-[#ff4500] hover:bg-gray-100 text-lg px-8 py-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Заказать звонок
            </button>
            <router-link to="/contacts" class="btn border-2 border-white text-white hover:bg-white hover:text-[#ff4500] transition-colors text-lg px-8 py-3 flex items-center">
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