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
              <span class="text-white font-medium">АРЕС Маршрутизатор PRO</span>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div class="bg-white/10 inline-block px-3 py-1 rounded-full text-sm mb-4">
              Сетевое оборудование
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">АРЕС Маршрутизатор PRO</h1>
            <p class="text-xl mb-6 opacity-90">Высокопроизводительное ядро вашей сети</p>
            <p class="text-lg mb-8 max-w-xl opacity-80">
              Современный маршрутизатор с высокой производительностью, предназначенный для крупных корпоративных сетей.
              Обеспечивает надежную маршрутизацию трафика, поддерживает современные протоколы безопасности и обладает широкими возможностями управления.
            </p>
            <div class="flex flex-wrap gap-4 mb-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">10 Гбит/с</div>
                <div class="text-sm opacity-80">Пропускная способность</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">2 000 000</div>
                <div class="text-sm opacity-80">Одновременных сессий</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">от 120 000 ₽</div>
                <div class="text-sm opacity-80">Стоимость</div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-4">
              <button class="btn bg-white text-[var(--primary)] hover:bg-gray-100 px-6 py-3">
                Запросить предложение
              </button>
              <button class="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] transition-colors px-6 py-3">
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 12a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 17.586V12z" />
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
              <svg class="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Высокая производительность</h3>
            <p class="text-gray-600">
              Пропускная способность до 10 Гбит/с и поддержка до 2 000 000 одновременных сессий обеспечивают быструю и стабильную работу сети даже при высоких нагрузках.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Комплексная безопасность</h3>
            <p class="text-gray-600">
              Встроенный межсетевой экран, защита от DDoS-атак и поддержка современных протоколов шифрования обеспечивают высокий уровень защиты сетевой инфраструктуры.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Надежность и отказоустойчивость</h3>
            <p class="text-gray-600">
              Резервирование блоков питания, возможность горячей замены модулей и поддержка протоколов динамической маршрутизации обеспечивают бесперебойную работу сети.
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
                <span>Пропускная способность до 10 Гбит/с</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Поддержка IPv6</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Встроенный межсетевой экран</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Резервирование питания</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Горячая замена модулей</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Поддержка VLAN и QoS</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Маршрутизация BGP, OSPF, RIP</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Защита от DDoS-атак</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Поддержка IPsec VPN</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Аппаратное ускорение шифрования</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Динамическая маршрутизация</span>
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
            <div class="bg-[var(--primary)] text-white p-4 font-medium">
              Производительность
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Пропускная способность</span>
                <span class="font-medium">10 Гбит/с</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Количество сессий</span>
                <span class="font-medium">до 2 000 000</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Новых сессий в секунду</span>
                <span class="font-medium">до 135 000</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Задержка</span>
                <span class="font-medium">< 10 мкс</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Производительность IPsec VPN</span>
                <span class="font-medium">5 Гбит/с</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--primary)] text-white p-4 font-medium">
              Интерфейсы
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Ethernet 1GbE</span>
                <span class="font-medium">8 портов RJ-45</span>
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
                <span class="font-medium">2 порта USB 3.0</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Управление</span>
                <span class="font-medium">1 порт RJ-45 MGMT</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--primary)] text-white p-4 font-medium">
              Физические характеристики
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Размеры (ШxВxГ)</span>
                <span class="font-medium">440 x 44 x 380 мм (1U)</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Вес</span>
                <span class="font-medium">5.2 кг</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Питание</span>
                <span class="font-medium">100-240В, 50-60 Гц, 2 блока питания</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Энергопотребление</span>
                <span class="font-medium">максимум 180 Вт</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Охлаждение</span>
                <span class="font-medium">активное, 4 вентилятора с горячей заменой</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--primary)] text-white p-4 font-medium">
              Условия эксплуатации
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Рабочая температура</span>
                <span class="font-medium">от 0°C до 40°C</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Температура хранения</span>
                <span class="font-medium">от -20°C до 70°C</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Относительная влажность</span>
                <span class="font-medium">от 5% до 95% (без конденсации)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Уровень шума</span>
                <span class="font-medium">< 55 dB</span>
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
              <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Опорная сеть предприятия</h3>
              <p class="text-gray-600">
                Маршрутизатор PRO является идеальным решением для создания надежной опорной сети предприятия с высокими требованиями к производительности и безопасности.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Высокая производительность для передачи большого объема данных</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Надежность для критически важных приложений</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Гибкие возможности маршрутизации</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">Граничный маршрутизатор</h3>
              <p class="text-gray-600">
                Благодаря высокой производительности и встроенным функциям безопасности, маршрутизатор эффективно выполняет функции граничного устройства для защиты периметра сети.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Защита периметра сети от внешних угроз</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Контроль и фильтрация входящего/исходящего трафика</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Поддержка BGP для подключения к провайдерам</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">VPN-концентратор</h3>
              <p class="text-gray-600">
                Аппаратное ускорение шифрования и поддержка большого количества IPsec-туннелей делают устройство эффективным решением для организации защищенных удаленных подключений.
              </p>
              <div class="mt-6 space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Безопасный доступ для удаленных офисов</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Поддержка различных VPN-протоколов</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Высокая производительность шифрования</span>
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
              <p class="font-medium">АРЕС Маршрутизатор PRO - фронтальный вид</p>
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
              <p class="font-medium">АРЕС Маршрутизатор PRO - вид сзади</p>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-100">
              <!-- Placeholder image -->
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500">Вид сбоку</span>
              </div>
            </div>
            <div class="p-4">
              <p class="font-medium">АРЕС Маршрутизатор PRO - вид сбоку</p>
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
          <div class="bg-[var(--primary)] text-white p-4 font-medium">
            В комплект поставки АРЕС Маршрутизатор PRO входит:
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li class="flex items-center py-2 border-b border-gray-100">
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Маршрутизатор АРЕС PRO</span>
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

    <!-- Documentation -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Документация</h2>
        
        <div class="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Техническая документация</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div class="flex items-center">
                    <svg class="w-8 h-8 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <div class="font-medium">Руководство пользователя</div>
                      <div class="text-sm text-gray-500">PDF, 5.2 МБ</div>
                    </div>
                  </div>
                  <button class="btn bg-[var(--primary)] text-white px-3 py-1 text-sm">
                    Скачать
                  </button>
                </div>
                
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div class="flex items-center">
                    <svg class="w-8 h-8 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <div class="font-medium">Инструкция по установке</div>
                      <div class="text-sm text-gray-500">PDF, 2.7 МБ</div>
                    </div>
                  </div>
                  <button class="btn bg-[var(--primary)] text-white px-3 py-1 text-sm">
                    Скачать
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Дополнительные материалы</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div class="flex items-center">
                    <svg class="w-8 h-8 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <div class="font-medium">Видеоинструкция по настройке</div>
                      <div class="text-sm text-gray-500">MP4, 15:32</div>
                    </div>
                  </div>
                  <button class="btn bg-[var(--primary)] text-white px-3 py-1 text-sm">
                    Смотреть
                  </button>
                </div>
                
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div class="flex items-center">
                    <svg class="w-8 h-8 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <div class="font-medium">Таблица совместимости устройств</div>
                      <div class="text-sm text-gray-500">XLS, 1.2 МБ</div>
                    </div>
                  </div>
                  <button class="btn bg-[var(--primary)] text-white px-3 py-1 text-sm">
                    Скачать
                  </button>
                </div>
              </div>
            </div>
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">АРЕС ОС</h3>
              <p class="text-gray-600 mb-4">Специализированная операционная система для сетевого оборудования</p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-[var(--primary)]">от 50 000 ₽</span>
                <router-link to="/products/ares-os" class="btn btn-primary">
                  Подробнее
                </router-link>
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
          <h2 class="text-3xl font-bold mb-6">Нужна помощь с выбором?</h2>
          <p class="text-xl mb-8 opacity-90">
            Наши специалисты готовы помочь подобрать оптимальное решение для вашей организации
            и ответить на все технические вопросы.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="btn bg-white text-[var(--primary)] hover:bg-gray-100 text-lg px-8 py-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Заказать звонок
            </button>
            <router-link to="/contacts" class="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] transition-colors text-lg px-8 py-3 flex items-center">
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