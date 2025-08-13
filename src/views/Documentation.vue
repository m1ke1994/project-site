<script setup lang="ts">
import { ref } from 'vue';

const categories = ref([
  {
    id: 'hardware',
    name: 'Оборудование',
    docs: [
      {
        id: 1,
        title: 'Руководство по установке маршрутизатора PRO',
        type: 'pdf',
        size: '2.4 MB',
        version: '1.2'
      },
      {
        id: 2,
        title: 'Спецификация коммутатора Enterprise',
        type: 'pdf',
        size: '1.8 MB',
        version: '1.0'
      }
    ]
  },
  {
    id: 'software',
    name: 'Программное обеспечение',
    docs: [
      {
        id: 3,
        title: 'Руководство администратора АРЕС ОС',
        type: 'pdf',
        size: '5.1 MB',
        version: '2.1'
      },
      {
        id: 4,
        title: 'Инструкция по обновлению системы',
        type: 'pdf',
        size: '1.2 MB',
        version: '1.1'
      }
    ]
  },
  {
    id: 'api',
    name: 'API Документация',
    docs: [
      {
        id: 5,
        title: 'API Reference',
        type: 'html',
        size: '3.3 MB',
        version: '1.0'
      }
    ]
  }
]);

const downloadDocument = (docId: number) => {
  // В реальном приложении здесь будет логика загрузки документа
  console.log(`Downloading document ${docId}`);
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-[var(--secondary)] text-white py-16">
      <div class="container">
        <h1 class="text-4xl font-bold mb-6">Техническая документация</h1>
        <p class="text-xl max-w-3xl">
          Полная документация по нашим продуктам, включая руководства по установке,
          настройке и администрированию
        </p>
      </div>
    </section>

    <!-- Documentation Section -->
    <section class="py-16">
      <div class="container">
        <div class="grid grid-cols-1 gap-12">
          <div
            v-for="category in categories"
            :key="category.id"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div class="bg-gray-50 px-6 py-4 border-b">
              <h2 class="text-2xl font-bold">{{ category.name }}</h2>
            </div>
            <div class="p-6">
              <div class="divide-y">
                <div
                  v-for="doc in category.docs"
                  :key="doc.id"
                  class="py-4 first:pt-0 last:pb-0"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-lg font-semibold mb-1">{{ doc.title }}</h3>
                      <div class="flex items-center text-sm text-gray-500 space-x-4">
                        <span>Версия {{ doc.version }}</span>
                        <span>{{ doc.size }}</span>
                        <span class="uppercase">{{ doc.type }}</span>
                      </div>
                    </div>
                    <button
                      @click="downloadDocument(doc.id)"
                      class="btn btn-primary flex items-center"
                    >
                      <svg
                        class="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Скачать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>