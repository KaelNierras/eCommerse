<template>
  <div class="relative">
    <Navigation class="fixed top-0 left-0 w-full z-50" />
    <main class="w-screen h-screen flex items-center justify-center">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import Navigation from '@/components/navigation/navigation.vue';
</script>