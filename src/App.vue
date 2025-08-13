<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <TheHeader />
    <main class="flex-grow">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>