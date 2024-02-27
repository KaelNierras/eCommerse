<script setup lang="ts">
import {RouterView} from 'vue-router'
import Navigation from '@/components/navigation/navigation.vue';
</script>

<template>
  <Navigation />
  <main class="w-screen h-screen flex items-center justify-center">
    <RouterView />
  </main>
</template>

