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
              <span class="text-white font-medium">Промышленный коммутатор</span>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div class="bg-white/10 inline-block px-3 py-1 rounded-full text-sm mb-4">
              Сетевое оборудование
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Промышленный коммутатор</h1>
            <p class="text-xl mb-6 opacity-90">Надежная основа промышленной сети</p>
            <p class="text-lg mb-8 max-w-xl opacity-80">
              Управляемый коммутатор для промышленных сетей с расширенными функциями. 
              Обеспечивает надежную передачу данных в сложных производственных условиях.
            </p>
            <div class="flex flex-wrap gap-4 mb-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">24 + 4</div>
                <div class="text-sm opacity-80">Fast Ethernet + Gigabit</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">PoE</div>
                <div class="text-sm opacity-80">Питание устройств</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">от 45 000 ₽</div>
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
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <img src="/assets/proizvoditelnost.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">PoE поддержка</h3>
            <p class="text-gray-600">
              Поддержка питания через Ethernet для IP-камер, телефонов и точек доступа Wi-Fi, упрощая инфраструктуру и снижая затраты на прокладку питающих кабелей.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <img src="/assets/prom.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">Промышленная надежность</h3>
            <p class="text-gray-600">
              Защита IP40, рабочая температура от -40°C до +75°C, устойчивость к вибрациям и помехам. Резервированное питание для критически важных применений.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
             <img src="/assets/SolutionIcons/reliability.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">Расширенное управление</h3>
            <p class="text-gray-600">
              Поддержка VLAN, QoS, SNMP управления и кольцевой топологии с быстрым восстановлением для обеспечения бесперебойной работы сети.
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
              Интерфейсы и производительность
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Порты Fast Ethernet</span>
                <span class="font-medium">24 x 10/100 Мбит/с</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Порты Gigabit</span>
                <span class="font-medium">4 x 10/100/1000 Мбит/с</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Коммутационная матрица</span>
                <span class="font-medium">8.8 Гбит/с</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">PoE поддержка</span>
                <span class="font-medium">IEEE 802.3af/at</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--primary)] text-white p-4 font-medium">
              Условия эксплуатации
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Степень защиты</span>
                <span class="font-medium">IP40</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Рабочая температура</span>
                <span class="font-medium">от -40°C до +75°C</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Питание</span>
                <span class="font-medium">DC 24/48V, AC 110-240V</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Монтаж</span>
                <span class="font-medium">DIN-rail, настенный</span>
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
          <h2 class="text-3xl font-bold mb-6">Создайте надежную промышленную сеть</h2>
          <p class="text-xl mb-8 opacity-90">
            Получите консультацию по выбору и внедрению промышленного сетевого оборудования для вашего объекта
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