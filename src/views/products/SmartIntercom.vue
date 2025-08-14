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
              <span class="text-white font-medium">Умный домофон</span>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div class="bg-white/10 inline-block px-3 py-1 rounded-full text-sm mb-4">
              Системы контроля доступа
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Умный домофон</h1>
            <p class="text-xl mb-6 opacity-90">Безопасность с элементами ИИ</p>
            <p class="text-lg mb-8 max-w-xl opacity-80">
              IP-домофон с распознаванием лиц и удаленным управлением через мобильное приложение. 
              Обеспечивает высокий уровень безопасности и удобство использования.
            </p>
            <div class="flex flex-wrap gap-4 mb-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">ИИ</div>
                <div class="text-sm opacity-80">Распознавание лиц</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">7"</div>
                <div class="text-sm opacity-80">Сенсорный экран</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div class="text-2xl font-bold">от 25 000 ₽</div>
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
                  <div class="font-medium">2 года</div>
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
               <img src="/assets/ii.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">ИИ распознавание лиц</h3>
            <p class="text-gray-600">
              Современный алгоритм распознавания лиц с базой данных до 10 000 человек. Быстрая идентификация и автоматическое открытие для авторизованных лиц.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
               <img src="/assets/Remote control.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">Удаленное управление</h3>
            <p class="text-gray-600">
              Мобильное приложение для iOS и Android позволяет отвечать на звонки, открывать замок и управлять доступом из любой точки мира через интернет.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-[var(--primary)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
             <img src="/assets/prom.svg" alt="">
            </div>
            <h3 class="text-xl font-bold mb-3">Вандалостойкость</h3>
            <p class="text-gray-600">
              Прочный металлический корпус с защитой от вандализма, степень защиты IP54 и работа при температуре от -30°C до +60°C.
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
              Аудио/видео функции
            </div>
            <div class="p-6 space-y-3">
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Экран</span>
                <span class="font-medium">7" TFT сенсорный</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Камера</span>
                <span class="font-medium">Full HD 1080p</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Ночное видение</span>
                <span class="font-medium">ИК подсветка до 3м</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Аудио</span>
                <span class="font-medium">Двусторонняя связь, эхоподавление</span>
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
                <span class="font-medium">IP54</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Рабочая температура</span>
                <span class="font-medium">от -30°C до +60°C</span>
              </div>
              <div class="flex justify-between border-b pb-3">
                <span class="text-gray-600">Связь</span>
                <span class="font-medium">Ethernet, Wi-Fi</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Питание</span>
                <span class="font-medium">DC 12V / PoE</span>
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
          <h2 class="text-3xl font-bold mb-6">Повысьте безопасность вашего объекта</h2>
          <p class="text-xl mb-8 opacity-90">
            Получите консультацию по внедрению системы контроля доступа с элементами искусственного интеллекта
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