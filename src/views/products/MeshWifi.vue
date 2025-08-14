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
              <span class="text-white font-medium">Промышленная mesh точка доступа Wi-Fi</span>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div class="bg-white/10 inline-block px-3 py-1 rounded-full text-sm mb-4">
              Сетевое оборудование
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Промышленная mesh точка доступа Wi-Fi</h1>
            <p class="text-xl mb-6 opacity-90">Надежная беспроводная связь в любых условиях</p>
            <p class="text-lg mb-8 max-w-xl opacity-80">
              Промышленная беспроводная точка доступа для создания mesh-сетей в сложных условиях производственных объектов. 
              Поддерживает Wi-Fi 6 и обеспечивает бесшовное покрытие больших площадей.
            </p>
            <div class="flex flex-wrap gap-4 mb-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">Wi-Fi 6</div>
                <div class="text-sm opacity-80">Стандарт 802.11ax</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">IP67</div>
                <div class="text-sm opacity-80">Защита от пыли и влаги</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">от 35 000 ₽</div>
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
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
                  <div class="font-medium">5-7 рабочих дней</div>
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
              <img src="/assets/wifi.svg" alt="wifi">
            </div>
            <h3 class="text-xl font-bold mb-3">Mesh-технология</h3>
            <p class="text-gray-600">
              Создание бесшовных беспроводных сетей большой площади с автоматическим переключением между точками доступа для обеспечения непрерывной связи.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <img src="/assets/prom.svg" alt="prom">
            </div>
            <h3 class="text-xl font-bold mb-3">Промышленное исполнение</h3>
            <p class="text-gray-600">
              Защита IP67, рабочая температура от -40°C до +70°C, устойчивость к вибрациям и электромагнитным помехам для работы в сложных условиях.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <img src="/assets/proizvoditelnost.svg" alt="proizvoditelnost">
            </div>
            <h3 class="text-xl font-bold mb-3">Высокая производительность</h3>
            <p class="text-gray-600">
              Wi-Fi 6 (802.11ax) с максимальной скоростью до 1.8 Гбит/с, поддержка до 128 одновременных подключений и дальность покрытия до 300 метров.
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
              Беспроводная связь
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Стандарт Wi-Fi</span>
                <span class="font-medium">802.11ax (Wi-Fi 6)</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Частотные диапазоны</span>
                <span class="font-medium">2.4 ГГц, 5 ГГц</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Максимальная скорость</span>
                <span class="font-medium">до 1.8 Гбит/с</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Одновременные подключения</span>
                <span class="font-medium">до 128 устройств</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-[var(--primary)] text-white p-4 font-medium">
              Физические характеристики
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Степень защиты</span>
                <span class="font-medium">IP67</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Рабочая температура</span>
                <span class="font-medium">от -40°C до +70°C</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Питание</span>
                <span class="font-medium">PoE+ (до 30 Вт)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Дальность покрытия</span>
                <span class="font-medium">до 300 метров</span>
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
          <h2 class="text-3xl font-bold mb-6">Нужна консультация по внедрению?</h2>
          <p class="text-xl mb-8 opacity-90">
            Наши специалисты помогут подобрать оптимальное решение для создания беспроводной сети на вашем объекте
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