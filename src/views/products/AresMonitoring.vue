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
              <span class="text-white font-medium">Ares Monitoring</span>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div class="bg-white/10 inline-block px-3 py-1 rounded-full text-sm mb-4">
              Программное обеспечение
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Ares Monitoring</h1>
            <p class="text-xl mb-6 opacity-90">Полный контроль промышленного оборудования</p>
            <p class="text-lg mb-8 max-w-xl opacity-80">
              Комплексная платформа для мониторинга промышленного оборудования с предиктивной аналитикой. 
              Обеспечивает централизованный контроль и автоматизацию процессов.
            </p>
            <div class="flex flex-wrap gap-4 mb-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">10K</div>
                <div class="text-sm opacity-80">Устройств</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">ИИ</div>
                <div class="text-sm opacity-80">Предиктивная аналитика</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">от 90 000 ₽</div>
                <div class="text-sm opacity-80">Лицензия</div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-4">
              <button class="btn bg-white text-[var(--primary)] hover:bg-gray-100 px-6 py-3">
                Запросить предложение
              </button>
              <button class="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] transition-colors px-6 py-3">
                Загрузить демо-версию
              </button>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div class="aspect-w-16 aspect-h-9 bg-white/5 rounded-lg mb-6 overflow-hidden">
                <div class="flex items-center justify-center h-full">
                  <svg class="w-24 h-24 text-white opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
             <img src="/assets/monitoring.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">Мониторинг в реальном времени</h3>
            <p class="text-gray-600">
              Отслеживание состояния до 10 000 промышленных устройств в режиме реального времени с интерактивными дашбордами и графиками.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
            <img src="/assets/proizvoditelnost.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">Предиктивная аналитика</h3>
            <p class="text-gray-600">
              Машинное обучение для анализа трендов и предсказания отказов оборудования, позволяющее планировать техническое обслуживание заранее.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
             <img src="/assets/Remote control.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">Мобильный доступ</h3>
            <p class="text-gray-600">
              Мобильное приложение для операторов с доступом к ключевым метрикам, уведомлениям и возможностью удаленного управления оборудованием.
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
              Возможности мониторинга
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Количество устройств</span>
                <span class="font-medium">до 10 000</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Поддержка протоколов</span>
                <span class="font-medium">OPC UA, Modbus, MQTT</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">База данных</span>
                <span class="font-medium">PostgreSQL, InfluxDB</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Веб-интерфейс</span>
                <span class="font-medium">Адаптивный HTML5</span>
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
                <span class="font-medium">16 ГБ ОЗУ</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Дисковое пространство</span>
                <span class="font-medium">500 ГБ SSD</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Развертывание</span>
                <span class="font-medium">Docker, Kubernetes</span>
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
          <h2 class="text-3xl font-bold mb-6">Оптимизируйте работу вашего производства</h2>
          <p class="text-xl mb-8 opacity-90">
            Получите консультацию по внедрению системы мониторинга и предиктивной аналитики для промышленного оборудования
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