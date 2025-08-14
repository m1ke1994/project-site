<script setup lang="ts">
import { ref, reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  consent: {
    processing: false,
    marketing: false
  }
});

const formSubmitted = ref(false);
const formErrors = ref<string[]>([]);

const validateForm = () => {
  formErrors.value = [];
  
  if (!form.name.trim()) {
    formErrors.value.push('Пожалуйста, укажите ваше имя');
  }
  
  if (!form.email.trim()) {
    formErrors.value.push('Пожалуйста, укажите ваш email');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    formErrors.value.push('Пожалуйста, укажите корректный email');
  }
  
  if (!form.message.trim()) {
    formErrors.value.push('Пожалуйста, введите сообщение');
  }
  
  if (!form.consent.processing) {
    formErrors.value.push('Для отправки формы необходимо согласие на обработку персональных данных');
  }
  
  return formErrors.value.length === 0;
};

const submitForm = () => {
  if (validateForm()) {
    // В реальном приложении здесь будет отправка формы на сервер
    console.log('Form submitted:', form);
    formSubmitted.value = true;
    // Сброс формы
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      consent: {
        processing: false,
        marketing: false
      }
    });
  }
};

const closeSuccessMessage = () => {
  formSubmitted.value = false;
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-[var(--secondary)] text-white py-16">
      <div class="container">
        <h1 class="text-4xl font-bold mb-6">Контакты</h1>
        <p class="text-xl max-w-3xl">
          Свяжитесь с нами для получения дополнительной информации о продуктах и решениях
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold mb-6">Форма обратной связи</h2>
            
            <!-- Success Message -->
            <div v-if="formSubmitted" class="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <div class="flex items-center">
                <div class="py-1">
                  <svg class="w-6 h-6 mr-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Сообщение отправлено</p>
                  <p class="text-sm">Спасибо за обращение! Мы свяжемся с вами в ближайшее время.</p>
                </div>
                <button @click="closeSuccessMessage" class="ml-auto">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Form Errors -->
            <div v-if="formErrors.length > 0" class="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p class="font-bold">Пожалуйста, исправьте следующие ошибки:</p>
              <ul class="list-disc list-inside text-sm">
                <li v-for="(error, index) in formErrors" :key="index">{{ error }}</li>
              </ul>
            </div>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                  Имя <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                />
                <p class="mt-1 text-xs text-gray-500">Мы никогда не передадим ваш email третьим лицам</p>
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                />
              </div>

              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-1">
                  Компания
                </label>
                <input
                  type="text"
                  id="company"
                  v-model="form.company"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                ></textarea>
              </div>

              <!-- Consent for data processing -->
              <div class="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div class="mb-4">
                  <label class="flex items-start">
                    <input 
                      type="checkbox" 
                      v-model="form.consent.processing"
                      class="mt-1 mr-3"
                    />
                    <span class="text-sm text-gray-700">
                      <span class="text-red-500">*</span> Я согласен на обработку моих персональных данных в соответствии с 
                      <a href="/privacy-policy" class="text-[var(--primary)] hover:underline">Политикой обработки персональных данных</a>.
                      Данное согласие действует бессрочно, но может быть отозвано в любой момент.
                    </span>
                  </label>
                </div>
                
                <div>
                  <label class="flex items-start">
                    <input 
                      type="checkbox" 
                      v-model="form.consent.marketing"
                      class="mt-1 mr-3"
                    />
                    <span class="text-sm text-gray-700">
                      Я согласен получать информационные и маркетинговые материалы о продуктах и услугах компании ООО "АРЕС".
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary w-full py-3"
              >
                Отправить
              </button>
            </form>
            
            <div class="mt-4 text-xs text-gray-500">
              <p>
                Поля, отмеченные <span class="text-red-500">*</span>, обязательны для заполнения.
              </p>
              <p class="mt-2">
                В соответствии с Федеральным законом №152-ФЗ «О персональных данных» от 27.07.2006, 
                отправляя данную форму, вы подтверждаете согласие на обработку ООО «АРЕС» ваших персональных данных.
                Ваши данные не будут переданы третьим лицам.
              </p>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="bg-white rounded-lg shadow-md p-8">
              <h2 class="text-2xl font-bold mb-6">Контактная информация</h2>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg
                    class="w-6 h-6 text-[var(--primary)] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <h3 class="font-semibold mb-1">Адрес</h3>
                    <p class="text-gray-600">г. Москва, ул. Космонавта Волкова, д. 6а</p>
                  </div>
                </div>


                <div class="flex items-start">
                  <svg
                    class="w-6 h-6 text-[var(--primary)] mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 class="font-semibold mb-1">Email</h3>
                    <p class="text-gray-600">office@aresdev.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md p-8">
              <h2 class="text-2xl font-bold mb-6">Режим работы</h2>
              <div class="space-y-2">
                <p class="flex justify-between">
                  <span class="text-gray-600">Понедельник - Пятница:</span>
                  <span class="font-medium">9:00 - 18:00</span>
                </p>
                <p class="flex justify-between">
                  <span class="text-gray-600">Суббота - Воскресенье:</span>
                  <span class="font-medium">Выходной</span>
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-8">
              <h2 class="text-2xl font-bold mb-6">Юридическая информация</h2>
              <div class="space-y-2 text-gray-600 text-sm">
                <p>
                  <span class="font-medium">Полное наименование:</span> Общество с ограниченной ответственностью «АРЕС»
                </p>
                <p>
                  <span class="font-medium">ИНН:</span> 7743465390
                </p>
                <p>
                  <span class="font-medium">ОГРН:</span> 1257700062564
                </p>
                <p>
                  <span class="font-medium">Юридический адрес:</span> г. Москва, ул. Космонавта Волкова, д. 6а
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="py-8 pb-16">
      <div class="container">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 class="text-2xl font-bold p-6 border-b">Мы на карте</h2>
          <!-- Map placeholder - in a real application this would be a real map -->
         <!-- Интерактивная карта Москвы (OSM embed) с меткой на центре -->
<div class="w-full h-96 rounded-lg overflow-hidden">
  <iframe
    class="w-full h-96 border-0"
    title="Карта: Москва, ул. Космонавта Волкова, д. 6а"
    src="https://www.openstreetmap.org/export/embed.html?bbox=37.502631%2C55.805312%2C37.522631%2C55.825312&layer=mapnik&marker=55.815312%2C37.512631"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


        </div>
      </div>
    </section>
    
    <!-- Documents Section -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Правовые документы</h2>
          <p class="text-lg text-gray-600">
            Ознакомьтесь с нашими правовыми документами, включая политику конфиденциальности и условия использования
          </p>
        </div>
        
       <div class="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
  <!-- Карточка #1 -->
  <article class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <div class="p-6 flex-1 flex flex-col">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
          <svg class="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold leading-snug">Политика обработки персональных данных</h3>
      </div>

      <p class="text-gray-600 mb-6">
        Документ, определяющий порядок обработки и защиты персональных данных пользователей в соответствии с Федеральным законом №152-ФЗ.
      </p>

      <!-- Кнопка всегда прижата к низу карточки -->
      <div class="mt-auto">
        <router-link to="/privacy-policy" class="btn btn-primary">
          Ознакомиться
        </router-link>
      </div>
    </div>
  </article>

  <!-- Карточка #2 -->
  <article class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <div class="p-6 flex-1 flex flex-col">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
          <svg class="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold leading-snug">Условия использования</h3>
      </div>

      <p class="text-gray-600 mb-6">
        Документ, определяющий правила и условия использования наших продуктов и услуг, а также веб-сайта компании.
      </p>

      <!-- Кнопка всегда прижата к низу карточки -->
      <div class="mt-auto">
        <router-link to="/terms-of-use" class="btn btn-primary">
          Ознакомиться
        </router-link>
      </div>
    </div>
  </article>
</div>

      </div>
    </section>
  </div>
</template>

<style scoped>
/* Additional styles for form elements */
input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
</style>